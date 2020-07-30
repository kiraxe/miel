<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public routes


Route::middleware('json.response')->group(function () {

    //-Admin

    //->login - POST
    Route::post('/login', 'Api\AuthController@login')->name('login.api');

    //->register - POST
    Route::post('/register', 'Api\AuthController@register')->name('register.api');

    //->login_client - POST
    Route::post('/login_client', 'Api\AuthClientController@login')->name('login.client');

    //->register_client - POST
    Route::post('/registration_client', 'Api\AuthClientController@register')->name('register.client');

    //->product - POST
    Route::resource('/products', 'Api\ProductController');

    //->clientele
    Route::resource('/clientele', 'Api\ClientController');

    //->categories
    Route::resource('/category', 'Api\CategoryController');

    //->settings
    Route::resource('/settings', 'Api\SettingsController');

    //->options
    Route::resource('/options', 'Api\OptionController');

    //-Public
    Route::get('public', 'Api\PublicController@index');
    //-index
    Route::get('index', 'Api\IndexPageController@index');
    //-catalog
    Route::resource('/catalog', 'Api\CatalogPageController');

    Route::resource('/orders_admin', 'Api\OrderController');

});

// private routes

Route::middleware(['auth:api','json.response'])->group(function () {

    //->user - GET
    Route::get('/user','Api\UserController@show')->name('user.show');

    //->logout - GET
    Route::delete('/logout', 'Api\AuthController@logout')->name('logout');

    //->me
    Route::get('/me', 'Api\AuthController@me')->name('me.api');

    //order
    Route::resource('/order', 'Api\OrderController');

    //->product
    //Route::resource('/products', 'Api\ProductController');

    //->clientele
    //Route::resource('/clientele', 'Api\ClientController');

    //->categories
    //Route::resource('/category', 'Api\CategoryController');

    //->settings
    //Route::resource('/settings', 'Api\SettingsController');

    //->options
    //Route::resource('/options', 'Api\OptionController');


});


Route::middleware(['auth:client','json.response'])->group(function () {

    //->logout - GET
    Route::delete('/logout_client', 'Api\AuthClientController@logout')->name('logout');

    //->me
    Route::get('/me_client', 'Api\AuthClientController@me')->name('me.client');

    //account
    Route::resource('/account', 'Api\AccountPageController');

    //order
    Route::post('/order', 'Api\OrdersPublicController@add');

});
