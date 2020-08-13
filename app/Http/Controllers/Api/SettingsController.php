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

        $banner_main_page = $request->file('banner_main_page');
        $banner_other_page = $request->file('banner_other_page');

        $settings->banner_main_page = $settings->uploadBanner($settings->banner_main_page, "main", $input['banner_main_page'], $banner_main_page);
        $settings->banner_other_page = $settings->uploadBanner($settings->banner_other_page, 'catalog', $input['banner_other_page'], $banner_other_page);

        $from = explode("T", $input['from']);
        $to = explode("T", $input['to']);


        $settings->from = $from[0];
        $settings->to = $to[0];
        $settings->phone = $input['phone'];
        $settings->description_main_page = $input['description_main_page'];
        $settings->title_main_page = $input['title_main_page'];
        $settings->title_other_page = $input['title_other_page'];
        $settings->description_other_page = $input['description_other_page'];
        $settings->worktime = $input['worktime'];
        $settings->email = $input['email'];
        $settings->worktime = $input['worktime'];
        $settings->phone_manager = $input['phone_manager'];
        $settings->manager_name = $input['manager_name'];
        $settings->manager_email = $input['manager_email'];
        $settings->youtube = $input['youtube'];
        $settings->facebook = $input['facebook'];
        $settings->vk = $input['vk'];
        $settings->instagram = $input['instagram'];

        $settings->save();

        return $this->sendResponse($settings->toArray(), 'Settings updated successfully.');
    }
}
