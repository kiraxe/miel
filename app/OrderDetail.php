<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $table = 'order_detail';

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['product_name', 'unit_price', 'count', 'total_price', 'order_id', 'product_id', 'image', 'article', 'options'];

}

