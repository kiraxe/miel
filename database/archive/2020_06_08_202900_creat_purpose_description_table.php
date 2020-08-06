<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatPurposeDescriptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purpose_description', function (Blueprint $table) {
            $table->bigInteger('purpose_id')->unsigned();
            $table->foreign('purpose_id')->references('purpose_id')->on('purpose')->onDelete('cascade');
            $table->string('name', 255);
            $table->mediumText('description')->nullable();
            $table->string('meta_description', 255)->nullable();
            $table->string('meta_keywords', 255)->nullable();
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
