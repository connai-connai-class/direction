<?php

namespace packages\UseCase\User\Create;

use packages\UseCase\User\Create\UserCreateRequest;


interface UserCreateUseCaseInterface
{
    /**
     * @param UserCreateRequest $request
     * @return UserCreateResponse
     */
    public function handle(UserCreateRequest $request);
}
