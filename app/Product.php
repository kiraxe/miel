<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'detail_min', 'detail', 'article', 'price', 'property','percent', 'min', 'novelty', 'options', 'price_quarterly', 'price_second', 'price_third', 'min_quarterly', 'min', 'min_second', 'min_third', 'popular'
    ];

    protected $primaryKey = 'product_id';


    public function getAttributeCatId() {
        return $this->attributes()->get("category_id");
    }

    public function attributes() {
        return $this->hasMany(ProductToCategory::class, 'product_id', 'product_id')->with('attributes');
    }

    public function productOptions() {
        return $this->hasMany(ProductOption::class, 'product_id', 'product_id');
    }

    public function productOptionsRelations() {
        return $this->hasMany(ProductOption::class, 'product_id', 'product_id')->with('options');
    }

    public function productOptionsValue() {
        return $this->hasMany(ProductOptionValue::class, 'product_id', 'product_id');
    }

    public function productOptionsValueRelations() {
        return $this->hasMany(ProductOptionValue::class, 'product_id', 'product_id')->with('options');
    }

    public function addAttributes($record) {
        $this->attributes()->createMany($record);
    }

    public function deleteProductOption($option_id = null) {
        if ($option_id) {
            $this->productOptions()->whereNotIn('option_id', $option_id)->delete();
        } else {
            $this->productOptions()->delete();
        }
    }

    public function deleteProductOptionsValue($option_value_id = null) {
        if ($option_value_id) {
            $this->productOptionsValue()->whereNotIn('option_value_id', $option_value_id)->delete();
        } else {
            $this->productOptionsValue()->delete();
        }
    }

    public function deleteAllOptions() {
        $this->deleteProductOption();
        $this->deleteProductOptionsValue();
    }

    public function makeProductOptions($params) {
        $options = [];

        $params = json_decode($params, true);

        $options_id = collect([]);
        $options_value_id = collect([]);
        $id = null;

        foreach ($params as $key => $value) {
            $options_id->push($value['option']);
            $option =  $this->productOptions()->updateOrCreate(['option_id' => $value['option'], 'option_value' => 'Опция', 'required' => 1]);
            $option->id ? $id = $option->id : $id = $option->product_option_id;
            $options[$key]['option'] = $option->option_id;
            foreach ($value['optionval'] as $k => $v) {
                $options_value_id->push($v);
                $optionsValue = $this->productOptionsValue()->updateOrCreate(['option_id' => $value['option'], 'option_value_id' => $v, 'product_option_id' => $id ]);
                $options[$key]['optionval'][] = $optionsValue->option_value_id;
            }
        }

        $this->deleteProductOption($options_id);
        $this->deleteProductOptionsValue($options_value_id);

        return $options;
    }

    public function getProductOptions() {

        $options = [];

        $productOptions = $this->productOptionsRelations()->get();
        $productOptionsValue = $this->productOptionsValueRelations()->get();

        foreach ($productOptions as $key => $value) {
            $options[$key]['option'] = $value->option_id;
            foreach ($productOptionsValue as $k => $val) {
                if ($val->option_id == $value->option_id) {
                    $options[$key]['optionval'][] = $val->option_value_id;
                }
            }
        }

        return $options;
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
