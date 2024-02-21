var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as ed from "@noble/ed25519";
import { decodeB64, encodeB64, Jwk, JwkGenOutput } from "./identity_wasm.js";
var JwkMemStore = /** @class */ (function () {
    /** Creates a new, empty `MemStore` instance. */
    function JwkMemStore() {
        this._keys = new Map();
    }
    JwkMemStore.ed25519KeyType = function () {
        return "Ed25519";
    };
    JwkMemStore.prototype.generate = function (keyType, algorithm) {
        return __awaiter(this, void 0, void 0, function () {
            var keyId, privKey, jwk, publicJWK;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (keyType !== JwkMemStore.ed25519KeyType()) {
                            throw new Error("unsupported key type ".concat(keyType));
                        }
                        if (algorithm !== "EdDSA" /* JwsAlgorithm.EdDSA */) {
                            throw new Error("unsupported algorithm");
                        }
                        keyId = randomKeyId();
                        privKey = ed.utils.randomPrivateKey();
                        return [4 /*yield*/, encodeJwk(privKey, algorithm)];
                    case 1:
                        jwk = _a.sent();
                        this._keys.set(keyId, jwk);
                        publicJWK = jwk.toPublic();
                        if (!publicJWK) {
                            throw new Error("JWK is not a public key");
                        }
                        return [2 /*return*/, new JwkGenOutput(keyId, publicJWK)];
                }
            });
        });
    };
    JwkMemStore.prototype.sign = function (keyId, data, publicKey) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var jwk, _b, privateKey, _;
            return __generator(this, function (_c) {
                if (publicKey.alg() !== "EdDSA" /* JwsAlgorithm.EdDSA */) {
                    throw new Error("unsupported JWS algorithm");
                }
                else {
                    if (((_a = publicKey.paramsOkp()) === null || _a === void 0 ? void 0 : _a.crv) !== "Ed25519" /* EdCurve.Ed25519 */) {
                        throw new Error("unsupported Okp parameter");
                    }
                }
                jwk = this._keys.get(keyId);
                if (jwk) {
                    _b = decodeJwk(jwk), privateKey = _b[0], _ = _b[1];
                    return [2 /*return*/, ed.sign(data, privateKey)];
                }
                else {
                    throw new Error("key with id ".concat(keyId, " not found"));
                }
                return [2 /*return*/];
            });
        });
    };
    JwkMemStore.prototype.insert = function (jwk) {
        return __awaiter(this, void 0, void 0, function () {
            var keyId;
            return __generator(this, function (_a) {
                keyId = randomKeyId();
                if (!jwk.isPrivate) {
                    throw new Error("expected a JWK with all private key components set");
                }
                if (!jwk.alg()) {
                    throw new Error("expected a Jwk with an `alg` parameter");
                }
                this._keys.set(keyId, jwk);
                return [2 /*return*/, keyId];
            });
        });
    };
    JwkMemStore.prototype["delete"] = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._keys["delete"](keyId);
                return [2 /*return*/];
            });
        });
    };
    JwkMemStore.prototype.exists = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._keys.has(keyId)];
            });
        });
    };
    JwkMemStore.prototype.count = function () {
        return this._keys.size;
    };
    return JwkMemStore;
}());
export { JwkMemStore };
// Encodes a Ed25519 keypair into a Jwk.
function encodeJwk(privateKey, alg) {
    return __awaiter(this, void 0, void 0, function () {
        var publicKey, x, d;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ed.getPublicKey(privateKey)];
                case 1:
                    publicKey = _a.sent();
                    x = encodeB64(publicKey);
                    d = encodeB64(privateKey);
                    return [2 /*return*/, new Jwk({
                            "kty": "OKP" /* JwkType.Okp */,
                            "crv": "Ed25519",
                            d: d,
                            x: x,
                            alg: alg
                        })];
            }
        });
    });
}
function decodeJwk(jwk) {
    if (jwk.alg() !== "EdDSA" /* JwsAlgorithm.EdDSA */) {
        throw new Error("unsupported `alg`");
    }
    var paramsOkp = jwk.paramsOkp();
    if (paramsOkp) {
        var d = paramsOkp.d;
        if (d) {
            var textEncoder = new TextEncoder();
            var privateKey = decodeB64(textEncoder.encode(d));
            var publicKey = decodeB64(textEncoder.encode(paramsOkp.x));
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
    var randomness = new Uint8Array(20);
    for (var index = 0; index < randomness.length; index++) {
        randomness[index] = getRandomNumber(0, 255);
    }
    return encodeB64(randomness);
}
//# sourceMappingURL=jwk_storage.js.map