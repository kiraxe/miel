<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Message;
use Validator;

class MessageController extends BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Message::with('client');

        $messages = $query->paginate(5);

        return $this->sendResponse($messages->toArray(), 'Message retrieved successfully.');
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
            'message' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $message = Message::create([
            'client_id' => $input['type'],
            'message' => $input['message']
        ]);

        $message->toArray();

        return $this->sendResponse($message, 'Messages created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $message_id
     * @return \Illuminate\Http\Response
     */
    public function show($message_id)
    {
        $message = Message::find($message_id);
        if (is_null($message)) {
            return $this->sendError('Message not found.');
        }
        return $this->sendResponse($message->toArray(), 'Message retrieved successfully.');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $message_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message){}
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $order_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($message_id)
    {
        $message = Message::find($message_id);

        $message->delete();

        return $this->sendResponse($message->toArray(), 'Message deleted successfully.');
    }
}
