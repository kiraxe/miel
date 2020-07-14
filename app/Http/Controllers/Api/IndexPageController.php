<?php
namespace App\Http\Controllers\Api;
use App\Category;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;

class IndexPageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::with('attributes')->get()->toArray();

        $products = Product::with('attributes')->where('popular', 1)->orWhere('novelty', 1)->get()->toArray();

        $result= [];

        $result['popular'] = collect([]);
        $result['novelty'] = collect([]);

        foreach ($products as $key => $value) {

            if ($value['popular'] === 1) {
                $result['popular']->push($value);
            }

            if($value['novelty'] === 1) {
                $result['novelty']->push($value);
            }

        }

        $result['categories'] = $categories;

        return $this->sendResponse($result, 'indexPage retrieved successfully.');
    }

}
