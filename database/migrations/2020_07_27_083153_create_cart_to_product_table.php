<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCartToProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_to_product', function (Blueprint $table) {
            $table->bigIncrements('cart_to_product_id');
            $table->bigInteger('cart_id')->unsigned();
            $table->bigInteger('order_detail_id')->unsigned();
            $table->foreign('cart_id')->references('cart_id')->on('cart')->onDelete('cascade');
            $table->foreign('order_detail_id')->references('order_detail_id')->on('order_detail')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart_to_product');
    }
}
