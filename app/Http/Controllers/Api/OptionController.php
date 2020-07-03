<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Option;
use Illuminate\Support\Facades\Storage;
use Validator;

class OptionController extends BaseController
{/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $query = Option::with('description', 'valueDescription')->get();

        $options = $query->paginate(5)->toArray();

        return $this->sendResponse($options, 'Options retrieved successfully.');
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

        $options = Option::create($input);

        $options->description()->create($input);

        return $this->sendResponse($options->toArray(), 'Option created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $product_id
     * @return \Illuminate\Http\Response
     */
    public function show($option_id)
    {
        $option = Option::find($option_id);
        if (is_null($option)) {
            return $this->sendError('Option not found.');
        }
        return $this->sendResponse($option->toArray(), 'Option retrieved successfully.');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $option_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Option $option)
    {

        $input = $request->all();

        $option->type = $input['type'];
        $option->description->name = $input['name'];


        $optionValue = [];

        if ($input['optionval']) {

            $optionVal = explode(',', $input['optionval']);

            foreach ($optionVal as $key => $value) {
                $optionValue[$key] = OptionValue::create(['option_id' => (int)$input['option_id']]);
                $optionValue[$key]->description()->create(['option_id' => (int)$input['option_id'], 'name' => $value]);
                $optionValue[$key]->push();
                $optionValue[$key]->name = $value;
            }
        }

        $option->push();

        $option->toArray();

        $option['option_value'] = $optionValue;

        return $this->sendResponse($option, 'Option updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $option_id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Option $option)
    {
        $option->delete();

        return $this->sendResponse($option->toArray(), 'Option deleted successfully.');
    }
}
