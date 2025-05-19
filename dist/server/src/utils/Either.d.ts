export type Left<T> = {
    left: T;
    right?: never;
};
export type Right<U> = {
    left?: never;
    right: U;
};
export type ExtractRightEither<T> = T extends Right<any> ? T['right'] : never;
export type Either<T, U> = NonNullable<Left<T> | Right<U>>;
export type UnwrapEither = <T, U>(e: Either<T, U>) => NonNullable<T | U>;
export declare const unwrapEither: UnwrapEither;
export declare const isLeft: <T, U>(e: Either<T, U>) => e is Left<T>;
export declare const isRight: <T, U>(e: Either<T, U>) => e is Right<U>;
export declare const makeLeft: <T>(value: T) => Left<T>;
export declare const makeRight: <U>(value: U) => Right<U>;
