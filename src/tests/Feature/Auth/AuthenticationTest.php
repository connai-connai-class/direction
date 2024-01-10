<?php

namespace Tests\Feature\Auth;

use App\Models\Director;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class AuthenticationTest extends TestCase
{
  use RefreshDatabase;

  public function test_login_screen_can_be_rendered(): void
  {
    $this->get(route('login.director'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
      );

    $this->get(route('login.creator'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
      );
  }

  public function test_users_can_authenticate_using_the_login_screen(): void
  {

    $this->get(route('login.director'));
    $this->followingRedirects()
      ->post(route('login'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
      );
  }

  public function test_directors_can_authenticate(): void
  {
    $director = Director::factory()->create();

    $params = [
      'email' => $director->email,
      'password' => 'password',
      'authority' => 'director',
    ];

    $response = $this->post(route('login'), $params);
    $this->assertAuthenticatedAs($director);
    $response->assertRedirect(RouteServiceProvider::HOME);
  }

  public function test_directors_can_not_authenticate_no_request(): void
  {
    $this->get(route('login.director'));
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
              ->etc()
          )
      );
  }

  public function test_directors_can_not_authenticate_with_invalid_email_and_pass(): void
  {
    $params = [
      'email' => 'test@tst.com',
      'password' => 'password',
      'authority' => 'director'
    ];
    $this->get(route('login.director'));
    $this->followingRedirects()
      ->post(route('login'), $params)
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'These credentials do not match our records.')
              ->etc()
          )
      );
  }

  public function test_directors_can_not_authenticate_with_invalid_password(): void
  {
    $user = Director::factory()->create();
    $params = [
      'email' => $user->email,
      'password' => 'passwordpassword',
      'authority' => 'director'
    ];
    $this->get(route('login.director'));
    $this->followingRedirects()
      ->post(route('login'), $params)
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Login')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'These credentials do not match our records.')
              ->etc()
          )
      );
  }

  public function test_users_can_logout(): void
  {
    $user = Director::factory()->create();

    $response = $this->actingAs($user, 'director')->post(route('logout'));

    $this->assertGuest();
    $response->assertRedirect(route('login.director'));
  }
}
