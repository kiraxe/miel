<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Category;
use Illuminate\Support\Facades\Storage;
use App\Services\SelectForm;
use Validator;

class CategoryController extends BaseController
{
    private $storagePath = "/storage/";
    private $storageCategoryPath = "category/";


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Category::with('attributes');

        $arr = [];

        $queryGet = $query->get();

        foreach ($queryGet as $key => $value) {
            $arr[$key] = $value->getAllParentNameAndId();
        }

        $category = $query->paginate(5)->toArray();


        foreach ($category['data'] as $key => $value) {
            foreach ($arr as $val) {
                if ($value['category_id'] == $val['id']) {
                    $category['data'][$key]['parentNames'] = implode('->', $val['parent']);
                    $category['data'][$key]['parentLinks'] = implode('->', $val['link']);
                }
            }
        }

        $category['select'] = SelectForm::getSelectCategory($queryGet);

        return $this->sendResponse($category, 'Categories retrieved successfully.');
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
            'link' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $category = Category::create($input);

        $category->attributes()->create(['name' => $input['name'], 'description' => $input['description']]);

        $image = $request->file('image');

        if($image) {
            $path = $image->store("uploads/$this->storageCategoryPath"."$category->category_id", 'public');
            $category->image = $this->storagePath.$path;
            $category->save();
        }

        $parentName = $category->getAllParentNameAndId();

        $category->parentNames = implode("->", $parentName['parent']);

        return $this->sendResponse($category->allAttributes(), 'Category created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $category_id
     * @return \Illuminate\Http\Response
     */
    public function show($category_id)
    {
        $category = Category::find($category_id);
        if (is_null($category)) {
            return $this->sendError('Category not found.');
        }
        return $this->sendResponse($category->toArray(), 'Category retrieved successfully.');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $category_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {

        $input = $request->all();

        $validator = Validator::make($input, [
            'parent_id' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $image = $request->file('image');

        if ($category->image && !empty($image)) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $category->image));
            $category->image = $this->storagePath.$image->store("uploads/$this->storageCategoryPath"."$category->category_id", 'public');
        } elseif($category->image && is_null($input['image'])) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $category->image));
            $category->image = null;
        } elseif(!$category->image && !empty($image)) {
            $category->image = $this->storagePath.$image->store("uploads/$this->storageCategoryPath"."$category->category_id", 'public');
        }

        if($input['parent_id'] == 'null') {
            settype($input['parent_id'], "null");
        }

        $category->parent_id = $input['parent_id'];
        $category->link = $input['link'];

        $category->attributes()->update(['name' => $input['name'], 'description' => $input['description']]);

        $category->save();

        $parentName = $category->getAllParentNameAndId();

        $category->parentNames = implode("->", $parentName['parent']);

        return $this->sendResponse($category->allAttributes(), 'Category updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $category_id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->image) {
            Storage::disk('public')->deleteDirectory("/uploads/$category->category_id");
        }

        $category->delete();

        return $this->sendResponse($category->toArray(), 'Category deleted successfully.');
    }
}
