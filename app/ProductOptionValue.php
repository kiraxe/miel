<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class ProductOptionValue extends Model
{
    protected $table = 'product_option_value';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['product_id', 'option_id', 'option_value_id', 'product_option_id'];


    public function options() {
        return $this->hasOne(Option::class, 'option_id', 'option_id')->with('valueDescription');
    }

}
