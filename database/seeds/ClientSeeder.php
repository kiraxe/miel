<?php

use App\Role;
use App\Client;
use App\Permission;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clientP = Permission::where('slug','manager-client')->first();
        $clientR = Role::where('slug', 'client-reg')->first();
        $client = new Client();
        $client->name = 'Альбертян П.П';
        $client->email = 'web.webow@yandex.ru';
        $client->phone = '3935560';
        $client->password = bcrypt('secret');
        $client->save();
        $client->roles()->attach($clientR);
        $client->permissions()->attach($clientP);
    }
}
