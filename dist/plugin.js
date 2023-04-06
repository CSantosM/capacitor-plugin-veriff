var capacitorVeriffPlugin = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
