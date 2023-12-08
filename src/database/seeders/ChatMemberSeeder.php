<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatMemberSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    ChatMember::create([
      'chat_member_uid' => str()->uuid(),
      'creator_room_uid' => str()->uuid(),
      'director_room_uid' => str()->uuid(),
    ]);
  }
}
