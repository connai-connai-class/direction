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
    Schema::create('files', function (Blueprint $table) {
      $table->id();
      $table->uuid('file_uid')->comment('ファイルuid');
      $table->string('file_path')->comment('ファイルパス');
      $table->uuid('massages_uid')->comment('メッセージuid');
      $table->uuid('chat_room_uid')->comment('チャットルームuid');
      $table->uuid('creator_uid')->comment('クリエイターuid');
      $table->uuid('director_uid')->comment('ディレクターuid');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('files');
  }
};
