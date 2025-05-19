import { client } from '../../validators/api';
type FlatInputParams = client.FindAllFlatSchema | client.FindAllInHierarchyValidatorSchema | client.FindAllPerAuthorValidatorSchema;
export declare const flatInput: <T extends FlatInputParams>(payload: T) => T;
export {};
