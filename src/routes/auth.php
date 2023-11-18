<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
  Route::get('register', function () {
    return Inertia::render('Auth/Register');
  })->name('register');

  Route::get('login/director', function () {
    return Inertia::render('Auth/Login', ['authority' => 'director']);
  })->name('login.director');

  Route::get('login/creator', function () {
    return Inertia::render('Auth/Login', ['authority' => 'creator']);
  })->name('login.creator');

  Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');

  Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');
});

Route::middleware('guest')->group(function () {

  Route::post('register', [RegisteredUserController::class, 'store']);

  Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('login');

  Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    ->name('password.email');

  Route::post('reset-password', [NewPasswordController::class, 'store'])
    ->name('password.store');
});

Route::middleware(['auth:director', 'auth'])->group(function () {
  Route::get('verify-email', EmailVerificationPromptController::class)
    ->name('verification.notice');

  Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');

  Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware('throttle:6,1')
    ->name('verification.send');

  Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
    ->name('password.confirm');

  Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

  Route::put('password', [PasswordController::class, 'update'])->name('password.update');

  Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');
});
