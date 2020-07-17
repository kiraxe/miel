<?php

namespace App\Http\Controllers\Api;

use App\Client;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AuthClientController extends BaseController
{

    public function register (Request $request) {

        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input['password'] = \Hash::make($input['password']);

        try {
            $client = Client::create($input);
        } catch (QueryException $exception) {

            $errorInfo = $exception->errorInfo;

            if ($errorInfo[0] === "23000") {
                $messageErr = "Такой адрес электронной почты или логин уже зарегистрирован";
            } else {
                $messageErr = $errorInfo;
            }

            return $this->sendError($messageErr);
        }

        return $this->sendResponse($client->toArray(), 'Регистрация прошла успешно');

    }

    public function login (Request $request) {

        //Retrieve user with email in request

        $user = Client::where('email', $request->email)->orWhere('login', $request->email)->first();
        $permission = "Client";

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
            $token = $user->createToken('Clientele')->accessToken;

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
