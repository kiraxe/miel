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
        return $this->sendResponse($products->toArray(), 'Products retrieved successfully.');
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
            'detail' => 'required',
            'price' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $product = Product::create($input);

        $image = $request->file('image');

        if($image) {
            $path = $image->store("uploads/$product->id", 'public');
            $product->image = $this->storagePath.$path;
            $product->save();
        }

        return $this->sendResponse($product->toArray(), 'Product created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }
        return $this->sendResponse($product->toArray(), 'Product retrieved successfully.');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'detail' => 'required',
            'price' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $image = $request->file('image');

        if ($product->image && !empty($image)) {
            $product->image = $this->storagePath.$image->store("uploads/$product->id", 'public');
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $product->image));
        } elseif($product->image && is_null($input['image'])) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $product->image));
            $product->image = null;
        } elseif(!$product->image && !empty($image)) {
            $product->image = $this->storagePath.$image->store("uploads/$product->id", 'public');
        }

        $product->name = $input['name'];
        $product->detail = $input['detail'];
        $product->price = $input['price'];
        $product->save();

        return $this->sendResponse($product->toArray(), 'Product updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->deleteDirectory("/uploads/$product->id");
        }

        $product->delete();

        return $this->sendResponse($product->toArray(), 'Product deleted successfully.');
    }
}
