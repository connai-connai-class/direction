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
    Schema::create('tasks', function (Blueprint $table) {
      $table->id();
      $table->uuid('task_uid')->comment('タスクuid');
      $table->string('name', 25)->comment('タスク名');
      $table->timestamp('start_date')->comment('スタート日時');
      $table->timestamp('finish_date')->comment('終了日時');
      $table->string('related_task', 25)->nullable()->comment('関連タスク名');
      $table->uuid('project_uid')->comment('プロジェクトuid');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('tasks');
  }
};
