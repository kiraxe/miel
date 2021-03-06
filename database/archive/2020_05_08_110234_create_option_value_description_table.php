<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOptionValueDescriptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('option_value_description', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->bigInteger('option_id')->unsigned();
            $table->bigInteger('option_value_id')->unsigned();
            $table->foreign('option_value_id')->references('option_value_id')->on('option_value')->onDelete('cascade');
            $table->string('name', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('option_value_description');
    }
}
