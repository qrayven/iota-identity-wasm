"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwkMemStore = void 0;
const ed = __importStar(require("@noble/ed25519"));
const _identity_wasm_1 = require("./identity_wasm.js");
class JwkMemStore {
    /** Creates a new, empty `MemStore` instance. */
    constructor() {
        this._keys = new Map();
    }
    static ed25519KeyType() {
        return "Ed25519";
    }
    async generate(keyType, algorithm) {
        if (keyType !== JwkMemStore.ed25519KeyType()) {
            throw new Error(`unsupported key type ${keyType}`);
        }
        if (algorithm !== "EdDSA" /* JwsAlgorithm.EdDSA */) {
            throw new Error(`unsupported algorithm`);
        }
        const keyId = randomKeyId();
        const privKey = ed.utils.randomPrivateKey();
        const jwk = await encodeJwk(privKey, algorithm);
        this._keys.set(keyId, jwk);
        const publicJWK = jwk.toPublic();
        if (!publicJWK) {
            throw new Error(`JWK is not a public key`);
        }
        return new _identity_wasm_1.JwkGenOutput(keyId, publicJWK);
    }
    async sign(keyId, data, publicKey) {
        if (publicKey.alg() !== "EdDSA" /* JwsAlgorithm.EdDSA */) {
            throw new Error("unsupported JWS algorithm");
        }
        else {
            if (publicKey.paramsOkp()?.crv !== "Ed25519" /* EdCurve.Ed25519 */) {
                throw new Error("unsupported Okp parameter");
            }
        }
        const jwk = this._keys.get(keyId);
        if (jwk) {
            const [privateKey, _] = decodeJwk(jwk);
            return ed.sign(data, privateKey);
        }
        else {
            throw new Error(`key with id ${keyId} not found`);
        }
    }
    async insert(jwk) {
        const keyId = randomKeyId();
        if (!jwk.isPrivate) {
            throw new Error("expected a JWK with all private key components set");
        }
        if (!jwk.alg()) {
            throw new Error("expected a Jwk with an `alg` parameter");
        }
        this._keys.set(keyId, jwk);
        return keyId;
    }
    async delete(keyId) {
        this._keys.delete(keyId);
    }
    async exists(keyId) {
        return this._keys.has(keyId);
    }
    count() {
        return this._keys.size;
    }
}
exports.JwkMemStore = JwkMemStore;
// Encodes a Ed25519 keypair into a Jwk.
async function encodeJwk(privateKey, alg) {
    const publicKey = await ed.getPublicKey(privateKey);
    let x = (0, _identity_wasm_1.encodeB64)(publicKey);
    let d = (0, _identity_wasm_1.encodeB64)(privateKey);
    return new _identity_wasm_1.Jwk({
        "kty": "OKP" /* JwkType.Okp */,
        "crv": "Ed25519",
        d,
        x,
        alg,
    });
}
function decodeJwk(jwk) {
    if (jwk.alg() !== "EdDSA" /* JwsAlgorithm.EdDSA */) {
        throw new Error("unsupported `alg`");
    }
    const paramsOkp = jwk.paramsOkp();
    if (paramsOkp) {
        const d = paramsOkp.d;
        if (d) {
            let textEncoder = new TextEncoder();
            const privateKey = (0, _identity_wasm_1.decodeB64)(textEncoder.encode(d));
            const publicKey = (0, _identity_wasm_1.decodeB64)(textEncoder.encode(paramsOkp.x));
            return [privateKey, publicKey];
        }
        else {
            throw new Error("missing private key component");
        }
    }
    else {
        throw new Error("expected Okp params");
    }
}
// Returns a random number between `min` and `max` (inclusive).
// SAFETY NOTE: This is not cryptographically secure randomness and thus not suitable for production use.
// It suffices for our testing implementation however and avoids an external dependency.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Returns a random key id.
function randomKeyId() {
    const randomness = new Uint8Array(20);
    for (let index = 0; index < randomness.length; index++) {
        randomness[index] = getRandomNumber(0, 255);
    }
    return (0, _identity_wasm_1.encodeB64)(randomness);
}
//# sourceMappingURL=jwk_storage.js.map