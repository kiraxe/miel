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
        'name', 'detail', 'article', 'price', 'property','percent', 'minfree', 'min', 'novelty', 'options'
    ];

    protected $primaryKey = 'product_id';

    public function getAttributeCatId() {
        return $this->attributes()->get("category_id");
    }

    public function attributes() {
        return $this->hasMany(ProductToCategory::class, 'product_id', 'product_id');
    }

    public function addAttributes($record) {
        $this->attributes()->createMany($record);
    }

    public function deleteAttributes(array $categories_id) {
        if (empty($categories_id)) {
            $this->attributes()->delete();
        } else {
            $this->attributes()->whereNotIn('category_id', $categories_id)->delete();
        }
    }

    public function makeAttributes(string $categories) {

        $attribute = $this->attributes()->get()->toArray();
        $categories_id = explode(",", $categories);

        foreach ($categories_id as $value) {
            $prod_to_cat[] = ['category_id' => (int)$value];
        }

        if (empty($attribute)) {
            $this->addAttributes($prod_to_cat);
        } else {

            $this->deleteAttributes($categories_id);

            $createActivate = false;

            foreach ($prod_to_cat as $key => $value) {
                foreach ($attribute as $val) {
                    if ($value['category_id'] === $val['category_id']) {
                        unset($prod_to_cat[$key]);
                        $createActivate = true;
                    }
                }
            }

            if (!empty($prod_to_cat) && $createActivate) {
                $this->addAttributes($prod_to_cat);
            }
        }
    }

}
