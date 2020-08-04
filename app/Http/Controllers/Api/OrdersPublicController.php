<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Orders;
use App\Cart;
use App\Comment;
use App\CartToProduct;
use App\OrderDetail;
use Validator;

class OrdersPublicController extends BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){}
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $input = $request->all();

        $client_input = json_decode($input['client']);

        $cart_input = json_decode($input['cart']);

        $delivery_id = $input['delivery'] !== 'null' ? (int)$input['delivery'] : NULL;

        $comment_input = $input['comment'] !== 'null' ? $input['comment'] : NULL;

        $orderType_input = $input['quarterly'] !== 'null' ? $input['quarterly'] : NULL;

        $cart = Cart::create([
            'client_id' => $client_input->id,
            'delivery_id' => $delivery_id,
            'order_id' => 1
        ]);

        $order = Orders::create([
            'cart_id' => $cart->cart_id,
            'client_id' => $client_input->id,
            'total' => $input['total'],
            'type_id' => $orderType_input
        ]);

        $cart->order_id = $order->order_id;

        $cart->save();

        if (!is_null($comment_input)) {
            $comment = Comment::create([
                'cart_id' => $cart->cart_id,
                'client_id' => $client_input->id,
                'order_id' => $order->order_id,
                'comment' => $comment_input
            ]);
            $order->comment_id = $comment->id;
        }

        $orderDetail = NULL;
        $cartToProduct = NULL;

        foreach ($cart_input as $key => $value) {
            $options = $value->options !== 'null' ? $value->options : NULL;
            $orderDetail = OrderDetail::create([
                'order_id' => $order->order_id,
                'product_id' => $value->product_id,
                'article' => $value->article,
                'image' => $value->image,
                'product_name' => $value->name,
                'unit_price' => $value->price,
                'count' => $value->count,
                'total_price' => $value->total,
                'options' => $options ? json_encode($options) : $options
            ]);

            $cartToProduct = CartToProduct::create([
                'cart_id' => $cart->cart_id,
                'order_detail_id' => $orderDetail->id
            ]);

            $order->save();

        }

        return $this->sendResponse(['id' => $order->order_id], 'Messages created successfully.');
    }
}
