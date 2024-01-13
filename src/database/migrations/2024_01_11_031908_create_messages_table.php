<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('messages', function (Blueprint $table) {
      $table->id();
      $table->uuid('massages_uid')->comment('メッセージuid');
      $table->text('message_text')->comment('内容');
      $table->uuid('user_uid')->comment('送信者uid');
      $table->uuid('chat_room_uid')->comment('チャットルームuid');
      $table->uuid('direction_uid')->comment('ディレクションuid');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('messages');
  }
};
