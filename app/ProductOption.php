<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class ProductOption extends Model
{
    protected $table = 'product_option';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['product_id', 'option_id', 'option_value', 'required'];


    public function options() {
        return $this->hasOne(Option::class, 'option_id', 'option_id')->with('description');
    }

    public function productOptionsValue() {
        return $this->hasOne(ProductOptionValue::class, 'product_option_id', 'product_option_id');
    }

}

