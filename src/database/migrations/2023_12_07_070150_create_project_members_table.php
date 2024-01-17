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
    Schema::create('project_members', function (Blueprint $table) {
      $table->id();
      $table->uuid('project_uid')->comment('プロジェクトuid');
      $table->uuid('creator_uid')->comment('クリエイターuid');
      $table->uuid('director_uid')->comment('ディレクターuid');
      $table->string('role', 25)->comment('役職');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('project_members');
  }
};
