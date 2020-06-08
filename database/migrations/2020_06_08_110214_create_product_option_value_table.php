<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductOptionValueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_option_value', function (Blueprint $table) {
            $table->bigIncrements('product_option_value_id');
            $table->bigInteger('product_option_id')->unsigned();
            $table->bigInteger('product_id')->unsigned();
            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('cascade');
            $table->bigInteger('option_id')->unsigned();
            $table->bigInteger('option_value_id')->unsigned();
            $table->foreign('option_value_id')->references('option_value_id')->on('option_value');
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
        Schema::dropIfExists('product_option_value');
    }
}
