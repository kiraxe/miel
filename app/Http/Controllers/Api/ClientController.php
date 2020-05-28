<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Client;
use App\Permission;
use App\Role;
use Validator;

class ClientController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientele = Client::all();
        return $this->sendResponse($clientele->toArray(), 'Clientele retrieved successfully.');
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
            'phone' => 'required',
            'email' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input['password'] = \Hash::make($input['password']);

        $client = Client::create($input);
        return $this->sendResponse($client->toArray(), 'Client created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = Client::find($id);
        if (is_null($client)) {
            return $this->sendError('Client not found.');
        }
        return $this->sendResponse($client->toArray(), 'Client retrieved successfully.');
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

        $client->save();

        return $this->sendResponse($client->toArray(), 'Client updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = Client::find($id);
        $client->delete();
        return $this->sendResponse($client->toArray(), 'Client deleted successfully.');
    }
}
