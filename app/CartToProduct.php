<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class CartToProduct extends Model
{
    protected $table = 'cart_to_product';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['cart_id', 'order_detail_id'];

    public function orderDetail() {
        return $this->hasOne(OrderDetail::class, 'order_detail_id', 'order_detail_id');
    }

}

