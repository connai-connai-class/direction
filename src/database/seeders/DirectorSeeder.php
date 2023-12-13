<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Director;
use Illuminate\Support\Facades\Hash;

class DirectorSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Director::create([
      'director_uid' => str()->uuid(),
      'name' => 'test1',
      'email' => 'test1@test.com',
      'password' =>  Hash::make('password'),
    ]);
  }
}
