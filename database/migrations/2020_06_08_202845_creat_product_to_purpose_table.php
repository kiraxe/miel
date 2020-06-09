<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatProductToPurposeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_to_purpose', function (Blueprint $table) {
            $table->bigIncrements('product_id');
            $table->bigInteger('purpose_id')->unsigned();
            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('cascade');
            $table->foreign('purpose_id')->references('purpose_id')->on('purpose')->onDelete('cascade');
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
        Schema::dropIfExists('purpose_description');
    }
}
