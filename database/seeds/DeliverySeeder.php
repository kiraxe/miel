<?php

use App\Delivery;
use Illuminate\Database\Seeder;

class DeliverySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $delivery = new Delivery();
        $delivery->address = "Коломенский проезд, д.14";
        $delivery->save();
    }
}
