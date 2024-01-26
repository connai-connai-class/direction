<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class CreditCard extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'card_number'
  ];

  protected $hidden = [
    'id'
  ];

  protected static function booting()
  {
    static::creating(function ($credit_card) {
      if (blank($credit_card->credit_card_uid)) {
        $credit_card->credit_card_uid = (string) Str::uuid();
      };
      if (blank($credit_card->director_uid)) {
        $credit_card->director_uid = (string) Str::uuid();
      }
    });
  }
}
