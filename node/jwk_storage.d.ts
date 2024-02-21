import { Jwk, JwkGenOutput, JwkStorage } from "./identity_wasm.js";
import { JwsAlgorithm } from "./jose";
export declare class JwkMemStore implements JwkStorage {
    /** The map from key identifiers to Jwks. */
    private _keys;
    /** Creates a new, empty `MemStore` instance. */
    constructor();
    static ed25519KeyType(): string;
    generate(keyType: string, algorithm: JwsAlgorithm): Promise<JwkGenOutput>;
    sign(keyId: string, data: Uint8Array, publicKey: Jwk): Promise<Uint8Array>;
    insert(jwk: Jwk): Promise<string>;
    delete(keyId: string): Promise<void>;
    exists(keyId: string): Promise<boolean>;
    count(): number;
}
