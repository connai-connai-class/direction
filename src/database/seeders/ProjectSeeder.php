<?php

namespace Database\Seeders;


use App\Models\Project;
use Illuminate\Database\Seeder;


class ProjectSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Project::create([
      'project_uid' => str()->uuid(),
      'name' => 'project1',
      'description' => 'description',
      'cost' => '1000',
      'client_email' => 'client1@client1.com',
      'client_name' => 'client1',
      'creator_uid' => str()->uuid(),
      'director_uid' => str()->uuid(),
    ]);
  }
}
