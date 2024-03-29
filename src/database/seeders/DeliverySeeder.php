<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DeliverySeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Delivery::create([
      'delivery_uid' => str()->uuid(),
      'project_uid' => str()->uuid(),
    ]);
  }
}
