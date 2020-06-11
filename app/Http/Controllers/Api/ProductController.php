<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Product;
use Illuminate\Support\Facades\Storage;
use Validator;

class ProductController extends BaseController
{
    private $storagePath = "/storage/";


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(5);
        return $this->sendResponse($products->toArray(), 'Categories retrieved successfully.');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'article' => 'required',
            'detail' => 'required',
            'price' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input['novelty'] = ($input['novelty'] === 'true');

        $product = Product::create($input);

        $image = $request->file('image');

        if($image) {
            $path = $image->store("uploads/$product->product_id", 'public');
            $product->image = $this->storagePath.$path;
            $product->save();
        }

        return $this->sendResponse($product->toArray(), 'Category created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $product_id
     * @return \Illuminate\Http\Response
     */
    public function show($product_id)
    {
        $product = Product::find($product_id);
        if (is_null($product)) {
            return $this->sendError('Category not found.');
        }
        return $this->sendResponse($product->toArray(), 'Category retrieved successfully.');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $product_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'article' => 'required',
            'detail' => 'required',
            'price' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $image = $request->file('image');

        if ($product->image && !empty($image)) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $product->image));
            $product->image = $this->storagePath.$image->store("uploads/$product->product_id", 'public');
        } elseif($product->image && is_null($input['image'])) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $product->image));
            $product->image = null;
        } elseif(!$product->image && !empty($image)) {
            $product->image = $this->storagePath.$image->store("uploads/$product->product_id", 'public');
        }

        $input['novelty'] = ($input['novelty'] === 'true');

        $product->name = $input['name'];
        $product->detail = $input['detail'];
        $product->novelty = $input['novelty'];
        $product->article = $input['article'];
        $product->property = $input['property'];
        $product->price = $input['price'];
        $product->save();

        return $this->sendResponse($product->toArray(), 'Category updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $product_id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->deleteDirectory("/uploads/$product->product_id");
        }

        $product->delete();

        return $this->sendResponse($product->toArray(), 'Category deleted successfully.');
    }
}
