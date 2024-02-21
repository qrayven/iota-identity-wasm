"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyIdMemStore = void 0;
class KeyIdMemStore {
    constructor() {
        this._keyIds = new Map();
    }
    async insertKeyId(methodDigest, keyId) {
        let methodDigestAsString = methodDigestToString(methodDigest);
        let value = this._keyIds.get(methodDigestAsString);
        if (value !== undefined) {
            throw new Error("KeyId already exists");
        }
        this._keyIds.set(methodDigestAsString, keyId);
    }
    async getKeyId(methodDigest) {
        let methodDigestAsString = methodDigestToString(methodDigest);
        let value = this._keyIds.get(methodDigestAsString);
        if (value == undefined) {
            throw new Error("KeyId not found");
        }
        return value;
    }
    async deleteKeyId(methodDigest) {
        let methodDigestAsString = methodDigestToString(methodDigest);
        let success = this._keyIds.delete(methodDigestAsString);
        if (success) {
            return;
        }
        else {
            throw new Error("KeyId not found!");
        }
    }
    count() {
        return this._keyIds.size;
    }
}
exports.KeyIdMemStore = KeyIdMemStore;
/**
 * Converts a `MethodDigest` to a base64 encoded string.
 */
function methodDigestToString(methodDigest) {
    let arrayBuffer = methodDigest.pack().buffer;
    let buffer = Buffer.from(arrayBuffer);
    return buffer.toString("base64");
}
//# sourceMappingURL=key_id_storage.js.map