<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
  /**
   * Get the path the user should be redirected to when they are not authenticated.
   */
  protected function redirectTo(Request $request): ?string
  {

    $authority = $request->authority;
    if (empty($authority)) {
      $authority = auth()->check() ? auth()->guard() : 'director';
    }
    return $request->expectsJson() ? null : route("login.$authority");
  }
}
