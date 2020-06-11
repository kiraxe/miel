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

    //->login - POST
    Route::post('/login', 'Api\AuthController@login')->name('login.api');

    //->register - POST
    Route::post('/register', 'Api\AuthController@register')->name('register.api');

    //->product - POST
    Route::resource('/products', 'Api\ProductController');

    //->clientele
    Route::resource('/clientele', 'Api\ClientController');

    //->categories
    Route::resource('/category', 'Api\CategoryController');

});

// private routes

Route::middleware(['auth:api','json.response'])->group(function () {

     //->user - GET
     Route::get('/user','Api\UserController@show')->name('user.show');
     //->logout - GET
     Route::delete('/logout', 'Api\AuthController@logout')->name('logout');
     //->me
     Route::get('/me', 'Api\AuthController@me')->name('me.api');
     //->product
     Route::resource('/products', 'Api\ProductController');

     //->clientele
     Route::resource('/clientele', 'Api\ClientController');

    //->categories
    Route::resource('/category', 'Api\CategoryController');

});

