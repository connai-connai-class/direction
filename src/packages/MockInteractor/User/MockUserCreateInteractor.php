<?php

namespace packages\MockInteractor\User;


use packages\UseCase\User\Create\UserCreateUseCaseInterface;
use packages\UseCase\User\Create\UserCreateRequest;
use packages\UseCase\User\Create\UserCreateResponse;

class MockUserCreateInteractor implements UserCreateUseCaseInterface
{

    /**
     * @param UserCreateRequest $request
     * @return UserCreateResponse
     */
    public function handle(UserCreateRequest $request)
    {
        // throw new ComplexException();
        return new UserCreateResponse('test-id');
    }
}
