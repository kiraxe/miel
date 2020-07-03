<?php
namespace App\Http\Controllers\Api;
use App\Category;
use App\Services\SelectForm;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Product;
use Illuminate\Support\Facades\Storage;
use Validator;

class ProductController extends BaseController
{
    private $storagePath = "/storage/";
    private $storageProductsPath = "products/";


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Product::with('attributes');

        $category = Category::with('attributes')->get();

        $products = $query->paginate(5)->toArray();

        $products['select'] = SelectForm::getSelectCategory($category);

        return $this->sendResponse($products, 'Products retrieved successfully.');
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

        if(isset($input['novelty'])) {
            $input['novelty'] = ($input['novelty'] === 'true');
        }

        $product = Product::create($input);

        /*if (isset($input['categories_id'])) {

            $categories_id = explode(",", $input['categories_id']);

            foreach ($categories_id as $value) {
                $prod_to_cat[] = ['category_id' => (int)$value];
            }

            $product->addAttributes($prod_to_cat);
        }*/

        if (isset($input['categories_id'])) {
            $product->makeAttributes($input['categories_id']);
        }

        $image = $request->file('image');

        if($image) {
            $path = $image->store("uploads/$this->storageProductsPath"."$product->product_id", 'public');
            $product->image = $this->storagePath.$path;
            $product->save();
        }

        $product->toArray();

        $product['categories_id'] = $input['categories_id'];

        return $this->sendResponse($product, 'Product created successfully.');
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
        return $this->sendResponse($product->toArray(), 'Product retrieved successfully.');
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
            $product->image = $this->storagePath.$image->store("uploads/$this->storageProductsPath"."$product->product_id", 'public');
        } elseif($product->image && is_null($input['image'])) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $product->image));
            $product->image = null;
        } elseif(!$product->image && !empty($image)) {
            $product->image = $this->storagePath.$image->store("uploads/$this->storageProductsPath"."$product->product_id", 'public');
        }


        if (isset($input['categories_id'])) {
            $product->makeAttributes($input['categories_id']);
        } else {
            $product->deleteAttributes([]);
        }

        if(isset($input['novelty'])) {
            $input['novelty'] = ($input['novelty'] === 'true');
            $product->novelty = $input['novelty'];
        }

        $product->name = $input['name'];
        $product->detail = $input['detail'];
        $product->article = $input['article'];
        $product->property = $input['property'];
        $product->price = $input['price'];
        $product->percent = $input['percent'];
        $product->minfree = $input['minfree'];
        $product->min = $input['min'];
        $product->save();

        $product->toArray();

        $product['categories_id'] = $input['categories_id'];

        return $this->sendResponse($product, 'Product updated successfully.');
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

        return $this->sendResponse($product->toArray(), 'Product deleted successfully.');
    }
}
