<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatPurposeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purpose', function (Blueprint $table) {
            $table->bigIncrements('purpose_id');
            $table->bigInteger('parent_id')->unsigned()->nullable();
            $table->string('image', 255)->nullable();
            $table->integer('sort_order')->unsigned()->nullable();
            $table->smallInteger('status')->unsigned()->nullable();
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
        Schema::dropIfExists('purpose');
    }
}
