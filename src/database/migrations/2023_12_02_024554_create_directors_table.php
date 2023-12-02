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
    Schema::create('directors', function (Blueprint $table) {
      $table->id();
      $table->uuid("director_uid")->comment("ディレクターUID");
      $table->string("name", 25)->comment("名前");
      $table->text("introduction")->comment("自己紹介");
      $table->string("email")->comment("メール");
      $table->string("password")->comment("パスワード");
      $table->text("image")->nullable()->comment("プロフィール画像");
      $table->dateTime("deleted_at")->nullable()->comment("削除日時");
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('directors');
  }
};
