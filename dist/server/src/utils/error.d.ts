type ErrorPayload = {
    [key: string]: any;
} | undefined;
interface IPluginError extends Error {
    status: number;
    payload: ErrorPayload;
}
export default class PluginError extends Error implements IPluginError {
    status: number;
    payload: ErrorPayload;
    constructor(status: number, message: string, payload?: ErrorPayload);
    toString(e?: PluginError): string;
    toJSON(): this | {
        name: string;
        message: string;
    };
}
export {};
