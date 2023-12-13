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
    Schema::create('task_members', function (Blueprint $table) {
      $table->id();
      $table->uuid('task_uid')->comment('タスクuid');
      $table->uuid('creator_uid')->comment('クリエイターuid');
      $table->uuid('director_uid')->comment('ディレクターuid');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('task_members');
  }
};
