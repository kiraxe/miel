<?php
namespace App\Http\Controllers\Api;
use App\Client;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use Validator;

class AccountPageController extends BaseController
{
    public function index() {}
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = Client::find($id)->toArray();

        $result = [];

        $result['client'] = $client;

        return $this->sendResponse($result, 'accountPage retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $input = $request->all();

        $client = $client::find($input['id']);

        $validator = Validator::make($input, [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $client->login = $input['login'];
        $client->name = $input['name'];
        $client->phone = $input['phone'];
        $client->email = $input['email'];
        $client->addressK = $input['addressK'];
        $client->addressP = $input['addressP'];
        $client->company = $input['company'];
        $client->inn = $input['inn'];
        $client->kpp = $input['kpp'];
        $client->rs = $input['rs'];
        $client->bik = $input['bik'];
        $client->ks = $input['ks'];
        $client->password = empty($input['password']) ? $client->password : \Hash::make($input['password']);

        try {
            $client->save();
        } catch (QueryException $exception) {

            $errorInfo = $exception->errorInfo;

            if ($errorInfo[0] === "23000") {
                $messageErr = "Такой адрес электронной почты или логин уже зарегистрирован";
            }

            return $this->sendError($messageErr);
        }

        return $this->sendResponse($client->toArray(), 'Данные сохранены');
    }

}
