<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class Orders extends Model
{
    protected $table = 'orders';

    protected $primaryKey = 'order_id';

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['client_id','status', 'total', 'cart_id', 'comment_id', 'type_id'];


    public function cart() {
        return $this->hasOne(Cart::class, 'cart_id', 'cart_id')->with(['delivery', 'cartToProduct']);
    }

    public function comment() {
        return $this->hasOne(Comment::class, 'comment_id', 'comment_id');
    }

    public function client() {
        return $this->belongsTo(Client::class, 'client_id', 'id' );
    }

    public function orderType() {
        return $this->hasOne(OrderType::class, 'order_type_id', 'type_id');
    }


}

