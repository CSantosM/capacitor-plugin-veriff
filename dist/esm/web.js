import { WebPlugin } from '@capacitor/core';
export class VeriffPluginWeb extends WebPlugin {
    start(params) {
        console.log('Params: ', params);
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map