<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    $this->call([
      DirectorSeeder::class,
      CreatorSeeder::class,
    ]);
    // \App\Models\User::factory(10)->create();

    \App\Models\User::factory()->create([
      'name' => 'Test User',
      'email' => 'test1@test.com',
      'password' => Hash::make('password')
    ]);
  }
}
