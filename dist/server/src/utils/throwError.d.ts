import { RequestContext } from '../@types';
import PluginError from './PluginError';
export declare const throwError: (ctx: RequestContext, e: PluginError | Error | unknown) => PluginError | Error | unknown | never;
