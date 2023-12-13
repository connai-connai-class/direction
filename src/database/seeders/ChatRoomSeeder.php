<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatRoomSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    ChatRoom::create([
      'chat_room_uid' => str()->uuid(),
      'project_uid' => str()->uuid(),
    ]);
  }
}
