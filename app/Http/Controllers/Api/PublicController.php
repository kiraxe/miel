<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Settings;
use App\Category;

class PublicController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $settings = Settings::find(1)->toArray();
        $categories = Category::with('attributes')->get()->toArray();

        $result= [];

        foreach ($settings as $key => $value) {
            if ($key == 'vk' || $key == 'facebook' || $key == 'instagram' || $key == 'youtube') {
                $result['settings']['social'][$key] = $value;
            } else {
                $result['settings'][$key] = $value;
            }
        }

        $result['categories'] = $categories;

        return $this->sendResponse($result, 'Public retrieved successfully.');
    }

}
