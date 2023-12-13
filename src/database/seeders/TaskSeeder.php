<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Task::create([
      'task_uid' => str()->uuid(),
      'name' => "task1",
      'related_task' => "related_task1",
      'project_uid' => str()->uuid(),
    ]);
  }
}
