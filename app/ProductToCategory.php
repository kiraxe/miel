<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class ProductToCategory extends Model
{
    protected $table = 'product_to_category';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['product_id', 'category_id'];


    public function attributes() {
        return $this->hasOne(Category::class, 'category_id', 'category_id')->with('attributes');
    }

    public function product() {
        return $this->belongsTo(Product::class, 'product_id', 'product_id')->with('attributes');
    }

}
