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
    Schema::create('directions', function (Blueprint $table) {
      $table->id();
      $table->string('direction_code', 3)->comment('指示コード');
      $table->string('diretion_name', 50)->comment('指示名');
      $table->text('template_name')->comment('テンプレート文章');
      $table->integer('order_no', 1)->comment('並び順');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('directions');
  }
};
