<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('product_id');
            $table->string('name');
            $table->string('article');
            $table->text('detail')->nullable();
            $table->text('property')->nullable();
            $table->decimal('price_quarterly', 10, 2)->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->decimal('price_second', 10, 2)->nullable();
            $table->decimal('price_third', 10, 2)->nullable();
            $table->bigInteger('min_quarterly')->nullable();
            $table->bigInteger('min')->nullable();
            $table->bigInteger('min_second')->nullable();
            $table->bigInteger('min_third')->nullable();
            $table->text('image')->nullable();
            $table->boolean('novelty')->default(false);
            $table->boolean('popular')->default(false);
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
        Schema::dropIfExists('products');
    }
}
