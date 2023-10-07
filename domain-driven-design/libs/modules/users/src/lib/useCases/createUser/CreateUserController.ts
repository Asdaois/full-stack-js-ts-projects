import { http } from '@infra';
import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from 'express';
import { CreateUserDTO } from './CreateUserDTO';
import { CreateUserErrors } from './CreateUserErrors';
import { UseCaseError } from '@core';

export class CreateUserController extends http.models.BaseController {
  constructor(private useCase: CreateUserUseCase) {
    super();
  }

  protected override async implementation(
    request: Request<any, CreateUserDTO>,
    response: Response
  ): Promise<void | unknown> {
    const dto: CreateUserDTO = request.body;

    try {
      const result = await this.useCase.execute(dto);

      if (result.isFailed()) {
        const error = result.value;

        if (error instanceof CreateUserErrors.EmailAlreadyExistsError)
          return this.conflict(response, error.getErrorValue().message);
        else if (error instanceof CreateUserErrors.UsernameTakenError)
          return this.conflict(response, error.getErrorValue().message);
        else {
          return this.fail(
            response,
            (error.getErrorValue() as UseCaseError).message
          );
        }
      }

      return this.ok(response);
    } catch (error) {
      return this.fail(response, error as Error);
    }
  }
}
