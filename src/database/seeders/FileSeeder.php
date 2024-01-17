<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FileSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    File::create([
      'file_uid' => str()->uuid(),
      // 'file_path' => ,
      'message_uid' => str()->uuid(),
      'chat_room_uid' => str()->uuid(),
      'director_uid' => str()->uuid(),
      'creator_uid' => str()->uuid(),
    ]);
  }
}
