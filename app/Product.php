<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'detail', 'article', 'price', 'property', 'novelty', 'options'
    ];

    protected $primaryKey = 'product_id';

}
