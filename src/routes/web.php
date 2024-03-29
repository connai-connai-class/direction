<?php

use App\Http\Controllers\DirectorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('Top', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
})->name('top');


Route::middleware(['auth:director,creator'])->group(function () {
  Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
  })->name('dashboard');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


  Route::prefix('/director')->group(function () {

    Route::get('/profile', function () {
      return Inertia::render('director/profile/Show');
    })->name('director.profile.show');
    // Route::patch('/profile', [DirectorProfileController::class, 'update'])->name('director.profile.update');
  });

  Route::prefix('/creator')->group(function () {
    Route::get('/profile', function () {
      return Inertia::render('creator/profile/Show');
    })->name('creator.profile.show');
  });
});


require __DIR__ . '/auth.php';
