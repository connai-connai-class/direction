<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjecMemberSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    ProjectMember::create([
      'project_uid' => str()->uuid(),
      'creator_uid' => str()->uuid(),
      'director_uid' => str()->uuid(),
      'role' => 'role1',
    ]);
  }
}
