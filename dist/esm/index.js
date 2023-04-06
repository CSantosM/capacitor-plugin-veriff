import { registerPlugin } from '@capacitor/core';
const VeriffPlugin = registerPlugin('VeriffPlugin', {
    web: () => import('./web').then(m => new m.VeriffPluginWeb()),
});
export * from './definitions';
export { VeriffPlugin };
//# sourceMappingURL=index.js.map