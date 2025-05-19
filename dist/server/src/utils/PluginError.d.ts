export type ErrorPayload = Record<string, any> | undefined;
export default class PluginError extends Error {
    status: number;
    payload: ErrorPayload;
    constructor(status: number, message: string, payload?: ErrorPayload);
    toString(e?: PluginError): string;
    toJSON(): this | {
        name: string;
        message: string;
    };
}
