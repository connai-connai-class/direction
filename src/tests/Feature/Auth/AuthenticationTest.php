<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class AuthenticationTest extends TestCase
{
  use RefreshDatabase;

  public function test_login_screen_can_be_rendered(): void
  {
    $this->get(route('login'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
      );
  }

  public function test_users_can_authenticate_using_the_login_screen(): void
  {

    $this->get(route('login'));
    $this->followingRedirects()
      ->post(route('login'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
      );
  }

  public function test_users_can_authenticate(): void
  {
    $user = User::factory()->create();
    $params = [
      'email' => $user->email,
      'password' => 'password',
    ];
    $this->get(route('login'));
    $this->followingRedirects()
      ->post(route('login'), $params)
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Dashboard')
      );
    $this->assertAuthenticatedAs($user);
  }

  public function test_users_can_not_authenticate_no_request(): void
  {
    $this->get(route('login'),);
    $this->followingRedirects()
      ->post(route('login'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'The email field is required.')
              ->where('password', 'The password field is required.')
          )
      );
  }

  public function test_users_can_not_authenticate_with_invalid_email_and_pass(): void
  {
    $params = [
      'email' => 'test@tst.com',
      'password' => 'password',
    ];
    $this->get(route('login'));
    $this->followingRedirects()
      ->post(route('login'), $params)
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'These credentials do not match our records.')
          )
      );
  }

  public function test_users_can_not_authenticate_with_invalid_password(): void
  {
    $user = User::factory()->create();
    $params = [
      'email' => $user->email,
      'password' => 're-password',
    ];
    $this->get(route('login'));
    $this->followingRedirects()
      ->post(route('login'), $params)
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'These credentials do not match our records.')
          )
      );
  }

  public function test_users_can_logout(): void
  {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('logout'));

    $this->assertGuest();
    $response->assertRedirect(route('login'));
  }
}
