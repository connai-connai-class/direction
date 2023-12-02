<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Creator;
use Illuminate\Support\Facades\Hash;

class CreatorSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Creator::create([
      "creator_uid" => str()->uuid(),
      "name" => "test",
      "email" => "test@test.com",
      "password" => Hash::make("test"),
    ]);
  }
}
