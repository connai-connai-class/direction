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
    Schema::create('projects', function (Blueprint $table) {
      $table->id();
      $table->uuid('project_uid')->comment('プロジェクトuid');
      $table->string('name', 25)->comment('プロジェクト名');
      $table->text('description')->comment('詳細');
      $table->integer('cost')->comment('費用');
      $table->string('client_email')->comment("クライアントメール");
      $table->string('client_name')->comment('クライアント名');
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
    Schema::dropIfExists('projects');
  }
};
