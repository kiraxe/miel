<?php


namespace App\Http\Controllers\Api;

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
            $products = $query->offset($offset)->limit($limit)->get()->toArray();
        }

        $result['products'] = $products;
        $result['totalProduct'] = $countProducts;

        return $this->sendResponse($result, 'Catalog retrieved successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::where('product_id', $id)->with('attributes')->get()->toArray();

        return $this->sendResponse($product, 'Product retrieved successfully.');
    }
}
