export interface VeriffPluginPlugin {
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
