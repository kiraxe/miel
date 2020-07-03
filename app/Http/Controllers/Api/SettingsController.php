<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Settings;

class SettingsController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $settings = Settings::find(1);
        return $this->sendResponse($settings->toArray(), 'Settings retrieved successfully.');
    }

    public function store(Request $request)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();

        $settings = Settings::find($id);

        $from = explode("T", $input['from']);
        $to = explode("T", $input['to']);

        $settings->from = $from[0];
        $settings->to = $to[0];

        $settings->save();

        return $this->sendResponse($settings->toArray(), 'Settings updated successfully.');
    }
}
