<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->text('title_main_page')->nullable();
            $table->text('banner_main_page')->nullable();
            $table->text('title_other_page')->nullable();
            $table->text('banner_other_page')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $table->text('title_main_page')->nullable();
            $table->text('banner_main_page')->nullable();
            $table->text('title_other_page')->nullable();
            $table->text('banner_other_page')->nullable();
        });
    }
}
