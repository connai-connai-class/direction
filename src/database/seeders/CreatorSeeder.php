<?php

namespace Database\Seeders;

use App\Models\Creator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CreatorSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Creator::create([
      'creator_uid' => str()->uuid(),
      'name' => 'test1',
      'email' => 'test1@test.com',
      'password' =>  Hash::make('password'),
    ]);
  }
}
