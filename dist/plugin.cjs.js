'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const VeriffPlugin = core.registerPlugin('VeriffPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.VeriffPluginWeb()),
});

class VeriffPluginWeb extends core.WebPlugin {
    start(params) {
        console.log('Params: ', params);
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VeriffPluginWeb: VeriffPluginWeb
});

exports.VeriffPlugin = VeriffPlugin;
//# sourceMappingURL=plugin.cjs.js.map
