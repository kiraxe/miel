<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSliderImgTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slider_img', function (Blueprint $table) {
            $table->bigIncrements('slider_img_id');
            $table->bigInteger('slider_id')->unsigned();
            $table->foreign('slider_id')->references('slider_id')->on('sliders')->onDelete('cascade');
            $table->text('image')->nullable();
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
        Schema::dropIfExists('slider_img');
    }
}
