"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcCurve = void 0;
/** Supported Elliptic Curves.
 *
 * [More Info](https://www.iana.org/assignments/jose/jose.xhtml#web-key-elliptic-curve) */
var EcCurve;
(function (EcCurve) {
    /** P-256 Curve. */
    EcCurve[EcCurve["P256"] = 0] = "P256";
    /** P-384 Curve. */
    EcCurve[EcCurve["P384"] = 1] = "P384";
    /** P-521 Curve. */
    EcCurve[EcCurve["P521"] = 2] = "P521";
    /** SECG secp256k1 curve. */
    EcCurve[EcCurve["Secp256K1"] = 3] = "Secp256K1";
})(EcCurve = exports.EcCurve || (exports.EcCurve = {}));
//# sourceMappingURL=ec_curve.js.map