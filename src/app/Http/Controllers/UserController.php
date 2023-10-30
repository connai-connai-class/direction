<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Models\User\Commons\UserViewModel;
use App\Http\Models\User\Create\UserCreateViewModel;
use packages\UseCase\User\Create\UserCreateUseCaseInterface;
use packages\UseCase\User\Create\UserCreateRequest;

class UserController extends Controller
{

    public function create(UserCreateUseCaseInterface $interactor, Request $request)
    {
        $name = $request->input('name');
        $request = new UserCreateRequest($name);
        $response = $interactor->handle($request);

        $viewModel = new UserCreateViewModel($response->getCreatedUserId(), $name);
        return view('user.create', compact('viewModel'));
    }
}
