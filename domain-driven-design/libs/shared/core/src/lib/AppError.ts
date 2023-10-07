import { Result } from './Result';
import { UseCaseError } from './UseCaseError';

export class UnexpectedError extends Result<UseCaseError> {
  constructor(error: Error) {
    super(false, {
      message: 'An unexpected error ocurred.',
    });

    console.log(`[AppError]: An unexpected error ocurred`);
    console.error(error);
  }
}
