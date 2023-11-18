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
    Schema::create('creators', function (Blueprint $table) {
      $table->id();
      $table->uuid('creator_uid')->comment('クリエイターuid');
      $table->string('name', 25)->comment('名前');
      $table->string('email')->comment('メールアドレス');
      $table->string('password')->comment('パスワード');
      $table->string('profile_image')->nullable()->comment('プロフィール画像パス');
      $table->timestamp('email_verified_at')->nullable()->comment('メール認証日時');
      $table->rememberToken();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('creators');
  }
};
