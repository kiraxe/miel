<?php

use App\Role;
use App\User;
use App\Permission;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $developer = Role::where('slug','web-developer')->first();
        $manager = Role::where('slug', 'project-manager')->first();
        $createTasks = Permission::where('slug','manager-clients')->first();
        $manageUsers = Permission::where('slug','manager-users')->first();

        $user1 = new User();
        $user1->name = 'kiraxe';
        $user1->email = 'kiraxe@yandex.ru';
        $user1->password = bcrypt('Albervelo1985');
        $user1->save();
        $user1->roles()->attach($developer);
        $user1->permissions()->attach($createTasks);

        $user2 = new User();
        $user2->name = 'albervelo';
        $user2->email = 'albervelo@yandex.ru';
        $user2->password = bcrypt('inter1985');
        $user2->save();
        $user2->roles()->attach($manager);
        $user2->permissions()->attach($manageUsers);
    }
}
