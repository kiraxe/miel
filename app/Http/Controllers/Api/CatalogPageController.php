<?php


namespace App\Http\Controllers\Api;

use App\Option;
use App\Product;
use App\ProductToCategory;
use Illuminate\Support\Facades\Input;


class CatalogPageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $input = Input::get('page');
        $offset = Input::get('offset');
        $limit = Input::get('limit');
        $countProducts = null;
        $result = [];

        if ($input != 'null') {
            //$products = Product::join('product_to_category as attributes', 'attributes.product_id', '=', 'products.product_id')->where('attributes.category_id', $input)->with('attributes')->get()->toArray();
            $query = ProductToCategory::with('product')->where('category_id', $input);
            $countProducts = $query->count();
            $productToCategory = $query->offset($offset)->limit($limit)->get()->toArray();

            $products = [];

            foreach ($productToCategory as $key => $value) {
                $products[] = $value['product'];
            }
        } else {
            $query = Product::with('attributes');
            $countProducts = $query->count();
            $products = $query->offset($offset)->limit($limit)->get()->toArray();;
        }

        $result['products'] = $products;
        $result['totalProduct'] = $countProducts;

        return $this->sendResponse($result, 'Product retrieved successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $options = Option::with(['description', 'valueDescription'])->get();

        $product = Product::find($id);

        $opt = [];

        foreach ($product->getProductOptions() as $k => $v) {
            foreach ($options as $key => $value) {
                if ($value->option_id === $v['option']) {
                    $opt[] = (object)[
                        'option_id' => $value->option_id,
                        'name' => $value->description->name,
                        'value' => $value->valueDescription
                    ];
                }
            }
        }

        $product->options = $opt;

        return $this->sendResponse($product->toArray(), 'Product retrieved successfully.');
    }
}
