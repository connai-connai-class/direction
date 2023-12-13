<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DirectionSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Direction::create([
      "direction_code" => "aaa",
      "direction_name" => "aaa",
      "template_text" => "text-text",
      "order_no" => "1",
    ]);
  }
}
