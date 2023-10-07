import { Result } from './Result';

export type GuardResponse = string;

export interface IGuardArgument {
  argument: unknown;
  argumentName: string;
}

export type GuarArgumentCollection = IGuardArgument[];

export class Guard {
  public static againstNullOrUndefined(
    argument: unknown,
    argumentName: string
  ): Result<GuardResponse> {
    if (argument === null || argument === undefined) {
      return Result.fail(`${argumentName} is null or undefined}`);
    }

    return Result.ok<GuardResponse>();
  }

  public static againstNullOrUndefinedBulk(
    args: GuarArgumentCollection
  ): Result<GuardResponse> {
    for (const arg of args) {
      const result = this.againstNullOrUndefined(
        arg.argument,
        arg.argumentName
      );
      if (result.isFailure) return result;
    }

    return Result.ok<GuardResponse>();
  }

  public static againstAtLeast(
    numChars: number,
    text: string
  ): Result<GuardResponse> {
    if (text.length <= numChars)
      return Result.fail(`Text is not at least ${numChars} chars.`);
    return Result.ok();
  }

  public static againstAtMost(
    numChars: number,
    text: string
  ): Result<GuardResponse> {
    if (text.length >= numChars)
      return Result.fail(`Text is greater than ${numChars} chars.`);
    return Result.ok();
  }
}
