<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskMemberSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    TaskMember::create([
      'task_uid' => str()->uuid(),
      'creator_uid' => str()->uuid(),
      'director_uid' => str()->uuid(),
    ]);
  }
}
