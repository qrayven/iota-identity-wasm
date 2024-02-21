"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdCurve = void 0;
/** Supported Elliptic Curves.
 *
 * [More Info](https://www.iana.org/assignments/jose/jose.xhtml#web-key-elliptic-curve) */
var EdCurve;
(function (EdCurve) {
    /** Ed25519 signature algorithm key pairs. */
    EdCurve["Ed25519"] = "Ed25519";
    /** Ed448 signature algorithm key pairs. */
    EdCurve["Ed448"] = "Ed448";
})(EdCurve = exports.EdCurve || (exports.EdCurve = {}));
//# sourceMappingURL=ed_curve.js.map