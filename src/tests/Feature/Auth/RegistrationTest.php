<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Providers\RouteServiceProvider;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
  use RefreshDatabase;

  public function test_registration_screen_can_be_rendered(): void
  {

    $this->get(route('register'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
      );
  }

  public function test_new_users_can_register(): void
  {
    $response = $this->post(route('register'), [
      'name' => 'Test User',
      'email' => 'test@example.com',
      'password' => 'password',
      'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
  }

  public function test_new_users_can_not_register_no_request_body(): void
  {
    $this->get(route('register'));
    $this->followingRedirects()
      ->post(route('register'))
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('name', 'The name field is required.')
              ->where('email', 'The email field is required.')
              ->where('password', 'The password field is required.')
          )
      );
  }

  public function test_new_users_can_not_register_with_invalid_name(): void
  {
    $this->get(route('register'));
    $this->followingRedirects()
      ->post(route('register'), [
        'name' => 'namednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamednamed',
      ])
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('name', 'The name field must not be greater than 255 characters.')
              ->etc()
          )
      );
  }

  public function test_new_users_can_not_register_with_invalid_email(): void
  {
    $this->get(route('register'));
    $this->followingRedirects()
      ->post(route('register'), [
        'email' => 'testtest',
      ])
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'The email field must be a valid email address.')
              ->etc()
          )
      );
    $this->followingRedirects()
      ->post(route('register'), [
        'email' => 'testdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtestdtest@test.ocmasidfjlsakj',
      ])
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'The email field must not be greater than 255 characters.')
              ->etc()
          )
      );
    $this->followingRedirects()
      ->post(route('register'), [
        'email' => 'TestTest@Test.COM',
      ])
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('email', 'The email field must be lowercase.')
              ->etc()
          )
      );
  }

  public function test_new_users_can_not_register_with_invalid_password(): void
  {
    $this->get(route('register'));
    $this->followingRedirects()
      ->post(route('register'), [
        'password' => 'testtest',
        'password_confirmation' => ''

      ])
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('password', 'The password field confirmation does not match.')
              ->etc()
          )
      );
    $this->followingRedirects()
      ->post(route('register'), [
        'password' => 'test',
        'password_confirmation' => 'test'
      ])
      ->assertInertia(
        fn (Assert $page) => $page
          ->component('Auth/Register')
          ->has(
            'errors',
            fn (Assert $page) => $page
              ->where('password', 'The password field must be at least 8 characters.')
              ->etc()
          )
      );
  }
}
