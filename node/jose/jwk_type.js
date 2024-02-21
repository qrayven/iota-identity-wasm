"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwkType = void 0;
/** Supported types for the JSON Web Key `kty` property.
 *
 * [More Info](https://www.iana.org/assignments/jose/jose.xhtml#web-key-types) */
var JwkType;
(function (JwkType) {
    /** Elliptic Curve. */
    JwkType["Ec"] = "EC";
    /** RSA. */
    JwkType["Rsa"] = "RSA";
    /** Octet sequence. */
    JwkType["Oct"] = "oct";
    /** Octet string key pairs. */
    JwkType["Okp"] = "OKP";
})(JwkType = exports.JwkType || (exports.JwkType = {}));
//# sourceMappingURL=jwk_type.js.map