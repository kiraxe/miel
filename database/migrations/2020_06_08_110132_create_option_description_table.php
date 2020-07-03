<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOptionDescriptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('option_description', function (Blueprint $table) {
            $table->bigIncrements('id')->unsigned();
            $table->bigInteger('option_id')->unsigned();
            $table->foreign('option_id')->references('option_id')->on('option')->onDelete('cascade');
            $table->string('name', 128);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('option_description');
    }
}
