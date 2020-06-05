<?php

namespace App\Http\Controllers\Api;

use App\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

  public function register (Request $request) {

    //NEW USER Validation
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|confirmed',
    ]);

    //Validation Failed ...
    if ($validator->fails())
    {
        return response(['errors' => $validator->errors()->all()], 422);
    }

    //Validation success...

    //Password Hash
    $request['password'] = \Hash::make($request['password']);

    if (isset($request->client)) {
        //Create user from request
        $newUser = Client::create($request->toArray());
        //create accessToken for newUser
        $token = $newUser->createToken('Clientele')->accessToken;
    } else {
        //Create user from request
        $newUser = User::create($request->toArray());
        //create accessToken for newUser
        $token = $newUser->createToken('Admin')->accessToken;
    }

    //return response with STATUS 200 and generated token
    $response = ['token' => $token, 'currentUser' => $newUser];

    return response($response, 200);

  }

  public function login (Request $request) {

      //Retrieve user with email in request
    if (isset($request->client)) {
        $user = Client::where('email', $request->email)->first();
    }  else {
        $user = User::where('email', $request->email)->first();
    }

    if ($user->hasPermission('manager-users')) {
        $permission = "Admin";
    } elseif ($user->hasPermission('manager-clients')) {
        $permission = "Client";
    }

    //If db query DID NOT return a result...
    if (!$user) {

      $response = ['error' => 'Пользователь не существует'];
      return response($response, 422);
    }

    //else if User EXISTS
    //Check that passwordInRequest === passwordInDatabase
    if (\Hash::check($request->password, $user->password)) {

        //PASSWORD OK
        //Create a token for currentUser for this "session"
        if (isset($request->client)) {
            $token = $user->createToken('Clientele')->accessToken;
        } else {
            $token = $user->createToken('Admin')->accessToken;
        }

        //and return it with the response
        $response = ['token' => $token, 'id' => $user->id, 'email' => $user->email, 'name' => $user->name, 'permission' => $permission];

        return response($response, 200);
    } else {

        //response brings password error
        $response = ['error' => "Не верный пароль"];

        return response($response, 422);
    }

  }


  public function logout (Request $request) {

    //Revoke the token for the corresponding user
    $token = $request->user()->token();
    $token->revoke();

    //send response with 200 STATUS and logout feedback
    $response = ['success' => 'Вы авторизованы!'];
    return response($response, 200);

  }

  public function me (Request $request) {
      $user = \auth()->user();

      if (!$user) {
          $response = ['error' => 'Вы не авторизованы'];
          return response($response, 422);
      }

      return response(['user' => $user ], 200);
  }

}
