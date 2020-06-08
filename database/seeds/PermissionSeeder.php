<?php

use App\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $manageUser = new Permission();
        $manageUser->name = 'User';
        $manageUser->slug = 'manager-users';
        $manageUser->save();
        $createTasks = new Permission();
        $createTasks->name = 'Client';
        $createTasks->slug = 'manager-clients';
        $createTasks->save();
    }
}
