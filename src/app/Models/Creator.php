<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Creator extends Authenticatable
{
  use HasFactory;

  protected $fillable = [
    'name',
    'email',
    'password',
    'image',
    'introduction'
  ];
}
