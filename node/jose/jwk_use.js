"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwkUse = void 0;
/** Supported algorithms for the JSON Web Key `use` property.
 *
 * [More Info](https://www.iana.org/assignments/jose/jose.xhtml#web-key-use) */
var JwkUse;
(function (JwkUse) {
    /** Digital Signature or MAC. */
    JwkUse["Signature"] = "sig";
    /** Encryption. */
    JwkUse["Encryption"] = "enc";
})(JwkUse = exports.JwkUse || (exports.JwkUse = {}));
//# sourceMappingURL=jwk_use.js.map