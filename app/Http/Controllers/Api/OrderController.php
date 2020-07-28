<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Orders;
use Validator;

class OrderController extends BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Orders::with(['cart','client','comment', 'orderType']);

        $orders = $query->paginate(5);

        return $this->sendResponse($orders->toArray(), 'Orders retrieved successfully.');
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
            'total' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $orders = Orders::create($input);

        $orders->toArray();

        return $this->sendResponse($orders, 'Orders created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $product_id
     * @return \Illuminate\Http\Response
     */
    public function show($order_id)
    {
        $order = Orders::find($order_id);
        if (is_null($order)) {
            return $this->sendError('Order not found.');
        }
        return $this->sendResponse($order->toArray(), 'Order retrieved successfully.');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $order_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Orders $order)
    {

        $input = $request->all();

        $validator = Validator::make($input, [
            'total' => 'required',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if(isset($input['status'])) {
            $input['status'] === 'true' || $input['status'] === '1' ? $input['status'] = TRUE : $input['status'] = FALSE;
            $order->status = $input['status'];
        }

        $order->total = $input['order'];


        $order->save();

        $order->toArray();

        return $this->sendResponse($order, 'Order updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $order_id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Orders $order)
    {
        $order->delete();

        return $this->sendResponse($order->toArray(), 'Order deleted successfully.');
    }
}
