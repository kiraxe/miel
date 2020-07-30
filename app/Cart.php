<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'cart';

    protected $primaryKey = 'cart_id';

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['client_id', 'delivery_id', 'cart_to_product'];


    public function cartToProduct() {
        return $this->hasMany(CartToProduct::class, 'cart_id', 'cart_id')->with('orderDetail');
    }

    public function delivery() {
        return $this->hasOne(Delivery::class, 'delivery_id', 'delivery_id');
    }

}

