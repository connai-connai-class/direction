<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    Message::create([
      'message_uid' => str()->uuid(),
      'message_text' => "text",
      'user_uid' => str()->uuid(),
      'chat_room_uid' => str()->uuid(),
      'direction_uid' => str()->uuid(),
    ]);
  }
}
