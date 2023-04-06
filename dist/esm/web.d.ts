import { WebPlugin } from '@capacitor/core';
import type { VeriffPluginPlugin } from './definitions';
export declare class VeriffPluginWeb extends WebPlugin implements VeriffPluginPlugin {
    start(params: {
        sessionUrl: string;
        configuration: {
            themeColor: string;
        };
    }): Promise<{
        message: string;
        status: string;
    }>;
}
