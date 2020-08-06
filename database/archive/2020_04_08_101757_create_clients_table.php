<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->string('login', 255)->unique();
            $table->bigIncrements('id');
            $table->string('name', 255);
            $table->string('phone', 255);
            $table->string('email', 255)->unique();
            $table->text('addressK')->nullable();
            $table->text('addressP')->nullable();
            $table->text('company')->nullable();
            $table->string('inn', 255)->nullable();
            $table->string('kpp', 255)->nullable();
            $table->string('rs', 255)->nullable();
            $table->string('bik', 255)->nullable();
            $table->string('ks', 255)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('clients');
    }
}

