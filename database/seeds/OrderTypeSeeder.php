<?php

use App\OrderType;
use Illuminate\Database\Seeder;

class OrderTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order_type = new OrderType();
        $order_type->name = 'Квартальный';
        $order_type->save();

        $order_type_second = new OrderType();
        $order_type_second->name = 'Обычный';
        $order_type_second->save();
    }
}
