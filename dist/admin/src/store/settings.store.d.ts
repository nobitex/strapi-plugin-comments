import { Config } from '../api/schemas';
type SettingsStore = {
    settings: Config;
    setSettings: (settings: any) => void;
};
export declare const useSettingsStore: import("zustand/react").UseBoundStore<import("zustand/vanilla").StoreApi<SettingsStore>>;
export {};
