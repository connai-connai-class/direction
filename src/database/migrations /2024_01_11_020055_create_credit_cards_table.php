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
    Schema::create('credit_cards', function (Blueprint $table) {
      $table->id();
      $table->uuid('director_uid')->comment('ディレクターuid');
      $table->string('name')->comment('名前');
      $table->integer('card_number')->comment('カード番号');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('credit_cards');
  }
};
