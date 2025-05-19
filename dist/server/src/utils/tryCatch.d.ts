export declare const tryCatch: <T, E>(callback: () => T, throwError: E) => Promise<import("./Either").Right<Awaited<T>> | import("./Either").Left<E>>;
