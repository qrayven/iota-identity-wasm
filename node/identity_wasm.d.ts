/* tslint:disable */
/* eslint-disable */
/**
* Encode the given bytes in url-safe base64.
* @param {Uint8Array} data
* @returns {string}
*/
export function encodeB64(data: Uint8Array): string;
/**
* Decode the given url-safe base64-encoded slice into its raw bytes.
* @param {Uint8Array} data
* @returns {Uint8Array}
*/
export function decodeB64(data: Uint8Array): Uint8Array;
/**
* Initializes the console error panic hook for better error messages
*/
export function start(): void;
/**
* Verify a JWS signature secured with the `EdDSA` algorithm and curve `Ed25519`.
*
* This function is useful when one is composing a `IJwsVerifier` that delegates
* `EdDSA` verification with curve `Ed25519` to this function.
*
* # Warning
*
* This function does not check whether `alg = EdDSA` in the protected header. Callers are expected to assert this
* prior to calling the function.
* @param {JwsAlgorithm} alg
* @param {Uint8Array} signingInput
* @param {Uint8Array} decodedSignature
* @param {Jwk} publicKey
*/
export function verifyEd25519(alg: JwsAlgorithm, signingInput: Uint8Array, decodedSignature: Uint8Array, publicKey: Jwk): void;
/**
*/
export enum MethodRelationship {
  Authentication = 0,
  AssertionMethod = 1,
  KeyAgreement = 2,
  CapabilityDelegation = 3,
  CapabilityInvocation = 4,
}
/**
* Declares when validation should return if an error occurs.
*/
export enum FailFast {
/**
* Return all errors that occur during validation.
*/
  AllErrors = 0,
/**
* Return after the first error occurs.
*/
  FirstError = 1,
}
/**
*/
export enum CredentialStatus {
  Revoked = 0,
  Suspended = 1,
  Valid = 2,
}
/**
* Purpose of a {@link StatusList2021}.
*/
export enum StatusPurpose {
  Revocation = 0,
  Suspension = 1,
}
/**
* Controls validation behaviour when checking whether or not a credential has been revoked by its
* [`credentialStatus`](https://www.w3.org/TR/vc-data-model/#status).
*/
export enum StatusCheck {
/**
* Validate the status if supported, reject any unsupported
* [`credentialStatus`](https://www.w3.org/TR/vc-data-model/#status) types.
*
* Only `RevocationBitmap2022` is currently supported.
*
* This is the default.
*/
  Strict = 0,
/**
* Validate the status if supported, skip any unsupported
* [`credentialStatus`](https://www.w3.org/TR/vc-data-model/#status) types.
*/
  SkipUnsupported = 1,
/**
* Skip all status checks.
*/
  SkipAll = 2,
}
/**
* Declares how credential subjects must relate to the presentation holder.
*
* See also the [Subject-Holder Relationship](https://www.w3.org/TR/vc-data-model/#subject-holder-relationships) section of the specification.
*/
export enum SubjectHolderRelationship {
/**
* The holder must always match the subject on all credentials, regardless of their [`nonTransferable`](https://www.w3.org/TR/vc-data-model/#nontransferable-property) property.
* This variant is the default.
*/
  AlwaysSubject = 0,
/**
* The holder must match the subject only for credentials where the [`nonTransferable`](https://www.w3.org/TR/vc-data-model/#nontransferable-property) property is `true`.
*/
  SubjectOnNonTransferable = 1,
/**
* The holder is not required to have any kind of relationship to any credential subject.
*/
  Any = 2,
}
/**
*/
export enum StateMetadataEncoding {
  Json = 0,
}

type IJwkParams = IJwkEc | IJwkRsa | IJwkOkp | IJwkOct
/** A JSON Web Key with EC params. */
export interface IJwkEc extends IJwk, JwkParamsEc {
  kty: JwkType.Ec
}
/** A JSON Web Key with RSA params. */
export interface IJwkRsa extends IJwk, JwkParamsRsa {
  kty: JwkType.Rsa
}
/** A JSON Web Key with OKP params. */
export interface IJwkOkp extends IJwk, JwkParamsOkp {
  kty: JwkType.Okp
}
/** A JSON Web Key with OCT params. */
export interface IJwkOct extends IJwk, JwkParamsOct {
  kty: JwkType.Oct
}



/** A JSON Web Key. */
export interface IJwk {
  /** Key Type.

  Identifies the cryptographic algorithm family used with the key.
  
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.1) */
  kty: JwkType
  /** Public Key Use.
  
  Identifies the intended use of the public key.
  
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.2) */
  use?: JwkUse
  /** Key Operations.
 
  Identifies the operation(s) for which the key is intended to be used.
 
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.3) */
  key_ops?: JwkOperation[]
  /** Algorithm.
 
  Identifies the algorithm intended for use with the key.
 
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.4) */
  alg?: JwsAlgorithm
  /** Key ID.
 
  Used to match a specific key among a set of keys within a JWK Set.
 
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.5) */
  kid?: string
  /** X.509 URL.
 
  A URI that refers to a resource for an X.509 public key certificate or
  certificate chain.
  
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.6) */
  x5u?: string
  /** X.509 Certificate Chain.
 
  Contains a chain of one or more PKIX certificates.
 
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.7) */
  x5c?: string[]
  /** X.509 Certificate SHA-1 Thumbprint.

  A base64url-encoded SHA-1 thumbprint of the DER encoding of an X.509
  certificate.

  [More Info](https://tools.ietf.org/html/rfc7517#section-4.8) */
  x5t?: string
  /** X.509 Certificate SHA-256 Thumbprint.
 
  A base64url-encoded SHA-256 thumbprint of the DER encoding of an X.509
  certificate.
 
  [More Info](https://tools.ietf.org/html/rfc7517#section-4.9) */
  'x5t#S256'?: string
}



/** Parameters for Elliptic Curve Keys.
 * 
 * [More Info](https://tools.ietf.org/html/rfc7518#section-6.2) */
interface JwkParamsEc {
  /** Identifies the cryptographic curve used with the key.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.2.1.1) */
  crv: string
  /** The `x` coordinate for the Elliptic Curve point as a base64url-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.2.1.2) */
  x: string
  /** The `y` coordinate for the Elliptic Curve point as a base64url-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.2.1.3) */
  y: string
  /** The Elliptic Curve private key as a base64url-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.2.2.1) */
  d?: string
}


/** Parameters for Octet Key Pairs.
 * 
 * [More Info](https://tools.ietf.org/html/rfc8037#section-2) */
interface JwkParamsOkp {
  /** The subtype of the key pair.
   * 
   * [More Info](https://tools.ietf.org/html/rfc8037#section-2) */
  crv: string
  /** The public key as a base64url-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc8037#section-2) */
  x: string
  /** The private key as a base64url-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc8037#section-2) */
  d?: string
}


/** Parameters for RSA Keys.
 * 
 * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3) */
interface JwkParamsRsa {
  /** The modulus value for the RSA public key as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.1.1) */
  n: string,
  /** The exponent value for the RSA public key as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.1.2) */
  e: string,
  /** The private exponent value for the RSA private key as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.1) */
  d?: string,
  /** The first prime factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.2) */
  p?: string,
  /** The second prime factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.3) */
  q?: string,
  /** The Chinese Remainder Theorem (CRT) exponent of the first factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.4)  */
  dp?: string,
  /** The CRT exponent of the second factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.5) */
  dq?: string,
  /** The CRT coefficient of the second factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.6) */
  qi?: string,
  /** An array of information about any third and subsequent primes, should they exist.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.7) */
  oth?: JwkParamsRsaPrime[],
}

/** Parameters for RSA Primes
 * 
 * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.7) */
interface JwkParamsRsaPrime {
  /** The value of a subsequent prime factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.7.1)  */
  r: string,
  /** The CRT exponent of the corresponding prime factor as a base64urlUInt-encoded value. 
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.7.2) */
  d: string,
  /** The CRT coefficient of the corresponding prime factor as a base64urlUInt-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.3.2.7.3) */
  t: string,
}


/** Parameters for Symmetric Keys.
 * 
 * [More Info](https://tools.ietf.org/html/rfc7518#section-6.4) */
interface JwkParamsOct {
  /** The symmetric key as a base64url-encoded value.
   * 
   * [More Info](https://tools.ietf.org/html/rfc7518#section-6.4.1) */
  k: string
}


/** Secure storage for cryptographic keys represented as JWKs. */
interface JwkStorage {
  /** Generate a new key represented as a JSON Web Key.
   * 
   * It's recommend that the implementer exposes constants for the supported key type string. */
  generate: (keyType: string, algorithm: JwsAlgorithm) => Promise<JwkGenOutput>;
  /** Insert an existing JSON Web Key into the storage.
   * 
   * All private key components of the `jwk` must be set. */
  insert: (jwk: Jwk) => Promise<string>;
  /** Sign the provided `data` using the private key identified by `keyId` according to the requirements of the given `public_key` corresponding to `keyId`. */
  sign: (keyId: string, data: Uint8Array, publicKey: Jwk) => Promise<Uint8Array>;
  /** Deletes the key identified by `keyId`.
   * 
   * # Warning
   * 
   * This operation cannot be undone. The keys are purged permanently. */
  delete: (keyId: string) => Promise<void>;
  /** Returns `true` if the key with the given `keyId` exists in storage, `false` otherwise. */
  exists: (keyId: string) => Promise<boolean>;
}


/**
 * Key value Storage for key ids under {@link MethodDigest}.
 */
interface KeyIdStorage {
  /**
   * Insert a key id into the `KeyIdStorage` under the given {@link MethodDigest}.
   * 
   * If an entry for `key` already exists in the storage an error must be returned
   * immediately without altering the state of the storage.
   */
  insertKeyId: (methodDigest: MethodDigest, keyId: string) => Promise<void>;

  /**
   * Obtain the key id associated with the given {@link MethodDigest}.
   */
  getKeyId: (methodDigest: MethodDigest) => Promise<string>;

  /**
   * Delete the `KeyId` associated with the given {@link MethodDigest} from the {@link KeyIdStorage}.
   * 
   * If `key` is not found in storage, an Error must be returned.
   */
  deleteKeyId: (methodDigest: MethodDigest) => Promise<void>;
}

/** Fields for constructing a new {@link Presentation}. */
interface IPresentation {
  /** The JSON-LD context(s) applicable to the presentation. */
  readonly context?: string | Record<string, any> | Array<string | Record<string, any>>;
  /** A unique URI that may be used to identify the presentation. */
  readonly id?: string;
  /** One or more URIs defining the type of the presentation. Contains the base context by default. */
  readonly type?: string | Array<string>;
  /** JWT Credential(s) expressing the claims of the presentation. */
  readonly verifiableCredential: Jwt | Credential | Record<string, any> | Array<Jwt | Credential | Record<string, any>>;
  /** The entity that generated the presentation. */
  readonly holder: string | CoreDID | IotaDID;
  /** Service(s) used to refresh an expired {@link Credential} in the presentation. */
  readonly refreshService?: RefreshService | Array<RefreshService>;
  /** Terms-of-use specified by the presentation holder. */
  readonly termsOfUse?: Policy | Array<Policy>;
  /** Miscellaneous properties. */
  readonly [properties: string]: unknown;
}

/** Fields to create a new Domain Linkage {@link Credential}. */
interface IDomainLinkageCredential {
  /** A reference to the issuer of the {@link Credential}. */
  readonly issuer: CoreDID | IotaDID;
  /** A timestamp of when the {@link Credential} becomes valid. Defaults to the current datetime. */
  readonly issuanceDate?: Timestamp;
  /** A timestamp of when the {@link Credential} should no longer be considered valid. */
  readonly expirationDate: Timestamp;
  /** The origin, on which the {@link Credential} is issued. */
  readonly origin: string;
}


import { JwsAlgorithm, JwkOperation, JwkUse, JwkType } from './jose/index';



/** Holds options to create {@link JwsVerificationOptions}. */
interface IJwsVerificationOptions {
    /** Verify that the `nonce` set in the protected header matches this.
     * 
     * [More Info](https://tools.ietf.org/html/rfc8555#section-6.5.2)
     */
    readonly nonce?: string;

    /** Verify the signing verification method relationship matches this.*/
    readonly methodScope?: MethodScope;

    /** The DID URL of the method, whose JWK should be used to verify the JWS.
     * If unset, the `kid` of the JWS is used as the DID Url.
     */
    readonly methodId?: DIDUrl;
}


interface IToCoreDID {

  /** Returns a {@link CoreDID} representation of this DID. */
  toCoreDid(): CoreDID;
}

/** Fields for constructing a new {@link Credential}. */
interface ICredential {
  /** The JSON-LD context(s) applicable to the {@link Credential}. */
  readonly context?: string | Record<string, any> | Array<string | Record<string, any>>;
  /** A unique URI that may be used to identify the {@link Credential}. */
  readonly id?: string;
  /** One or more URIs defining the type of the {@link Credential}. Contains the base context by default. */
  readonly type?: string | Array<string>;
  /** One or more objects representing the {@link Credential} subject(s). */
  readonly credentialSubject: Subject | Array<Subject>;
  /** A reference to the issuer of the {@link Credential}. */
  readonly issuer: string | CoreDID | IotaDID | Issuer;
  /** A timestamp of when the {@link Credential} becomes valid. Defaults to the current datetime. */
  readonly issuanceDate?: Timestamp;
  /** A timestamp of when the {@link Credential} should no longer be considered valid. */
  readonly expirationDate?: Timestamp;
  /** Information used to determine the current status of the {@link Credential}. */
  readonly credentialStatus?: Status;
  /** Information used to assist in the enforcement of a specific {@link Credential} structure. */
  readonly credentialSchema?: Schema | Array<Schema>;
  /** Service(s) used to refresh an expired {@link Credential}. */
  readonly refreshService?: RefreshService | Array<RefreshService>;
  /** Terms-of-use specified by the {@link Credential} issuer. */
  readonly termsOfUse?: Policy | Array<Policy>;
  /** Human-readable evidence used to support the claims within the {@link Credential}. */
  readonly evidence?: Evidence | Array<Evidence>;
  /** Indicates that the {@link Credential} must only be contained within a {@link Presentation} with a proof issued from the {@link Credential} subject. */
  readonly nonTransferable?: boolean;
  readonly proof?: Proof;
  /** Miscellaneous properties. */
  readonly [properties: string]: unknown;
}


/** Holds options to create a new `KeyBindingJWTValidationOptions`. */
interface IKeyBindingJWTValidationOptions {
    /**
     * Validates the nonce value of the KB-JWT claims.
     */
    readonly nonce?: string;

    /**
     * Validates the `aud` properties in the KB-JWT claims.
     */
    readonly aud?: string;

    /**
     * Options which affect the verification of the signature on the KB-JWT.
     */
    readonly jwsOptions: JwsVerificationOptions;

    /**
     * Declares that the KB-JWT is considered invalid if the `iat` value in the claims
     * is earlier than this timestamp.
     */
    readonly earliestIssuanceDate?: Timestamp;

    /**
     * Declares that the KB-JWT is considered invalid if the `iat` value in the claims is
     * later than this timestamp.
     *
     * Uses the current timestamp during validation if not set.
     */
    readonly latestIssuanceDate?: Timestamp;

}


/** Holds options to create a new {@link JwtCredentialValidationOptions}. */
interface IJwtCredentialValidationOptions {
    /** Declare that the credential is **not** considered valid if it expires before this {@link Timestamp}.
     * Uses the current datetime during validation if not set. */
    readonly earliestExpiryDate?: Timestamp;

    /** Declare that the credential is **not** considered valid if it was issued later than this {@link Timestamp}.
     * Uses the current datetime during validation if not set. */
    readonly latestIssuanceDate?: Timestamp;

    /** Validation behaviour for `credentialStatus`.
     *
     * Default: `StatusCheck.Strict`. */
    readonly status?: StatusCheck;

    /** Declares how credential subjects must relate to the presentation holder during validation.
    *
    * <https://www.w3.org/TR/vc-data-model/#subject-holder-relationships> */
    readonly subjectHolderRelationship?: [string, SubjectHolderRelationship];

    /** Options which affect the verification of the signature on the credential. */
    readonly verifierOptions?: JwsVerificationOptions;
}


/** Holds options to create a new {@link JwtPresentationValidationOptions}. */
interface IJwtPresentationValidationOptions {
    /** 
     * Options which affect the verification of the signature on the presentation. 
     */
    readonly presentationVerifierOptions?: JwsVerificationOptions;

    /**
     * Declare that the presentation is **not** considered valid if it expires before this {@link Timestamp}.
     * Uses the current datetime during validation if not set. 
     */
    readonly earliestExpiryDate?: Timestamp;

    /**
     * Declare that the presentation is **not** considered valid if it was issued later than this {@link Timestamp}.
     * Uses the current datetime during validation if not set. 
     */
    readonly latestIssuanceDate?: Timestamp;
}


/** Interface for cryptographically verifying a JWS signature. 
 * 
 * Implementers are expected to provide a procedure for step 8 of [RFC 7515 section 5.2](https://www.rfc-editor.org/rfc/rfc7515#section-5.2) for 
 * the JWS signature algorithms they want to support.
*/
interface IJwsVerifier {
  /** Validate the `decodedSignature` against the `signingInput` in the manner defined by `alg` using the `publicKey`.
   * 
   *  See [RFC 7515: section 5.2 part 8.](https://www.rfc-editor.org/rfc/rfc7515#section-5.2) and
   *  [RFC 7797 section 3](https://www.rfc-editor.org/rfc/rfc7797#section-3).
   * 
   * ### Failures
   * Upon verification failure an error must be thrown.
  */
   verify: (alg: JwsAlgorithm, signingInput: Uint8Array, decodedSignature: Uint8Array, publicKey: Jwk) => void;
}

/** Fields for constructing a new {@link LinkedDomainService}. */
interface ILinkedDomainService {
  /** Service id. */
  readonly id: DIDUrl;
  /** A unique URI that may be used to identify the {@link Credential}. */
  readonly domains: string[];
  /** Miscellaneous properties. */
  readonly [properties: string]: unknown;
}


/** Information used to increase confidence in the claims of a {@link Credential}.

[More Info](https://www.w3.org/TR/vc-data-model/#evidence) */
interface Evidence {
  /** A URL that allows retrieval of information about the evidence. */
  readonly id?: string;
  /** The type(s) of the credential evidence. */
  readonly type: string | Array<string>;
  /** Additional properties of the credential evidence. */
  readonly [properties: string]: unknown;
}


/** An identifier representing the issuer of a {@link Credential}.

[More Info](https://www.w3.org/TR/vc-data-model/#issuer) */
interface Issuer {
  /** A URL identifying the credential issuer. */
  readonly id: string;
  /** Additional properties of the credential issuer. */
  readonly [properties: string]: unknown;
}


/** Information used to express obligations, prohibitions, and permissions about a {@link Credential} or {@link Presentation}.

[More Info](https://www.w3.org/TR/vc-data-model/#terms-of-use) */
interface Policy {
  /** A URL identifying the credential terms-of-use. */
  readonly id?: string;
  /** The type(s) of the credential terms-of-use. */
  readonly type: string | Array<string>;
  /** Additional properties of the credential terms-of-use. */
  readonly [properties: string]: unknown;
}


/** Information used to refresh or assert the status of a {@link Credential}.

[More Info](https://www.w3.org/TR/vc-data-model/#refreshing) */
interface RefreshService {
  /** The URL of the credential refresh service. */
  readonly id: string;
  /** The type(s) of the credential refresh service. */
  readonly type: string | Array<string>;
  /** Additional properties of the credential refresh service. */
  readonly [properties: string]: unknown;
}


/** Information used to validate the structure of a {@link Credential}.

[More Info](https://www.w3.org/TR/vc-data-model/#data-schemas) */
interface Schema {
  /** A URL identifying the credential schema file. */
  readonly id: string;
  /** The type(s) of the credential schema. */
  readonly type: string | Array<string>;
  /** Additional properties of the credential schema. */
  readonly [properties: string]: unknown;
}


/** Information used to determine the current status of a {@link Credential}.

[More Info](https://www.w3.org/TR/vc-data-model/#status) */
interface Status {
  /** A URL identifying the credential status. */
  readonly id: string;
  /** The type of the credential status. */
  readonly type: string;
  /** Additional properties of the credential status. */
  readonly [properties: string]: unknown;
}


/** An entity who is the target of a set of claims in a {@link Credential}.

[More Info](https://www.w3.org/TR/vc-data-model/#credential-subject) */
interface Subject {
  /** A URI identifying the credential subject. */
  readonly id?: string | CoreDID | IotaDID;
  /** Additional properties of the credential subject. */
  readonly [properties: string]: unknown;
}


/**
 * Base {@link Service} properties.
 */
interface IService {
  /**
   * Identifier of the service.
   *
   * Must be a valid DIDUrl with a fragment.
   */
    readonly id: DIDUrl | string;

    /**
     * Type of service.
     *
     * E.g. "LinkedDomains".
     */
    readonly type: string | string[];

    /**
     * A URL, set of URLs, or map of URL sets.
     *
     * NOTE: throws an error if any entry is not a valid URL string. List entries must be unique.
     */
    readonly serviceEndpoint: string | string[] | Map<string, string[]> | Record<string, string[]>;

    /**
     * Additional custom properties to embed in the service.
     *
     * WARNING: entries may overwrite existing fields and result in invalid documents.
     */
    readonly properties?: Map<string, any> | Record<string, any>;
}

interface ICoreDocument {
  readonly id: string | CoreDID | IotaDID;
  readonly controller?: (string | CoreDID | IotaDID)[];
  readonly alsoKnownAs?: string[];
  readonly verificationMethod?: (VerificationMethod)[];
  readonly authentication?: (VerificationMethod | DIDUrl)[];
  readonly assertionMethod?: (VerificationMethod | DIDUrl)[];
  readonly keyAgreement?: (VerificationMethod | DIDUrl)[];
  readonly capabilityDelegation?: (VerificationMethod | DIDUrl)[];
  readonly capabilityInvocation?: (VerificationMethod | DIDUrl)[];
  readonly service?: (Service)[];
  readonly [properties: string]: unknown;
}


interface IToCoreDocument {

  /** Returns a {@link CoreDocument} representation of this Document. */
  toCoreDocument(): CoreDocument;
}

import type { AliasOutputBuilderParams, Address, IRent } from '@iota/sdk-wasm/node';

export type ResolutionHandlers = Map<string, (did: string) => Promise<CoreDocument | IToCoreDocument>>;


/**
 * Configurations for the {@link Resolver}.
 */
export type ResolverConfig = {
    /**
     * Client for resolving DIDs of the iota method. 
     */
    client?: IIotaIdentityClient,

    /**
     * Handlers for resolving DIDs from arbitrary DID methods. 
     * 
     * The keys to the map are expected to match the method name and the values are asynchronous functions returning DID documents. 
     * 
     * Note that if a `client` is given the key "iota" may NOT be present in this map. 
     */
    handlers?: Map<string, (did: string) => Promise<CoreDocument | IToCoreDocument>>
};


import type { Block, INodeInfoProtocol } from '@iota/sdk-wasm/node';


/**  Options to be set in the JWT claims of a verifiable presentation. */
interface IJwtPresentationOptions {
    /**
     * Set the presentation's expiration date.
     * Default: `undefined`.
     **/
    readonly expirationDate?: Timestamp;
 
    /**
     * Set the presentation's issuance date.
     * Default: current datetime.
     */
    readonly issuanceDate?: Timestamp;

    /**
     * Sets the audience for presentation (`aud` property in JWT claims).
     * 
     * ## Note:
     * Value must be a valid URL.
     *
     * Default: `undefined`.
     */
    readonly audience?: string;

    /**
     * Custom claims that can be used to set additional claims on the resulting JWT.
     */
    readonly customClaims?: Record<string, any>;
}


/** Holds options to create {@link JwsSignatureOptions}. */
interface IJwsSignatureOptions {
    /** Whether to attach the public key in the corresponding method
     * to the JWS header.
     * 
     * Default: false
     */
    readonly attachJwk?: boolean;

    /** Whether to Base64url encode the payload or not.
     *
     * [More Info](https://tools.ietf.org/html/rfc7797#section-3)
     */
    readonly b64?: boolean;

    /** The Type value to be placed in the protected header.
     * 
     * [More Info](https://tools.ietf.org/html/rfc7515#section-4.1.9)
     */
    readonly typ?: string;

    /** Content Type to be placed in the protected header.
     * 
     * [More Info](https://tools.ietf.org/html/rfc7515#section-4.1.10)
     */
    readonly cty?: string;

    /** The URL to be placed in the protected header.
     * 
     * [More Info](https://tools.ietf.org/html/rfc8555#section-6.4.1)
     */
    readonly url?: string;

    /** The nonce to be placed in the protected header.
     * 
     * [More Info](https://tools.ietf.org/html/rfc8555#section-6.5.2)
     */
    readonly nonce?: string;

    /** The kid to set in the protected header.
     * If unset, the kid of the JWK with which the JWS is produced is used.
     * 
     * [More Info](https://www.rfc-editor.org/rfc/rfc7515#section-4.1.4)
     */
    readonly kid?: string;

    /**   /// Whether the payload should be detached from the JWS.
     * 
     * [More Info](https://www.rfc-editor.org/rfc/rfc7515#appendix-F).
     */
    readonly detachedPayload?: boolean

    /**
     * Additional header parameters.
     */
    readonly customHeaderParameters?: Record<string, any>;
}


import type { AliasOutput } from '@iota/sdk-wasm/node';
/** Helper interface necessary for `IotaIdentityClientExt`. */
interface IIotaIdentityClient {

  /** Resolve an Alias identifier, returning its latest `OutputId` and `AliasOutput`. */
  getAliasOutput(aliasId: string): Promise<[string, AliasOutput]>;

  /** Returns the protocol parameters. */
  getProtocolParameters(): Promise<INodeInfoProtocol>; 
}

/**
* A method-agnostic Decentralized Identifier (DID).
*/
export class CoreDID {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Parses a {@link CoreDID} from the given `input`.
*
* ### Errors
*
* Throws an error if the input is not a valid {@link CoreDID}.
* @param {string} input
* @returns {CoreDID}
*/
  static parse(input: string): CoreDID;
/**
* Set the method name of the {@link CoreDID}.
* @param {string} value
*/
  setMethodName(value: string): void;
/**
* Validates whether a string is a valid DID method name.
* @param {string} value
* @returns {boolean}
*/
  static validMethodName(value: string): boolean;
/**
* Set the method-specific-id of the `DID`.
* @param {string} value
*/
  setMethodId(value: string): void;
/**
* Validates whether a string is a valid `DID` method-id.
* @param {string} value
* @returns {boolean}
*/
  static validMethodId(value: string): boolean;
/**
* Returns the {@link CoreDID} scheme.
*
* E.g.
* - `"did:example:12345678" -> "did"`
* - `"did:iota:smr:12345678" -> "did"`
* @returns {string}
*/
  scheme(): string;
/**
* Returns the {@link CoreDID} authority: the method name and method-id.
*
* E.g.
* - `"did:example:12345678" -> "example:12345678"`
* - `"did:iota:smr:12345678" -> "iota:smr:12345678"`
* @returns {string}
*/
  authority(): string;
/**
* Returns the {@link CoreDID} method name.
*
* E.g.
* - `"did:example:12345678" -> "example"`
* - `"did:iota:smr:12345678" -> "iota"`
* @returns {string}
*/
  method(): string;
/**
* Returns the {@link CoreDID} method-specific ID.
*
* E.g.
* - `"did:example:12345678" -> "12345678"`
* - `"did:iota:smr:12345678" -> "smr:12345678"`
* @returns {string}
*/
  methodId(): string;
/**
* Construct a new {@link DIDUrl} by joining with a relative DID Url string.
* @param {string} segment
* @returns {DIDUrl}
*/
  join(segment: string): DIDUrl;
/**
* Clones the {@link CoreDID} into a {@link DIDUrl}.
* @returns {DIDUrl}
*/
  toUrl(): DIDUrl;
/**
* Converts the {@link CoreDID} into a {@link DIDUrl}, consuming it.
* @returns {DIDUrl}
*/
  intoUrl(): DIDUrl;
/**
* Returns the {@link CoreDID} as a string.
* @returns {string}
*/
  toString(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {CoreDID}
*/
  static fromJSON(json: any): CoreDID;
/**
* Deep clones the object.
* @returns {CoreDID}
*/
  clone(): CoreDID;
}
/**
* A method-agnostic DID Document.
*
* Note: All methods that involve reading from this class may potentially raise an error
* if the object is being concurrently modified.
*/
export class CoreDocument {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link CoreDocument} with the given properties.
* @param {ICoreDocument} values
*/
  constructor(values: ICoreDocument);
/**
* Returns a copy of the DID Document `id`.
* @returns {CoreDID}
*/
  id(): CoreDID;
/**
* Sets the DID of the document.
*
* ### Warning
*
* Changing the identifier can drastically alter the results of
* `resolve_method`, `resolve_service` and the related
* [DID URL dereferencing](https://w3c-ccg.github.io/did-resolution/#dereferencing) algorithm.
* @param {CoreDID} id
*/
  setId(id: CoreDID): void;
/**
* Returns a copy of the document controllers.
* @returns {Array<CoreDID>}
*/
  controller(): Array<CoreDID>;
/**
* Sets the controllers of the DID Document.
*
* Note: Duplicates will be ignored.
* Use `null` to remove all controllers.
* @param {CoreDID | CoreDID[] | null} controllers
*/
  setController(controllers: CoreDID | CoreDID[] | null): void;
/**
* Returns a copy of the document's `alsoKnownAs` set.
* @returns {Array<string>}
*/
  alsoKnownAs(): Array<string>;
/**
* Sets the `alsoKnownAs` property in the DID document.
* @param {string | string[] | null} urls
*/
  setAlsoKnownAs(urls: string | string[] | null): void;
/**
* Returns a copy of the document's `verificationMethod` set.
* @returns {VerificationMethod[]}
*/
  verificationMethod(): VerificationMethod[];
/**
* Returns a copy of the document's `authentication` set.
* @returns {Array<DIDUrl | VerificationMethod>}
*/
  authentication(): Array<DIDUrl | VerificationMethod>;
/**
* Returns a copy of the document's `assertionMethod` set.
* @returns {Array<DIDUrl | VerificationMethod>}
*/
  assertionMethod(): Array<DIDUrl | VerificationMethod>;
/**
* Returns a copy of the document's `keyAgreement` set.
* @returns {Array<DIDUrl | VerificationMethod>}
*/
  keyAgreement(): Array<DIDUrl | VerificationMethod>;
/**
* Returns a copy of the document's `capabilityDelegation` set.
* @returns {Array<DIDUrl | VerificationMethod>}
*/
  capabilityDelegation(): Array<DIDUrl | VerificationMethod>;
/**
* Returns a copy of the document's `capabilityInvocation` set.
* @returns {Array<DIDUrl | VerificationMethod>}
*/
  capabilityInvocation(): Array<DIDUrl | VerificationMethod>;
/**
* Returns a copy of the custom DID Document properties.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Sets a custom property in the DID Document.
* If the value is set to `null`, the custom property will be removed.
*
* ### WARNING
*
* This method can overwrite existing properties like `id` and result in an invalid document.
* @param {string} key
* @param {any} value
*/
  setPropertyUnchecked(key: string, value: any): void;
/**
* Returns a set of all {@link Service} in the document.
* @returns {Service[]}
*/
  service(): Service[];
/**
* Add a new {@link Service} to the document.
*
* Errors if there already exists a service or verification method with the same id.
* @param {Service} service
*/
  insertService(service: Service): void;
/**
* Remove a {@link Service} identified by the given {@link DIDUrl} from the document.
*
* Returns `true` if the service was removed.
* @param {DIDUrl} didUrl
* @returns {Service | undefined}
*/
  removeService(didUrl: DIDUrl): Service | undefined;
/**
* Returns the first {@link Service} with an `id` property matching the provided `query`,
* if present.
* @param {DIDUrl | string} query
* @returns {Service | undefined}
*/
  resolveService(query: DIDUrl | string): Service | undefined;
/**
* Returns a list of all {@link VerificationMethod} in the DID Document,
* whose verification relationship matches `scope`.
*
* If `scope` is not set, a list over the **embedded** methods is returned.
* @param {MethodScope | undefined} [scope]
* @returns {VerificationMethod[]}
*/
  methods(scope?: MethodScope): VerificationMethod[];
/**
* Returns an array of all verification relationships.
* @returns {Array<DIDUrl | VerificationMethod>}
*/
  verificationRelationships(): Array<DIDUrl | VerificationMethod>;
/**
* Adds a new `method` to the document in the given `scope`.
* @param {VerificationMethod} method
* @param {MethodScope} scope
*/
  insertMethod(method: VerificationMethod, scope: MethodScope): void;
/**
* Removes all references to the specified Verification Method.
* @param {DIDUrl} did
* @returns {VerificationMethod | undefined}
*/
  removeMethod(did: DIDUrl): VerificationMethod | undefined;
/**
* Returns a copy of the first verification method with an `id` property
* matching the provided `query` and the verification relationship
* specified by `scope`, if present.
* @param {DIDUrl | string} query
* @param {MethodScope | undefined} [scope]
* @returns {VerificationMethod | undefined}
*/
  resolveMethod(query: DIDUrl | string, scope?: MethodScope): VerificationMethod | undefined;
/**
* Attaches the relationship to the given method, if the method exists.
*
* Note: The method needs to be in the set of verification methods,
* so it cannot be an embedded one.
* @param {DIDUrl} didUrl
* @param {MethodRelationship} relationship
* @returns {boolean}
*/
  attachMethodRelationship(didUrl: DIDUrl, relationship: MethodRelationship): boolean;
/**
* Detaches the given relationship from the given method, if the method exists.
* @param {DIDUrl} didUrl
* @param {MethodRelationship} relationship
* @returns {boolean}
*/
  detachMethodRelationship(didUrl: DIDUrl, relationship: MethodRelationship): boolean;
/**
* Decodes and verifies the provided JWS according to the passed `options` and `signatureVerifier`.
*  If no `signatureVerifier` argument is provided a default verifier will be used that is (only) capable of
* verifying EdDSA signatures.
*
* Regardless of which options are passed the following conditions must be met in order for a verification attempt to
* take place.
* - The JWS must be encoded according to the JWS compact serialization.
* - The `kid` value in the protected header must be an identifier of a verification method in this DID document,
* or set explicitly in the `options`.
* @param {Jws} jws
* @param {JwsVerificationOptions} options
* @param {IJwsVerifier} signatureVerifier
* @param {string | undefined} [detachedPayload]
* @returns {DecodedJws}
*/
  verifyJws(jws: Jws, options: JwsVerificationOptions, signatureVerifier: IJwsVerifier, detachedPayload?: string): DecodedJws;
/**
* If the document has a {@link RevocationBitmap} service identified by `serviceQuery`,
* revoke all specified `indices`.
* @param {DIDUrl | string} serviceQuery
* @param {number | number[]} indices
*/
  revokeCredentials(serviceQuery: DIDUrl | string, indices: number | number[]): void;
/**
* If the document has a {@link RevocationBitmap} service identified by `serviceQuery`,
* unrevoke all specified `indices`.
* @param {DIDUrl | string} serviceQuery
* @param {number | number[]} indices
*/
  unrevokeCredentials(serviceQuery: DIDUrl | string, indices: number | number[]): void;
/**
* Deep clones the {@link CoreDocument}.
* @returns {CoreDocument}
*/
  clone(): CoreDocument;
/**
* ### Warning
* This is for internal use only. Do not rely on or call this method.
* @returns {CoreDocument}
*/
  _shallowCloneInternal(): CoreDocument;
/**
* ### Warning
* This is for internal use only. Do not rely on or call this method.
* @returns {number}
*/
  _strongCountInternal(): number;
/**
* Serializes to a plain JS representation.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a plain JS representation.
* @param {any} json
* @returns {CoreDocument}
*/
  static fromJSON(json: any): CoreDocument;
/**
* Generate new key material in the given `storage` and insert a new verification method with the corresponding
* public key material into the DID document.
*
* - If no fragment is given the `kid` of the generated JWK is used, if it is set, otherwise an error is returned.
* - The `keyType` must be compatible with the given `storage`. `Storage`s are expected to export key type constants
* for that use case.
*
* The fragment of the generated method is returned.
* @param {Storage} storage
* @param {string} keyType
* @param {JwsAlgorithm} alg
* @param {string | undefined} fragment
* @param {MethodScope} scope
* @returns {Promise<string>}
*/
  generateMethod(storage: Storage, keyType: string, alg: JwsAlgorithm, fragment: string | undefined, scope: MethodScope): Promise<string>;
/**
* Remove the method identified by the `fragment` from the document and delete the corresponding key material in
* the `storage`.
* @param {Storage} storage
* @param {DIDUrl} id
* @returns {Promise<void>}
*/
  purgeMethod(storage: Storage, id: DIDUrl): Promise<void>;
/**
* Sign the `payload` according to `options` with the storage backed private key corresponding to the public key
* material in the verification method identified by the given `fragment.
*
* Upon success a string representing a JWS encoded according to the Compact JWS Serialization format is returned.
* See [RFC7515 section 3.1](https://www.rfc-editor.org/rfc/rfc7515#section-3.1).
* @param {Storage} storage
* @param {string} fragment
* @param {string} payload
* @param {JwsSignatureOptions} options
* @returns {Promise<Jws>}
*/
  createJws(storage: Storage, fragment: string, payload: string, options: JwsSignatureOptions): Promise<Jws>;
/**
* Produces a JWT where the payload is produced from the given `credential`
* in accordance with [VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/#json-web-token).
*
* Unless the `kid` is explicitly set in the options, the `kid` in the protected header is the `id`
* of the method identified by `fragment` and the JWS signature will be produced by the corresponding
* private key backed by the `storage` in accordance with the passed `options`.
*
* The `custom_claims` can be used to set additional claims on the resulting JWT.
* @param {Storage} storage
* @param {string} fragment
* @param {Credential} credential
* @param {JwsSignatureOptions} options
* @param {Record<string, any> | undefined} [custom_claims]
* @returns {Promise<Jwt>}
*/
  createCredentialJwt(storage: Storage, fragment: string, credential: Credential, options: JwsSignatureOptions, custom_claims?: Record<string, any>): Promise<Jwt>;
/**
* Produces a JWT where the payload is produced from the given presentation.
* in accordance with [VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/#json-web-token).
*
* Unless the `kid` is explicitly set in the options, the `kid` in the protected header is the `id`
* of the method identified by `fragment` and the JWS signature will be produced by the corresponding
* private key backed by the `storage` in accordance with the passed `options`.
* @param {Storage} storage
* @param {string} fragment
* @param {Presentation} presentation
* @param {JwsSignatureOptions} signature_options
* @param {JwtPresentationOptions} presentation_options
* @returns {Promise<Jwt>}
*/
  createPresentationJwt(storage: Storage, fragment: string, presentation: Presentation, signature_options: JwsSignatureOptions, presentation_options: JwtPresentationOptions): Promise<Jwt>;
}
/**
*/
export class Credential {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Returns the base JSON-LD context.
* @returns {string}
*/
  static BaseContext(): string;
/**
* Returns the base type.
* @returns {string}
*/
  static BaseType(): string;
/**
* Constructs a new {@link Credential}.
* @param {ICredential} values
*/
  constructor(values: ICredential);
/**
* @param {IDomainLinkageCredential} values
* @returns {Credential}
*/
  static createDomainLinkageCredential(values: IDomainLinkageCredential): Credential;
/**
* Returns a copy of the JSON-LD context(s) applicable to the {@link Credential}.
* @returns {Array<string | Record<string, any>>}
*/
  context(): Array<string | Record<string, any>>;
/**
* Returns a copy of the unique `URI` identifying the {@link Credential} .
* @returns {string | undefined}
*/
  id(): string | undefined;
/**
* Returns a copy of the URIs defining the type of the {@link Credential}.
* @returns {Array<string>}
*/
  type(): Array<string>;
/**
* Returns a copy of the {@link Credential} subject(s).
* @returns {Array<Subject>}
*/
  credentialSubject(): Array<Subject>;
/**
* Returns a copy of the issuer of the {@link Credential}.
* @returns {string | Issuer}
*/
  issuer(): string | Issuer;
/**
* Returns a copy of the timestamp of when the {@link Credential} becomes valid.
* @returns {Timestamp}
*/
  issuanceDate(): Timestamp;
/**
* Returns a copy of the timestamp of when the {@link Credential} should no longer be considered valid.
* @returns {Timestamp | undefined}
*/
  expirationDate(): Timestamp | undefined;
/**
* Returns a copy of the information used to determine the current status of the {@link Credential}.
* @returns {Array<Status>}
*/
  credentialStatus(): Array<Status>;
/**
* Returns a copy of the information used to assist in the enforcement of a specific {@link Credential} structure.
* @returns {Array<Schema>}
*/
  credentialSchema(): Array<Schema>;
/**
* Returns a copy of the service(s) used to refresh an expired {@link Credential}.
* @returns {Array<RefreshService>}
*/
  refreshService(): Array<RefreshService>;
/**
* Returns a copy of the terms-of-use specified by the {@link Credential} issuer.
* @returns {Array<Policy>}
*/
  termsOfUse(): Array<Policy>;
/**
* Returns a copy of the human-readable evidence used to support the claims within the {@link Credential}.
* @returns {Array<Evidence>}
*/
  evidence(): Array<Evidence>;
/**
* Returns whether or not the {@link Credential} must only be contained within a  {@link Presentation}
* with a proof issued from the {@link Credential} subject.
* @returns {boolean | undefined}
*/
  nonTransferable(): boolean | undefined;
/**
* Optional cryptographic proof, unrelated to JWT.
* @returns {Proof | undefined}
*/
  proof(): Proof | undefined;
/**
* Returns a copy of the miscellaneous properties on the {@link Credential}.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Sets the `proof` property of the {@link Credential}.
*
* Note that this proof is not related to JWT.
* @param {Proof | undefined} [proof]
*/
  setProof(proof?: Proof): void;
/**
* Serializes the `Credential` as a JWT claims set
* in accordance with [VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/#json-web-token).
*
* The resulting object can be used as the payload of a JWS when issuing the credential.  
* @param {Record<string, any> | undefined} [custom_claims]
* @returns {Record<string, any>}
*/
  toJwtClaims(custom_claims?: Record<string, any>): Record<string, any>;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Credential}
*/
  static fromJSON(json: any): Credential;
/**
* Deep clones the object.
* @returns {Credential}
*/
  clone(): Credential;
}
/**
* A method agnostic DID Url.
*/
export class DIDUrl {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Parses a {@link DIDUrl} from the input string.
* @param {string} input
* @returns {DIDUrl}
*/
  static parse(input: string): DIDUrl;
/**
* Return a copy of the {@link CoreDID} section of the {@link DIDUrl}.
* @returns {CoreDID}
*/
  did(): CoreDID;
/**
* Return a copy of the relative DID Url as a string, including only the path, query, and fragment.
* @returns {string}
*/
  urlStr(): string;
/**
* Returns a copy of the {@link DIDUrl} method fragment, if any. Excludes the leading '#'.
* @returns {string | undefined}
*/
  fragment(): string | undefined;
/**
* Sets the `fragment` component of the {@link DIDUrl}.
* @param {string | undefined} [value]
*/
  setFragment(value?: string): void;
/**
* Returns a copy of the {@link DIDUrl} path.
* @returns {string | undefined}
*/
  path(): string | undefined;
/**
* Sets the `path` component of the {@link DIDUrl}.
* @param {string | undefined} [value]
*/
  setPath(value?: string): void;
/**
* Returns a copy of the {@link DIDUrl} method query, if any. Excludes the leading '?'.
* @returns {string | undefined}
*/
  query(): string | undefined;
/**
* Sets the `query` component of the {@link DIDUrl}.
* @param {string | undefined} [value]
*/
  setQuery(value?: string): void;
/**
* Append a string representing a path, query, and/or fragment, returning a new {@link DIDUrl}.
*
* Must begin with a valid delimiter character: '/', '?', '#'. Overwrites the existing URL
* segment and any following segments in order of path, query, then fragment.
*
* I.e.
* - joining a path will clear the query and fragment.
* - joining a query will clear the fragment.
* - joining a fragment will only overwrite the fragment.
* @param {string} segment
* @returns {DIDUrl}
*/
  join(segment: string): DIDUrl;
/**
* Returns the {@link DIDUrl} as a string.
* @returns {string}
*/
  toString(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {DIDUrl}
*/
  static fromJSON(json: any): DIDUrl;
/**
* Deep clones the object.
* @returns {DIDUrl}
*/
  clone(): DIDUrl;
}
/**
* A cryptographically verified decoded token from a JWS.
*
* Contains the decoded headers and the raw claims.
*/
export class DecodedJws {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Returns a copy of the parsed claims represented as a string.
*
* # Errors
* An error is thrown if the claims cannot be represented as a string.
*
* This error can only occur if the Token was decoded from a detached payload.  
* @returns {string}
*/
  claims(): string;
/**
* Return a copy of the parsed claims represented as an array of bytes.
* @returns {Uint8Array}
*/
  claimsBytes(): Uint8Array;
/**
* Returns a copy of the protected header.
* @returns {JwsHeader}
*/
  protectedHeader(): JwsHeader;
/**
* Deep clones the object.
* @returns {DecodedJws}
*/
  clone(): DecodedJws;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
}
/**
* A cryptographically verified and decoded Credential.
*
* Note that having an instance of this type only means the JWS it was constructed from was verified.
* It does not imply anything about a potentially present proof property on the credential itself.
*/
export class DecodedJwtCredential {
  free(): void;
/**
* Returns a copy of the credential parsed to the [Verifiable Credentials Data model](https://www.w3.org/TR/vc-data-model/).
* @returns {Credential}
*/
  credential(): Credential;
/**
* Returns a copy of the protected header parsed from the decoded JWS.
* @returns {JwsHeader}
*/
  protectedHeader(): JwsHeader;
/**
* The custom claims parsed from the JWT.
* @returns {Record<string, any> | undefined}
*/
  customClaims(): Record<string, any> | undefined;
/**
* Consumes the object and returns the decoded credential.
*
* ### Warning
*
* This destroys the {@link DecodedJwtCredential} object.
* @returns {Credential}
*/
  intoCredential(): Credential;
}
/**
* A cryptographically verified and decoded presentation.
*
* Note that having an instance of this type only means the JWS it was constructed from was verified.
* It does not imply anything about a potentially present proof property on the presentation itself.
*/
export class DecodedJwtPresentation {
  free(): void;
/**
* @returns {Presentation}
*/
  presentation(): Presentation;
/**
* Returns a copy of the protected header parsed from the decoded JWS.
* @returns {JwsHeader}
*/
  protectedHeader(): JwsHeader;
/**
* Consumes the object and returns the decoded presentation.
*
* ### Warning
* This destroys the {@link DecodedJwtPresentation} object.
* @returns {Presentation}
*/
  intoPresentation(): Presentation;
/**
* The expiration date parsed from the JWT claims.
* @returns {Timestamp | undefined}
*/
  expirationDate(): Timestamp | undefined;
/**
* The issuance date parsed from the JWT claims.
* @returns {Timestamp | undefined}
*/
  issuanceDate(): Timestamp | undefined;
/**
* The `aud` property parsed from JWT claims.
* @returns {string | undefined}
*/
  audience(): string | undefined;
/**
* The custom claims parsed from the JWT.
* @returns {Record<string, any> | undefined}
*/
  customClaims(): Record<string, any> | undefined;
}
/**
* Represents an elements constructing a disclosure.
* Object properties and array elements disclosures are supported.
*
* See: https://www.ietf.org/archive/id/draft-ietf-oauth-selective-disclosure-jwt-07.html#name-disclosures
*/
export class Disclosure {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {string} salt
* @param {string | undefined} claim_name
* @param {any} claim_value
*/
  constructor(salt: string, claim_name: string | undefined, claim_value: any);
/**
* Parses a Base64 encoded disclosure into a `Disclosure`.
*
* ## Error
*
* Returns an `InvalidDisclosure` if input is not a valid disclosure.
* @param {string} disclosure
* @returns {Disclosure}
*/
  static parse(disclosure: string): Disclosure;
/**
* Returns a copy of the base64url-encoded string.
* @returns {string}
*/
  disclosure(): string;
/**
* Returns a copy of the base64url-encoded string.
* @returns {string}
*/
  toEncodedString(): string;
/**
* Returns a copy of the base64url-encoded string.
* @returns {string}
*/
  toString(): string;
/**
* Returns a copy of the salt value.
* @returns {string}
*/
  salt(): string;
/**
* Returns a copy of the claim name, optional for array elements.
* @returns {string | undefined}
*/
  claimName(): string | undefined;
/**
* Returns a copy of the claim Value which can be of any type.
* @returns {any}
*/
  claimValue(): any;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Disclosure}
*/
  static fromJSON(json: any): Disclosure;
}
/**
* DID Configuration Resource which contains Domain Linkage Credentials.
* It can be placed in an origin's `.well-known` directory to prove linkage between the origin and a DID.
* See: <https://identity.foundation/.well-known/resources/did-configuration/#did-configuration-resource>
*
* Note:
* - Only the [JSON Web Token Proof Format](https://identity.foundation/.well-known/resources/did-configuration/#json-web-token-proof-format)
*/
export class DomainLinkageConfiguration {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Constructs a new {@link DomainLinkageConfiguration}.
* @param {Array<Jwt>} linkedDids
*/
  constructor(linkedDids: Array<Jwt>);
/**
* List of the Domain Linkage Credentials.
* @returns {Array<Jwt>}
*/
  linkedDids(): Array<Jwt>;
/**
* List of the issuers of the Domain Linkage Credentials.
* @returns {Array<CoreDID>}
*/
  issuers(): Array<CoreDID>;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {DomainLinkageConfiguration}
*/
  static fromJSON(json: any): DomainLinkageConfiguration;
/**
* Deep clones the object.
* @returns {DomainLinkageConfiguration}
*/
  clone(): DomainLinkageConfiguration;
}
/**
* A span of time.
*/
export class Duration {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Create a new {@link Duration} with the given number of seconds.
* @param {number} seconds
* @returns {Duration}
*/
  static seconds(seconds: number): Duration;
/**
* Create a new {@link Duration} with the given number of minutes.
* @param {number} minutes
* @returns {Duration}
*/
  static minutes(minutes: number): Duration;
/**
* Create a new {@link Duration} with the given number of hours.
* @param {number} hours
* @returns {Duration}
*/
  static hours(hours: number): Duration;
/**
* Create a new {@link Duration} with the given number of days.
* @param {number} days
* @returns {Duration}
*/
  static days(days: number): Duration;
/**
* Create a new {@link Duration} with the given number of weeks.
* @param {number} weeks
* @returns {Duration}
*/
  static weeks(weeks: number): Duration;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Duration}
*/
  static fromJSON(json: any): Duration;
}
/**
* An implementor of `IJwsVerifier` that can handle the
* `EdDSA` algorithm.
*/
export class EdDSAJwsVerifier {
  free(): void;
/**
* Constructs an EdDSAJwsVerifier.
*/
  constructor();
/**
* Verify a JWS signature secured with the `EdDSA` algorithm.
* Only the `Ed25519` curve is supported for now.
*
* This function is useful when one is building an `IJwsVerifier` that extends the default provided by
* the IOTA Identity Framework.
*
* # Warning
*
* This function does not check whether `alg = EdDSA` in the protected header. Callers are expected to assert this
* prior to calling the function.
* @param {JwsAlgorithm} alg
* @param {Uint8Array} signingInput
* @param {Uint8Array} decodedSignature
* @param {Jwk} publicKey
*/
  verify(alg: JwsAlgorithm, signingInput: Uint8Array, decodedSignature: Uint8Array, publicKey: Jwk): void;
}
/**
* A DID conforming to the IOTA DID method specification.
*
* @typicalname did
*/
export class IotaDID {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Constructs a new {@link IotaDID} from a byte representation of the tag and the given
* network name.
*
* See also {@link IotaDID.placeholder}.
* @param {Uint8Array} bytes
* @param {string} network
*/
  constructor(bytes: Uint8Array, network: string);
/**
* Constructs a new {@link IotaDID} from a hex representation of an Alias Id and the given
* network name.
* @param {string} aliasId
* @param {string} network
* @returns {IotaDID}
*/
  static fromAliasId(aliasId: string, network: string): IotaDID;
/**
* Creates a new placeholder {@link IotaDID} with the given network name.
*
* E.g. `did:iota:smr:0x0000000000000000000000000000000000000000000000000000000000000000`.
* @param {string} network
* @returns {IotaDID}
*/
  static placeholder(network: string): IotaDID;
/**
* Parses a {@link IotaDID} from the input string.
* @param {string} input
* @returns {IotaDID}
*/
  static parse(input: string): IotaDID;
/**
* Returns the Tangle network name of the {@link IotaDID}.
* @returns {string}
*/
  network(): string;
/**
* Returns a copy of the unique tag of the {@link IotaDID}.
* @returns {string}
*/
  tag(): string;
/**
* Returns the DID represented as a {@link CoreDID}.
* @returns {CoreDID}
*/
  toCoreDid(): CoreDID;
/**
* Returns the `DID` scheme.
*
* E.g.
* - `"did:example:12345678" -> "did"`
* - `"did:iota:main:12345678" -> "did"`
* @returns {string}
*/
  scheme(): string;
/**
* Returns the `DID` authority: the method name and method-id.
*
* E.g.
* - `"did:example:12345678" -> "example:12345678"`
* - `"did:iota:main:12345678" -> "iota:main:12345678"`
* @returns {string}
*/
  authority(): string;
/**
* Returns the `DID` method name.
*
* E.g.
* - `"did:example:12345678" -> "example"`
* - `"did:iota:main:12345678" -> "iota"`
* @returns {string}
*/
  method(): string;
/**
* Returns the `DID` method-specific ID.
*
* E.g.
* - `"did:example:12345678" -> "12345678"`
* - `"did:iota:main:12345678" -> "main:12345678"`
* @returns {string}
*/
  methodId(): string;
/**
* Construct a new {@link DIDUrl} by joining with a relative DID Url string.
* @param {string} segment
* @returns {DIDUrl}
*/
  join(segment: string): DIDUrl;
/**
* Clones the `DID` into a {@link DIDUrl}.
* @returns {DIDUrl}
*/
  toUrl(): DIDUrl;
/**
* Returns the hex-encoded AliasId with a '0x' prefix, from the DID tag.
* @returns {string}
*/
  toAliasId(): string;
/**
* Converts the `DID` into a {@link DIDUrl}, consuming it.
* @returns {DIDUrl}
*/
  intoUrl(): DIDUrl;
/**
* Returns the `DID` as a string.
* @returns {string}
*/
  toString(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {IotaDID}
*/
  static fromJSON(json: any): IotaDID;
/**
* Deep clones the object.
* @returns {IotaDID}
*/
  clone(): IotaDID;
/**
* The default Tangle network (`"iota"`).
*/
  static readonly DEFAULT_NETWORK: string;
/**
* The IOTA DID method name (`"iota"`).
*/
  static readonly METHOD: string;
}
/**
* A DID Document adhering to the IOTA DID method specification.
*
* Note: All methods that involve reading from this class may potentially raise an error
* if the object is being concurrently modified.
*/
export class IotaDocument {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Constructs an empty IOTA DID Document with a {@link IotaDID.placeholder} identifier
* for the given `network`.
* @param {string} network
*/
  constructor(network: string);
/**
* Constructs an empty DID Document with the given identifier.
* @param {IotaDID} id
* @returns {IotaDocument}
*/
  static newWithId(id: IotaDID): IotaDocument;
/**
* Returns a copy of the DID Document `id`.
* @returns {IotaDID}
*/
  id(): IotaDID;
/**
* Returns a copy of the list of document controllers.
*
* NOTE: controllers are determined by the `state_controller` unlock condition of the output
* during resolution and are omitted when publishing.
* @returns {IotaDID[]}
*/
  controller(): IotaDID[];
/**
* Returns a copy of the document's `alsoKnownAs` set.
* @returns {Array<string>}
*/
  alsoKnownAs(): Array<string>;
/**
* Sets the `alsoKnownAs` property in the DID document.
* @param {string | string[] | null} urls
*/
  setAlsoKnownAs(urls: string | string[] | null): void;
/**
* Returns a copy of the custom DID Document properties.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Sets a custom property in the DID Document.
* If the value is set to `null`, the custom property will be removed.
*
* ### WARNING
*
* This method can overwrite existing properties like `id` and result in an invalid document.
* @param {string} key
* @param {any} value
*/
  setPropertyUnchecked(key: string, value: any): void;
/**
* Return a set of all {@link Service} in the document.
* @returns {Service[]}
*/
  service(): Service[];
/**
* Add a new {@link Service} to the document.
*
* Returns `true` if the service was added.
* @param {Service} service
*/
  insertService(service: Service): void;
/**
* Remove a {@link Service} identified by the given {@link DIDUrl} from the document.
*
* Returns `true` if a service was removed.
* @param {DIDUrl} did
* @returns {Service | undefined}
*/
  removeService(did: DIDUrl): Service | undefined;
/**
* Returns the first {@link Service} with an `id` property matching the provided `query`,
* if present.
* @param {DIDUrl | string} query
* @returns {Service | undefined}
*/
  resolveService(query: DIDUrl | string): Service | undefined;
/**
* Returns a list of all {@link VerificationMethod} in the DID Document,
* whose verification relationship matches `scope`.
*
* If `scope` is not set, a list over the **embedded** methods is returned.
* @param {MethodScope | undefined} [scope]
* @returns {VerificationMethod[]}
*/
  methods(scope?: MethodScope): VerificationMethod[];
/**
* Adds a new `method` to the document in the given `scope`.
* @param {VerificationMethod} method
* @param {MethodScope} scope
*/
  insertMethod(method: VerificationMethod, scope: MethodScope): void;
/**
* Removes all references to the specified Verification Method.
* @param {DIDUrl} did
* @returns {VerificationMethod | undefined}
*/
  removeMethod(did: DIDUrl): VerificationMethod | undefined;
/**
* Returns a copy of the first verification method with an `id` property
* matching the provided `query` and the verification relationship
* specified by `scope`, if present.
* @param {DIDUrl | string} query
* @param {MethodScope | undefined} [scope]
* @returns {VerificationMethod | undefined}
*/
  resolveMethod(query: DIDUrl | string, scope?: MethodScope): VerificationMethod | undefined;
/**
* Attaches the relationship to the given method, if the method exists.
*
* Note: The method needs to be in the set of verification methods,
* so it cannot be an embedded one.
* @param {DIDUrl} didUrl
* @param {MethodRelationship} relationship
* @returns {boolean}
*/
  attachMethodRelationship(didUrl: DIDUrl, relationship: MethodRelationship): boolean;
/**
* Detaches the given relationship from the given method, if the method exists.
* @param {DIDUrl} didUrl
* @param {MethodRelationship} relationship
* @returns {boolean}
*/
  detachMethodRelationship(didUrl: DIDUrl, relationship: MethodRelationship): boolean;
/**
* Decodes and verifies the provided JWS according to the passed `options` and `signatureVerifier`.
*  If no `signatureVerifier` argument is provided a default verifier will be used that is (only) capable of
* verifying EdDSA signatures.
*
* Regardless of which options are passed the following conditions must be met in order for a verification attempt to
* take place.
* - The JWS must be encoded according to the JWS compact serialization.
* - The `kid` value in the protected header must be an identifier of a verification method in this DID document.
* @param {Jws} jws
* @param {JwsVerificationOptions} options
* @param {IJwsVerifier} signatureVerifier
* @param {string | undefined} [detachedPayload]
* @returns {DecodedJws}
*/
  verifyJws(jws: Jws, options: JwsVerificationOptions, signatureVerifier: IJwsVerifier, detachedPayload?: string): DecodedJws;
/**
* Serializes the document for inclusion in an Alias Output's state metadata
* with the default {@link StateMetadataEncoding}.
* @returns {Uint8Array}
*/
  pack(): Uint8Array;
/**
* Serializes the document for inclusion in an Alias Output's state metadata.
* @param {StateMetadataEncoding} encoding
* @returns {Uint8Array}
*/
  packWithEncoding(encoding: StateMetadataEncoding): Uint8Array;
/**
* Deserializes the document from an Alias Output.
*
* If `allowEmpty` is true, this will return an empty DID document marked as `deactivated`
* if `stateMetadata` is empty.
*
* The `tokenSupply` must be equal to the token supply of the network the DID is associated with.  
*
* NOTE: `did` is required since it is omitted from the serialized DID Document and
* cannot be inferred from the state metadata. It also indicates the network, which is not
* encoded in the `AliasId` alone.
* @param {IotaDID} did
* @param {AliasOutputBuilderParams} aliasOutput
* @param {boolean} allowEmpty
* @returns {IotaDocument}
*/
  static unpackFromOutput(did: IotaDID, aliasOutput: AliasOutputBuilderParams, allowEmpty: boolean): IotaDocument;
/**
* Returns all DID documents of the Alias Outputs contained in the block's transaction payload
* outputs, if any.
*
* Errors if any Alias Output does not contain a valid or empty DID Document.
* @param {string} network
* @param {Block} block
* @returns {IotaDocument[]}
*/
  static unpackFromBlock(network: string, block: Block): IotaDocument[];
/**
* Returns a copy of the metadata associated with this document.
*
* NOTE: Copies all the metadata. See also `metadataCreated`, `metadataUpdated`,
* `metadataPreviousMessageId`, `metadataProof` if only a subset of the metadata required.
* @returns {IotaDocumentMetadata}
*/
  metadata(): IotaDocumentMetadata;
/**
* Returns a copy of the timestamp of when the DID document was created.
* @returns {Timestamp | undefined}
*/
  metadataCreated(): Timestamp | undefined;
/**
* Sets the timestamp of when the DID document was created.
* @param {Timestamp | undefined} timestamp
*/
  setMetadataCreated(timestamp: Timestamp | undefined): void;
/**
* Returns a copy of the timestamp of the last DID document update.
* @returns {Timestamp | undefined}
*/
  metadataUpdated(): Timestamp | undefined;
/**
* Sets the timestamp of the last DID document update.
* @param {Timestamp | undefined} timestamp
*/
  setMetadataUpdated(timestamp: Timestamp | undefined): void;
/**
* Returns a copy of the deactivated status of the DID document.
* @returns {boolean | undefined}
*/
  metadataDeactivated(): boolean | undefined;
/**
* Sets the deactivated status of the DID document.
* @param {boolean | undefined} [deactivated]
*/
  setMetadataDeactivated(deactivated?: boolean): void;
/**
* Returns a copy of the Bech32-encoded state controller address, if present.
* @returns {string | undefined}
*/
  metadataStateControllerAddress(): string | undefined;
/**
* Returns a copy of the Bech32-encoded governor address, if present.
* @returns {string | undefined}
*/
  metadataGovernorAddress(): string | undefined;
/**
* Sets a custom property in the document metadata.
* If the value is set to `null`, the custom property will be removed.
* @param {string} key
* @param {any} value
*/
  setMetadataPropertyUnchecked(key: string, value: any): void;
/**
* If the document has a {@link RevocationBitmap} service identified by `serviceQuery`,
* revoke all specified `indices`.
* @param {DIDUrl | string} serviceQuery
* @param {number | number[]} indices
*/
  revokeCredentials(serviceQuery: DIDUrl | string, indices: number | number[]): void;
/**
* If the document has a {@link RevocationBitmap} service identified by `serviceQuery`,
* unrevoke all specified `indices`.
* @param {DIDUrl | string} serviceQuery
* @param {number | number[]} indices
*/
  unrevokeCredentials(serviceQuery: DIDUrl | string, indices: number | number[]): void;
/**
* Returns a deep clone of the {@link IotaDocument}.
* @returns {IotaDocument}
*/
  clone(): IotaDocument;
/**
* ### Warning
* This is for internal use only. Do not rely on or call this method.
* @returns {IotaDocument}
*/
  _shallowCloneInternal(): IotaDocument;
/**
* ### Warning
* This is for internal use only. Do not rely on or call this method.
* @returns {number}
*/
  _strongCountInternal(): number;
/**
* Serializes to a plain JS representation.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a plain JS representation.
* @param {any} json
* @returns {IotaDocument}
*/
  static fromJSON(json: any): IotaDocument;
/**
* Transforms the {@link IotaDocument} to its {@link CoreDocument} representation.
* @returns {CoreDocument}
*/
  toCoreDocument(): CoreDocument;
/**
* Generate new key material in the given `storage` and insert a new verification method with the corresponding
* public key material into the DID document.
*
* - If no fragment is given the `kid` of the generated JWK is used, if it is set, otherwise an error is returned.
* - The `keyType` must be compatible with the given `storage`. `Storage`s are expected to export key type constants
* for that use case.
*
* The fragment of the generated method is returned.
* @param {Storage} storage
* @param {string} keyType
* @param {JwsAlgorithm} alg
* @param {string | undefined} fragment
* @param {MethodScope} scope
* @returns {Promise<string>}
*/
  generateMethod(storage: Storage, keyType: string, alg: JwsAlgorithm, fragment: string | undefined, scope: MethodScope): Promise<string>;
/**
* Remove the method identified by the given fragment from the document and delete the corresponding key material in
* the given `storage`.
* @param {Storage} storage
* @param {DIDUrl} id
* @returns {Promise<void>}
*/
  purgeMethod(storage: Storage, id: DIDUrl): Promise<void>;
/**
* Sign the `payload` according to `options` with the storage backed private key corresponding to the public key
* material in the verification method identified by the given `fragment.
*
* Upon success a string representing a JWS encoded according to the Compact JWS Serialization format is returned.
* See [RFC7515 section 3.1](https://www.rfc-editor.org/rfc/rfc7515#section-3.1).
*
* @deprecated Use `createJws()` instead.
* @param {Storage} storage
* @param {string} fragment
* @param {string} payload
* @param {JwsSignatureOptions} options
* @returns {Promise<Jws>}
*/
  createJwt(storage: Storage, fragment: string, payload: string, options: JwsSignatureOptions): Promise<Jws>;
/**
* Sign the `payload` according to `options` with the storage backed private key corresponding to the public key
* material in the verification method identified by the given `fragment.
*
* Upon success a string representing a JWS encoded according to the Compact JWS Serialization format is returned.
* See [RFC7515 section 3.1](https://www.rfc-editor.org/rfc/rfc7515#section-3.1).
* @param {Storage} storage
* @param {string} fragment
* @param {string} payload
* @param {JwsSignatureOptions} options
* @returns {Promise<Jws>}
*/
  createJws(storage: Storage, fragment: string, payload: string, options: JwsSignatureOptions): Promise<Jws>;
/**
* Produces a JWS where the payload is produced from the given `credential`
* in accordance with [VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/#json-web-token).
*
* Unless the `kid` is explicitly set in the options, the `kid` in the protected header is the `id`
* of the method identified by `fragment` and the JWS signature will be produced by the corresponding
* private key backed by the `storage` in accordance with the passed `options`.
*
* The `custom_claims` can be used to set additional claims on the resulting JWT.
* @param {Storage} storage
* @param {string} fragment
* @param {Credential} credential
* @param {JwsSignatureOptions} options
* @param {Record<string, any> | undefined} [custom_claims]
* @returns {Promise<Jwt>}
*/
  createCredentialJwt(storage: Storage, fragment: string, credential: Credential, options: JwsSignatureOptions, custom_claims?: Record<string, any>): Promise<Jwt>;
/**
* Produces a JWT where the payload is produced from the given presentation.
* in accordance with [VC Data Model v1.1](https://www.w3.org/TR/vc-data-model/#json-web-token).
*
* Unless the `kid` is explicitly set in the options, the `kid` in the protected header is the `id`
* of the method identified by `fragment` and the JWS signature will be produced by the corresponding
* private key backed by the `storage` in accordance with the passed `options`.
* @param {Storage} storage
* @param {string} fragment
* @param {Presentation} presentation
* @param {JwsSignatureOptions} signature_options
* @param {JwtPresentationOptions} presentation_options
* @returns {Promise<Jwt>}
*/
  createPresentationJwt(storage: Storage, fragment: string, presentation: Presentation, signature_options: JwsSignatureOptions, presentation_options: JwtPresentationOptions): Promise<Jwt>;
}
/**
* Additional attributes related to an IOTA DID Document.
*/
export class IotaDocumentMetadata {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Returns a copy of the timestamp of when the DID document was created.
* @returns {Timestamp | undefined}
*/
  created(): Timestamp | undefined;
/**
* Returns a copy of the timestamp of the last DID document update.
* @returns {Timestamp | undefined}
*/
  updated(): Timestamp | undefined;
/**
* Returns a copy of the deactivated status of the DID document.
* @returns {boolean | undefined}
*/
  deactivated(): boolean | undefined;
/**
* Returns a copy of the Bech32-encoded state controller address, if present.
* @returns {string | undefined}
*/
  stateControllerAddress(): string | undefined;
/**
* Returns a copy of the Bech32-encoded governor address, if present.
* @returns {string | undefined}
*/
  governorAddress(): string | undefined;
/**
* Returns a copy of the custom metadata properties.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {IotaDocumentMetadata}
*/
  static fromJSON(json: any): IotaDocumentMetadata;
/**
* Deep clones the object.
* @returns {IotaDocumentMetadata}
*/
  clone(): IotaDocumentMetadata;
}
/**
* An extension interface that provides helper functions for publication
* and resolution of DID documents in Alias Outputs.
*/
export class IotaIdentityClientExt {
  free(): void;
/**
* Create a DID with a new Alias Output containing the given `document`.
*
* The `address` will be set as the state controller and governor unlock conditions.
* The minimum required token deposit amount will be set according to the given
* `rent_structure`, which will be fetched from the node if not provided.
* The returned Alias Output can be further customised before publication, if desired.
*
* NOTE: this does *not* publish the Alias Output.
* @param {IIotaIdentityClient} client
* @param {Address} address
* @param {IotaDocument} document
* @param {IRent | undefined} [rentStructure]
* @returns {Promise<AliasOutputBuilderParams>}
*/
  static newDidOutput(client: IIotaIdentityClient, address: Address, document: IotaDocument, rentStructure?: IRent): Promise<AliasOutputBuilderParams>;
/**
* Fetches the associated Alias Output and updates it with `document` in its state metadata.
* The storage deposit on the output is left unchanged. If the size of the document increased,
* the amount should be increased manually.
*
* NOTE: this does *not* publish the updated Alias Output.
* @param {IIotaIdentityClient} client
* @param {IotaDocument} document
* @returns {Promise<AliasOutputBuilderParams>}
*/
  static updateDidOutput(client: IIotaIdentityClient, document: IotaDocument): Promise<AliasOutputBuilderParams>;
/**
* Removes the DID document from the state metadata of its Alias Output,
* effectively deactivating it. The storage deposit on the output is left unchanged,
* and should be reallocated manually.
*
* Deactivating does not destroy the output. Hence, it can be re-activated by publishing
* an update containing a DID document.
*
* NOTE: this does *not* publish the updated Alias Output.
* @param {IIotaIdentityClient} client
* @param {IotaDID} did
* @returns {Promise<AliasOutputBuilderParams>}
*/
  static deactivateDidOutput(client: IIotaIdentityClient, did: IotaDID): Promise<AliasOutputBuilderParams>;
/**
* Resolve a {@link IotaDocument}. Returns an empty, deactivated document if the state metadata
* of the Alias Output is empty.
* @param {IIotaIdentityClient} client
* @param {IotaDID} did
* @returns {Promise<IotaDocument>}
*/
  static resolveDid(client: IIotaIdentityClient, did: IotaDID): Promise<IotaDocument>;
/**
* Fetches the `IAliasOutput` associated with the given DID.
* @param {IIotaIdentityClient} client
* @param {IotaDID} did
* @returns {Promise<AliasOutputBuilderParams>}
*/
  static resolveDidOutput(client: IIotaIdentityClient, did: IotaDID): Promise<AliasOutputBuilderParams>;
}
/**
*/
export class Jwk {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {IJwkParams} jwk
*/
  constructor(jwk: IJwkParams);
/**
* Returns the value for the key type parameter (kty).
* @returns {JwkType}
*/
  kty(): JwkType;
/**
* Returns the value for the use property (use).
* @returns {JwkUse | undefined}
*/
  use(): JwkUse | undefined;
/**
* @returns {Array<JwkOperation>}
*/
  keyOps(): Array<JwkOperation>;
/**
* Returns the value for the algorithm property (alg).
* @returns {JwsAlgorithm | undefined}
*/
  alg(): JwsAlgorithm | undefined;
/**
* Returns the value of the key ID property (kid).
* @returns {string | undefined}
*/
  kid(): string | undefined;
/**
* Returns the value of the X.509 URL property (x5u).
* @returns {string | undefined}
*/
  x5u(): string | undefined;
/**
* Returns the value of the X.509 certificate chain property (x5c).
* @returns {Array<string>}
*/
  x5c(): Array<string>;
/**
* Returns the value of the X.509 certificate SHA-1 thumbprint property (x5t).
* @returns {string | undefined}
*/
  x5t(): string | undefined;
/**
* Returns the value of the X.509 certificate SHA-256 thumbprint property (x5t#S256).
* @returns {string | undefined}
*/
  x5t256(): string | undefined;
/**
* If this JWK is of kty EC, returns those parameters.
* @returns {JwkParamsEc | undefined}
*/
  paramsEc(): JwkParamsEc | undefined;
/**
* If this JWK is of kty OKP, returns those parameters.
* @returns {JwkParamsOkp | undefined}
*/
  paramsOkp(): JwkParamsOkp | undefined;
/**
* If this JWK is of kty OCT, returns those parameters.
* @returns {JwkParamsOct | undefined}
*/
  paramsOct(): JwkParamsOct | undefined;
/**
* If this JWK is of kty RSA, returns those parameters.
* @returns {JwkParamsRsa | undefined}
*/
  paramsRsa(): JwkParamsRsa | undefined;
/**
* Returns a clone of the {@link Jwk} with _all_ private key components unset.
* Nothing is returned when `kty = oct` as this key type is not considered public by this library.
* @returns {Jwk | undefined}
*/
  toPublic(): Jwk | undefined;
/**
* Returns `true` if _all_ private key components of the key are unset, `false` otherwise.
* @returns {boolean}
*/
  isPublic(): boolean;
/**
* Returns `true` if _all_ private key components of the key are set, `false` otherwise.
* @returns {boolean}
*/
  isPrivate(): boolean;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Jwk}
*/
  static fromJSON(json: any): Jwk;
/**
* Deep clones the object.
* @returns {Jwk}
*/
  clone(): Jwk;
}
/**
* The result of a key generation in `JwkStorage`.
*/
export class JwkGenOutput {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {string} key_id
* @param {Jwk} jwk
*/
  constructor(key_id: string, jwk: Jwk);
/**
* Returns the generated public {@link Jwk}.
* @returns {Jwk}
*/
  jwk(): Jwk;
/**
* Returns the key id of the generated {@link Jwk}.
* @returns {string}
*/
  keyId(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwkGenOutput}
*/
  static fromJSON(json: any): JwkGenOutput;
/**
* Deep clones the object.
* @returns {JwkGenOutput}
*/
  clone(): JwkGenOutput;
}
/**
* A wrapper around a JSON Web Signature (JWS).
*/
export class Jws {
  free(): void;
/**
* Creates a new {@link Jws} from the given string.
* @param {string} jws_string
*/
  constructor(jws_string: string);
/**
* Returns a clone of the JWS string.
* @returns {string}
*/
  toString(): string;
}
/**
*/
export class JwsHeader {
  free(): void;
/**
* Create a new empty {@link JwsHeader}.
*/
  constructor();
/**
* Returns the value for the algorithm claim (alg).
* @returns {JwsAlgorithm | undefined}
*/
  alg(): JwsAlgorithm | undefined;
/**
* Sets a value for the algorithm claim (alg).
* @param {JwsAlgorithm} value
*/
  setAlg(value: JwsAlgorithm): void;
/**
* Returns the value of the base64url-encode payload claim (b64).
* @returns {boolean | undefined}
*/
  b64(): boolean | undefined;
/**
* Sets a value for the base64url-encode payload claim (b64).
* @param {boolean} value
*/
  setB64(value: boolean): void;
/**
* Additional header parameters.
* @returns {Record<string, any> | undefined}
*/
  custom(): Record<string, any> | undefined;
/**
* @param {string} claim
* @returns {boolean}
*/
  has(claim: string): boolean;
/**
* Returns `true` if none of the fields are set in both `self` and `other`.
* @param {JwsHeader} other
* @returns {boolean}
*/
  isDisjoint(other: JwsHeader): boolean;
/**
* Returns the value of the JWK Set URL claim (jku).
* @returns {string | undefined}
*/
  jku(): string | undefined;
/**
* Sets a value for the JWK Set URL claim (jku).
* @param {string} value
*/
  setJku(value: string): void;
/**
* Returns the value of the JWK claim (jwk).
* @returns {Jwk | undefined}
*/
  jwk(): Jwk | undefined;
/**
* Sets a value for the JWK claim (jwk).
* @param {Jwk} value
*/
  setJwk(value: Jwk): void;
/**
* Returns the value of the key ID claim (kid).
* @returns {string | undefined}
*/
  kid(): string | undefined;
/**
* Sets a value for the key ID claim (kid).
* @param {string} value
*/
  setKid(value: string): void;
/**
* Returns the value of the X.509 URL claim (x5u).
* @returns {string | undefined}
*/
  x5u(): string | undefined;
/**
* Sets a value for the X.509 URL claim (x5u).
* @param {string} value
*/
  setX5u(value: string): void;
/**
* Returns the value of the X.509 certificate chain claim (x5c).
* @returns {Array<string>}
*/
  x5c(): Array<string>;
/**
* Sets values for the X.509 certificate chain claim (x5c).
* @param {Array<string>} value
*/
  setX5c(value: Array<string>): void;
/**
* Returns the value of the X.509 certificate SHA-1 thumbprint claim (x5t).
* @returns {string | undefined}
*/
  x5t(): string | undefined;
/**
* Sets a value for the X.509 certificate SHA-1 thumbprint claim (x5t).
* @param {string} value
*/
  setX5t(value: string): void;
/**
* Returns the value of the X.509 certificate SHA-256 thumbprint claim
* (x5t#S256).
* @returns {string | undefined}
*/
  x5tS256(): string | undefined;
/**
* Sets a value for the X.509 certificate SHA-256 thumbprint claim
* (x5t#S256).
* @param {string} value
*/
  setX5tS256(value: string): void;
/**
* Returns the value of the token type claim (typ).
* @returns {string | undefined}
*/
  typ(): string | undefined;
/**
* Sets a value for the token type claim (typ).
* @param {string} value
*/
  setTyp(value: string): void;
/**
* Returns the value of the content type claim (cty).
* @returns {string | undefined}
*/
  cty(): string | undefined;
/**
* Sets a value for the content type claim (cty).
* @param {string} value
*/
  setCty(value: string): void;
/**
* Returns the value of the critical claim (crit).
* @returns {Array<string>}
*/
  crit(): Array<string>;
/**
* Sets values for the critical claim (crit).
* @param {Array<string>} value
*/
  setCrit(value: Array<string>): void;
/**
* Returns the value of the url claim (url).
* @returns {string | undefined}
*/
  url(): string | undefined;
/**
* Sets a value for the url claim (url).
* @param {string} value
*/
  setUrl(value: string): void;
/**
* Returns the value of the nonce claim (nonce).
* @returns {string | undefined}
*/
  nonce(): string | undefined;
/**
* Sets a value for the nonce claim (nonce).
* @param {string} value
*/
  setNonce(value: string): void;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwsHeader}
*/
  static fromJSON(json: any): JwsHeader;
/**
* Deep clones the object.
* @returns {JwsHeader}
*/
  clone(): JwsHeader;
}
/**
*/
export class JwsSignatureOptions {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {IJwsSignatureOptions | undefined} [options]
*/
  constructor(options?: IJwsSignatureOptions);
/**
* Replace the value of the `attachJwk` field.
* @param {boolean} value
*/
  setAttachJwk(value: boolean): void;
/**
* Replace the value of the `b64` field.
* @param {boolean} value
*/
  setB64(value: boolean): void;
/**
* Replace the value of the `typ` field.
* @param {string} value
*/
  setTyp(value: string): void;
/**
* Replace the value of the `cty` field.
* @param {string} value
*/
  setCty(value: string): void;
/**
* Replace the value of the `url` field.
* @param {string} value
*/
  serUrl(value: string): void;
/**
* Replace the value of the `nonce` field.
* @param {string} value
*/
  setNonce(value: string): void;
/**
* Replace the value of the `kid` field.
* @param {string} value
*/
  setKid(value: string): void;
/**
* Replace the value of the `detached_payload` field.
* @param {boolean} value
*/
  setDetachedPayload(value: boolean): void;
/**
* Add additional header parameters.
* @param {Record<string, any>} value
*/
  setCustomHeaderParameters(value: Record<string, any>): void;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwsSignatureOptions}
*/
  static fromJSON(json: any): JwsSignatureOptions;
/**
* Deep clones the object.
* @returns {JwsSignatureOptions}
*/
  clone(): JwsSignatureOptions;
}
/**
*/
export class JwsVerificationOptions {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link JwsVerificationOptions} from the given fields.
* @param {IJwsVerificationOptions | undefined} [options]
*/
  constructor(options?: IJwsVerificationOptions);
/**
* Set the expected value for the `nonce` parameter of the protected header.
* @param {string} value
*/
  setNonce(value: string): void;
/**
* Set the scope of the verification methods that may be used to verify the given JWS.
* @param {MethodScope} value
*/
  setMethodScope(value: MethodScope): void;
/**
* Set the DID URl of the method, whose JWK should be used to verify the JWS.
* @param {DIDUrl} value
*/
  setMethodId(value: DIDUrl): void;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwsVerificationOptions}
*/
  static fromJSON(json: any): JwsVerificationOptions;
/**
* Deep clones the object.
* @returns {JwsVerificationOptions}
*/
  clone(): JwsVerificationOptions;
}
/**
* A wrapper around a JSON Web Token (JWK).
*/
export class Jwt {
  free(): void;
/**
* Creates a new {@link Jwt} from the given string.
* @param {string} jwt_string
*/
  constructor(jwt_string: string);
/**
* Returns a clone of the JWT string.
* @returns {string}
*/
  toString(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Jwt}
*/
  static fromJSON(json: any): Jwt;
/**
* Deep clones the object.
* @returns {Jwt}
*/
  clone(): Jwt;
}
/**
* Options to declare validation criteria when validating credentials.
*/
export class JwtCredentialValidationOptions {
  free(): void;
/**
* @param {IJwtCredentialValidationOptions | undefined} [options]
*/
  constructor(options?: IJwtCredentialValidationOptions);
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwtCredentialValidationOptions}
*/
  static fromJSON(json: any): JwtCredentialValidationOptions;
/**
* Deep clones the object.
* @returns {JwtCredentialValidationOptions}
*/
  clone(): JwtCredentialValidationOptions;
}
/**
* A type for decoding and validating {@link Credential}.
*/
export class JwtCredentialValidator {
  free(): void;
/**
* Creates a new {@link JwtCredentialValidator}. If a `signatureVerifier` is provided it will be used when
* verifying decoded JWS signatures, otherwise the default which is only capable of handling the `EdDSA`
* algorithm will be used.
* @param {IJwsVerifier} signatureVerifier
*/
  constructor(signatureVerifier: IJwsVerifier);
/**
* Decodes and validates a {@link Credential} issued as a JWS. A {@link DecodedJwtCredential} is returned upon
* success.
*
* The following properties are validated according to `options`:
* - the issuer's signature on the JWS,
* - the expiration date,
* - the issuance date,
* - the semantic structure.
*
* # Warning
* The lack of an error returned from this method is in of itself not enough to conclude that the credential can be
* trusted. This section contains more information on additional checks that should be carried out before and after
* calling this method.
*
* ## The state of the issuer's DID Document
* The caller must ensure that `issuer` represents an up-to-date DID Document.
*
* ## Properties that are not validated
*  There are many properties defined in [The Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/) that are **not** validated, such as:
* `proof`, `credentialStatus`, `type`, `credentialSchema`, `refreshService` **and more**.
* These should be manually checked after validation, according to your requirements.
*
* # Errors
* An error is returned whenever a validated condition is not satisfied.
* @param {Jwt} credential_jwt
* @param {CoreDocument | IToCoreDocument} issuer
* @param {JwtCredentialValidationOptions} options
* @param {FailFast} fail_fast
* @returns {DecodedJwtCredential}
*/
  validate(credential_jwt: Jwt, issuer: CoreDocument | IToCoreDocument, options: JwtCredentialValidationOptions, fail_fast: FailFast): DecodedJwtCredential;
/**
* Decode and verify the JWS signature of a {@link Credential} issued as a JWT using the DID Document of a trusted
* issuer.
*
* A {@link DecodedJwtCredential} is returned upon success.
*
* # Warning
* The caller must ensure that the DID Documents of the trusted issuers are up-to-date.
*
* ## Proofs
*  Only the JWS signature is verified. If the {@link Credential} contains a `proof` property this will not be
* verified by this method.
*
* # Errors
* This method immediately returns an error if
* the credential issuer' url cannot be parsed to a DID belonging to one of the trusted issuers. Otherwise an attempt
* to verify the credential's signature will be made and an error is returned upon failure.
* @param {Jwt} credential
* @param {Array<CoreDocument | IToCoreDocument>} trustedIssuers
* @param {JwsVerificationOptions} options
* @returns {DecodedJwtCredential}
*/
  verifySignature(credential: Jwt, trustedIssuers: Array<CoreDocument | IToCoreDocument>, options: JwsVerificationOptions): DecodedJwtCredential;
/**
* Validate that the credential expires on or after the specified timestamp.
* @param {Credential} credential
* @param {Timestamp} timestamp
*/
  static checkExpiresOnOrAfter(credential: Credential, timestamp: Timestamp): void;
/**
* Validate that the credential is issued on or before the specified timestamp.
* @param {Credential} credential
* @param {Timestamp} timestamp
*/
  static checkIssuedOnOrBefore(credential: Credential, timestamp: Timestamp): void;
/**
* Validate that the relationship between the `holder` and the credential subjects is in accordance with
* `relationship`. The `holder` parameter is expected to be the URL of the holder.
* @param {Credential} credential
* @param {string} holder
* @param {SubjectHolderRelationship} relationship
*/
  static checkSubjectHolderRelationship(credential: Credential, holder: string, relationship: SubjectHolderRelationship): void;
/**
* Checks whether the credential status has been revoked.
*
* Only supports `RevocationBitmap2022`.
* @param {Credential} credential
* @param {Array<CoreDocument | IToCoreDocument>} trustedIssuers
* @param {StatusCheck} statusCheck
*/
  static checkStatus(credential: Credential, trustedIssuers: Array<CoreDocument | IToCoreDocument>, statusCheck: StatusCheck): void;
/**
* Checks wheter the credential status has been revoked using `StatusList2021`.
* @param {Credential} credential
* @param {StatusList2021Credential} status_list
* @param {StatusCheck} status_check
*/
  static checkStatusWithStatusList2021(credential: Credential, status_list: StatusList2021Credential, status_check: StatusCheck): void;
/**
* Utility for extracting the issuer field of a {@link Credential} as a DID.
*
* ### Errors
*
* Fails if the issuer field is not a valid DID.
* @param {Credential} credential
* @returns {CoreDID}
*/
  static extractIssuer(credential: Credential): CoreDID;
/**
* Utility for extracting the issuer field of a credential in JWT representation as DID.
*
* # Errors
*
* If the JWT decoding fails or the issuer field is not a valid DID.
* @param {Jwt} credential
* @returns {CoreDID}
*/
  static extractIssuerFromJwt(credential: Jwt): CoreDID;
}
/**
* A validator for a Domain Linkage Configuration and Credentials.
*/
export class JwtDomainLinkageValidator {
  free(): void;
/**
* Creates a new {@link JwtDomainLinkageValidator}. If a `signatureVerifier` is provided it will be used when
* verifying decoded JWS signatures, otherwise the default which is only capable of handling the `EdDSA`
* algorithm will be used.
* @param {IJwsVerifier} signatureVerifier
*/
  constructor(signatureVerifier: IJwsVerifier);
/**
* Validates the linkage between a domain and a DID.
* {@link DomainLinkageConfiguration} is validated according to [DID Configuration Resource Verification](https://identity.foundation/.well-known/resources/did-configuration/#did-configuration-resource-verification).
*
* Linkage is valid if no error is thrown.
*
* # Note:
* - Only the [JSON Web Token Proof Format](https://identity.foundation/.well-known/resources/did-configuration/#json-web-token-proof-format)
*   is supported.
* - Only the Credential issued by `issuer` is verified.
*
* # Errors
*
*  - Semantic structure of `configuration` is invalid.
*  - `configuration` includes multiple credentials issued by `issuer`.
*  - Validation of the matched Domain Linkage Credential fails.
* @param {CoreDocument | IToCoreDocument} issuer
* @param {DomainLinkageConfiguration} configuration
* @param {string} domain
* @param {JwtCredentialValidationOptions} options
*/
  validateLinkage(issuer: CoreDocument | IToCoreDocument, configuration: DomainLinkageConfiguration, domain: string, options: JwtCredentialValidationOptions): void;
/**
* Validates a [Domain Linkage Credential](https://identity.foundation/.well-known/resources/did-configuration/#domain-linkage-credential).
*
* Error will be thrown in case the validation fails.
* @param {CoreDocument | IToCoreDocument} issuer
* @param {Jwt} credentialJwt
* @param {string} domain
* @param {JwtCredentialValidationOptions} options
*/
  validateCredential(issuer: CoreDocument | IToCoreDocument, credentialJwt: Jwt, domain: string, options: JwtCredentialValidationOptions): void;
}
/**
*/
export class JwtPresentationOptions {
  free(): void;
/**
* Creates a new {@link JwtPresentationOptions} from the given fields.
*
* Throws an error if any of the options are invalid.
* @param {IJwtPresentationOptions | undefined} [options]
*/
  constructor(options?: IJwtPresentationOptions);
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwtPresentationOptions}
*/
  static fromJSON(json: any): JwtPresentationOptions;
/**
* Deep clones the object.
* @returns {JwtPresentationOptions}
*/
  clone(): JwtPresentationOptions;
}
/**
* Options to declare validation criteria when validating presentation.
*/
export class JwtPresentationValidationOptions {
  free(): void;
/**
* Creates a new {@link JwtPresentationValidationOptions} from the given fields.
*
* Throws an error if any of the options are invalid.
* @param {IJwtPresentationValidationOptions | undefined} [options]
*/
  constructor(options?: IJwtPresentationValidationOptions);
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {JwtPresentationValidationOptions}
*/
  static fromJSON(json: any): JwtPresentationValidationOptions;
/**
* Deep clones the object.
* @returns {JwtPresentationValidationOptions}
*/
  clone(): JwtPresentationValidationOptions;
}
/**
*/
export class JwtPresentationValidator {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link JwtPresentationValidator}. If a `signatureVerifier` is provided it will be used when
* verifying decoded JWS signatures, otherwise the default which is only capable of handling the `EdDSA`
* algorithm will be used.
* @param {IJwsVerifier} signatureVerifier
*/
  constructor(signatureVerifier: IJwsVerifier);
/**
* Validates a {@link Presentation} encoded as a {@link Jwt}.
*
* The following properties are validated according to `options`:
* - the JWT can be decoded into a semantically valid presentation.
* - the expiration and issuance date contained in the JWT claims.
* - the holder's signature.
*
* Validation is done with respect to the properties set in `options`.
*
* # Warning
*
* * This method does NOT validate the constituent credentials and therefore also not the relationship between the
* credentials' subjects and the presentation holder. This can be done with {@link JwtCredentialValidationOptions}.
* * The lack of an error returned from this method is in of itself not enough to conclude that the presentation can
* be trusted. This section contains more information on additional checks that should be carried out before and
* after calling this method.
*
* ## The state of the supplied DID Documents.
*
* The caller must ensure that the DID Documents in `holder` are up-to-date.
*
* # Errors
*
* An error is returned whenever a validated condition is not satisfied or when decoding fails.
* @param {Jwt} presentationJwt
* @param {CoreDocument | IToCoreDocument} holder
* @param {JwtPresentationValidationOptions} validation_options
* @returns {DecodedJwtPresentation}
*/
  validate(presentationJwt: Jwt, holder: CoreDocument | IToCoreDocument, validation_options: JwtPresentationValidationOptions): DecodedJwtPresentation;
/**
* Validates the semantic structure of the {@link Presentation}.
* @param {Presentation} presentation
*/
  static checkStructure(presentation: Presentation): void;
/**
* Attempt to extract the holder of the presentation.
*
* # Errors:
* * If deserialization/decoding of the presentation fails.
* * If the holder can't be parsed as DIDs.
* @param {Jwt} presentation
* @returns {CoreDID}
*/
  static extractHolder(presentation: Jwt): CoreDID;
}
/**
* Options to declare validation criteria when validating credentials.
*/
export class KeyBindingJWTValidationOptions {
  free(): void;
/**
* @param {IKeyBindingJWTValidationOptions | undefined} [options]
*/
  constructor(options?: IKeyBindingJWTValidationOptions);
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {KeyBindingJWTValidationOptions}
*/
  static fromJSON(json: any): KeyBindingJWTValidationOptions;
/**
* Deep clones the object.
* @returns {KeyBindingJWTValidationOptions}
*/
  clone(): KeyBindingJWTValidationOptions;
}
/**
* Claims set for key binding JWT.
*/
export class KeyBindingJwtClaims {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new [`KeyBindingJwtClaims`].
* When `issued_at` is left as None, it will automatically default to the current time.
*
* # Error
* When `issued_at` is set to `None` and the system returns time earlier than `SystemTime::UNIX_EPOCH`.
* @param {string} jwt
* @param {Array<string>} disclosures
* @param {string} nonce
* @param {string} aud
* @param {Timestamp | undefined} [issued_at]
* @param {Record<string, any> | undefined} [custom_properties]
*/
  constructor(jwt: string, disclosures: Array<string>, nonce: string, aud: string, issued_at?: Timestamp, custom_properties?: Record<string, any>);
/**
* Returns a string representation of the claims.
* @returns {string}
*/
  toString(): string;
/**
* Returns a copy of the issued at `iat` property.
* @returns {bigint}
*/
  iat(): bigint;
/**
* Returns a copy of the audience `aud` property.
* @returns {string}
*/
  aud(): string;
/**
* Returns a copy of the `nonce` property.
* @returns {string}
*/
  nonce(): string;
/**
* Returns a copy of the `sd_hash` property.
* @returns {string}
*/
  sdHash(): string;
/**
* Returns a copy of the custom properties.
* @returns {Record<string, any>}
*/
  customProperties(): Record<string, any>;
/**
* Returns the value of the `typ` property of the JWT header according to
* https://www.ietf.org/archive/id/draft-ietf-oauth-selective-disclosure-jwt-07.html#name-key-binding-jwt
* @returns {string}
*/
  static keyBindingJwtHeaderTyp(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {KeyBindingJwtClaims}
*/
  static fromJSON(json: any): KeyBindingJwtClaims;
/**
* Deep clones the object.
* @returns {KeyBindingJwtClaims}
*/
  clone(): KeyBindingJwtClaims;
}
/**
*/
export class LinkedDomainService {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Constructs a new {@link LinkedDomainService} that wraps a spec compliant [Linked Domain Service Endpoint](https://identity.foundation/.well-known/resources/did-configuration/#linked-domain-service-endpoint).
*
* Domain URLs must include the `https` scheme in order to pass the domain linkage validation.
* @param {ILinkedDomainService} options
*/
  constructor(options: ILinkedDomainService);
/**
* Returns the domains contained in the Linked Domain Service.
* @returns {Array<string>}
*/
  domains(): Array<string>;
/**
* Returns the inner service which can be added to a DID Document.
* @returns {Service}
*/
  toService(): Service;
/**
* Creates a new {@link LinkedDomainService} from a {@link Service}.
*
* # Error
*
* Errors if `service` is not a valid Linked Domain Service.
* @param {Service} service
* @returns {LinkedDomainService}
*/
  static fromService(service: Service): LinkedDomainService;
/**
* Returns `true` if a {@link Service} is a valid Linked Domain Service.
* @param {Service} service
* @returns {boolean}
*/
  static isValid(service: Service): boolean;
/**
* Deep clones the object.
* @returns {LinkedDomainService}
*/
  clone(): LinkedDomainService;
}
/**
* Supported verification method data formats.
*/
export class MethodData {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link MethodData} variant with Base58-BTC encoded content.
* @param {Uint8Array} data
* @returns {MethodData}
*/
  static newBase58(data: Uint8Array): MethodData;
/**
* Creates a new {@link MethodData} variant with Multibase-encoded content.
* @param {Uint8Array} data
* @returns {MethodData}
*/
  static newMultibase(data: Uint8Array): MethodData;
/**
* Creates a new {@link MethodData} variant consisting of the given `key`.
*
* ### Errors
* An error is thrown if the given `key` contains any private components.
* @param {Jwk} key
* @returns {MethodData}
*/
  static newJwk(key: Jwk): MethodData;
/**
* Returns a `Uint8Array` containing the decoded bytes of the {@link MethodData}.
*
* This is generally a public key identified by a {@link MethodData} value.
*
* ### Errors
* Decoding can fail if {@link MethodData} has invalid content or cannot be
* represented as a vector of bytes.
* @returns {Uint8Array}
*/
  tryDecode(): Uint8Array;
/**
* Returns the wrapped {@link Jwk} if the format is `PublicKeyJwk`.
* @returns {Jwk}
*/
  tryPublicKeyJwk(): Jwk;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {MethodData}
*/
  static fromJSON(json: any): MethodData;
/**
* Deep clones the object.
* @returns {MethodData}
*/
  clone(): MethodData;
}
/**
* Unique identifier of a {@link VerificationMethod}.
*
* NOTE:
* This class does not have a JSON representation,
* use the methods `pack` and `unpack` instead.
*/
export class MethodDigest {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {VerificationMethod} verification_method
*/
  constructor(verification_method: VerificationMethod);
/**
* Packs {@link MethodDigest} into bytes.
* @returns {Uint8Array}
*/
  pack(): Uint8Array;
/**
* Unpacks bytes into {@link MethodDigest}.
* @param {Uint8Array} bytes
* @returns {MethodDigest}
*/
  static unpack(bytes: Uint8Array): MethodDigest;
/**
* Deep clones the object.
* @returns {MethodDigest}
*/
  clone(): MethodDigest;
}
/**
* Supported verification method types.
*/
export class MethodScope {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {MethodScope}
*/
  static VerificationMethod(): MethodScope;
/**
* @returns {MethodScope}
*/
  static Authentication(): MethodScope;
/**
* @returns {MethodScope}
*/
  static AssertionMethod(): MethodScope;
/**
* @returns {MethodScope}
*/
  static KeyAgreement(): MethodScope;
/**
* @returns {MethodScope}
*/
  static CapabilityDelegation(): MethodScope;
/**
* @returns {MethodScope}
*/
  static CapabilityInvocation(): MethodScope;
/**
* Returns the {@link MethodScope} as a string.
* @returns {string}
*/
  toString(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {MethodScope}
*/
  static fromJSON(json: any): MethodScope;
/**
* Deep clones the object.
* @returns {MethodScope}
*/
  clone(): MethodScope;
}
/**
* Supported verification method types.
*/
export class MethodType {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {MethodType}
*/
  static Ed25519VerificationKey2018(): MethodType;
/**
* @returns {MethodType}
*/
  static X25519KeyAgreementKey2019(): MethodType;
/**
* A verification method for use with JWT verification as prescribed by the {@link Jwk}
* in the `publicKeyJwk` entry.
* @returns {MethodType}
*/
  static JsonWebKey(): MethodType;
/**
* Returns the {@link MethodType} as a string.
* @returns {string}
*/
  toString(): string;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {MethodType}
*/
  static fromJSON(json: any): MethodType;
/**
* Deep clones the object.
* @returns {MethodType}
*/
  clone(): MethodType;
}
/**
*/
export class Presentation {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Returns the base JSON-LD context.
* @returns {string}
*/
  static BaseContext(): string;
/**
* Returns the base type.
* @returns {string}
*/
  static BaseType(): string;
/**
* Constructs a new presentation.
* @param {IPresentation} values
*/
  constructor(values: IPresentation);
/**
* Returns a copy of the JSON-LD context(s) applicable to the presentation.
* @returns {Array<string | Record<string, any>>}
*/
  context(): Array<string | Record<string, any>>;
/**
* Returns a copy of the unique `URI` identifying the presentation.
* @returns {string | undefined}
*/
  id(): string | undefined;
/**
* Returns a copy of the URIs defining the type of the presentation.
* @returns {Array<string>}
*/
  type(): Array<string>;
/**
* Returns the JWT credentials expressing the claims of the presentation.
* @returns {Array<UnknownCredential>}
*/
  verifiableCredential(): Array<UnknownCredential>;
/**
* Returns a copy of the URI of the entity that generated the presentation.
* @returns {string}
*/
  holder(): string;
/**
* Returns a copy of the service(s) used to refresh an expired {@link Credential} in the presentation.
* @returns {Array<RefreshService>}
*/
  refreshService(): Array<RefreshService>;
/**
* Returns a copy of the terms-of-use specified by the presentation holder
* @returns {Array<Policy>}
*/
  termsOfUse(): Array<Policy>;
/**
* Optional cryptographic proof, unrelated to JWT.
* @returns {Proof | undefined}
*/
  proof(): Proof | undefined;
/**
* Sets the proof property of the {@link Presentation}.
*
* Note that this proof is not related to JWT.
* @param {Proof | undefined} [proof]
*/
  setProof(proof?: Proof): void;
/**
* Returns a copy of the miscellaneous properties on the presentation.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Presentation}
*/
  static fromJSON(json: any): Presentation;
/**
* Deep clones the object.
* @returns {Presentation}
*/
  clone(): Presentation;
}
/**
* Represents a cryptographic proof that can be used to validate verifiable credentials and
* presentations.
*
* This representation does not inherently implement any standard; instead, it
* can be utilized to implement standards or user-defined proofs. The presence of the
* `type` field is necessary to accommodate different types of cryptographic proofs.
*
* Note that this proof is not related to JWT and can be used in combination or as an alternative
* to it.
*/
export class Proof {
  free(): void;
/**
* @param {string} type_
* @param {any} properties
*/
  constructor(type_: string, properties: any);
/**
* Returns the type of proof.
* @returns {string}
*/
  type(): string;
/**
* Returns the properties of the proof.
* @returns {any}
*/
  properties(): any;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Proof}
*/
  static fromJSON(json: any): Proof;
/**
* Deep clones the object.
* @returns {Proof}
*/
  clone(): Proof;
}
/**
* Convenience type for resolving DID documents from different DID methods.   
*  
* Also provides methods for resolving DID Documents associated with
* verifiable {@link Credential}s and {@link Presentation}s.
*
* # Configuration
*
* The resolver will only be able to resolve DID documents for methods it has been configured for in the constructor.
*/
export class Resolver {
  free(): void;
/**
* Constructs a new {@link Resolver}.
*
* # Errors
* If both a `client` is given and the `handlers` map contains the "iota" key the construction process
* will throw an error because the handler for the "iota" method then becomes ambiguous.
* @param {ResolverConfig} config
*/
  constructor(config: ResolverConfig);
/**
* Fetches the DID Document of the given DID.
*
* ### Errors
*
* Errors if the resolver has not been configured to handle the method
* corresponding to the given DID or the resolution process itself fails.
* @param {string} did
* @returns {Promise<CoreDocument | IToCoreDocument>}
*/
  resolve(did: string): Promise<CoreDocument | IToCoreDocument>;
/**
* Concurrently fetches the DID Documents of the multiple given DIDs.
*
* # Errors
* * If the resolver has not been configured to handle the method of any of the given DIDs.
* * If the resolution process of any DID fails.
*
* ## Note
* * The order of the documents in the returned array matches that in `dids`.
* * If `dids` contains duplicates, these will be resolved only once and the resolved document
* is copied into the returned array to match the order of `dids`.
* @param {Array<string>} dids
* @returns {Promise<Array<CoreDocument | IToCoreDocument>>}
*/
  resolveMultiple(dids: Array<string>): Promise<Array<CoreDocument | IToCoreDocument>>;
}
/**
* A compressed bitmap for managing credential revocation.
*/
export class RevocationBitmap {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link RevocationBitmap} instance.
*/
  constructor();
/**
* The name of the service type.
* @returns {string}
*/
  static type(): string;
/**
* Returns `true` if the credential at the given `index` is revoked.
* @param {number} index
* @returns {boolean}
*/
  isRevoked(index: number): boolean;
/**
* Mark the given index as revoked.
*
* Returns true if the index was absent from the set.
* @param {number} index
* @returns {boolean}
*/
  revoke(index: number): boolean;
/**
* Mark the index as not revoked.
*
* Returns true if the index was present in the set.
* @param {number} index
* @returns {boolean}
*/
  unrevoke(index: number): boolean;
/**
* Returns the number of revoked credentials.
* @returns {number}
*/
  len(): number;
/**
* Return a `Service` with:
* - the service's id set to `serviceId`,
* - of type `RevocationBitmap2022`,
* - and with the bitmap embedded in a data url in the service's endpoint.
* @param {DIDUrl} serviceId
* @returns {Service}
*/
  toService(serviceId: DIDUrl): Service;
/**
* Try to construct a {@link RevocationBitmap} from a service
* if it is a valid Revocation Bitmap Service.
* @param {Service} service
* @returns {RevocationBitmap}
*/
  static fromEndpoint(service: Service): RevocationBitmap;
}
/**
* Representation of an SD-JWT of the format
* `<Issuer-signed JWT>~<Disclosure 1>~<Disclosure 2>~...~<Disclosure N>~<optional KB-JWT>`.
*/
export class SdJwt {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new `SdJwt` from its components.
* @param {string} jwt
* @param {Array<string>} disclosures
* @param {string | undefined} [key_binding_jwt]
*/
  constructor(jwt: string, disclosures: Array<string>, key_binding_jwt?: string);
/**
* Serializes the components into the final SD-JWT.
* @returns {string}
*/
  presentation(): string;
/**
* Parses an SD-JWT into its components as [`SdJwt`].
*
* ## Error
* Returns `DeserializationError` if parsing fails.
* @param {string} sd_jwt
* @returns {SdJwt}
*/
  static parse(sd_jwt: string): SdJwt;
/**
* Serializes the components into the final SD-JWT.
* @returns {string}
*/
  toString(): string;
/**
* The JWT part.
* @returns {string}
*/
  jwt(): string;
/**
* The disclosures part.
* @returns {Array<string>}
*/
  disclosures(): Array<string>;
/**
* The optional key binding JWT.
* @returns {string | undefined}
*/
  keyBindingJwt(): string | undefined;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {SdJwt}
*/
  static fromJSON(json: any): SdJwt;
/**
* Deep clones the object.
* @returns {SdJwt}
*/
  clone(): SdJwt;
}
/**
* A type for decoding and validating {@link Credential}.
*/
export class SdJwtCredentialValidator {
  free(): void;
/**
* Creates a new `SdJwtCredentialValidator`. If a `signatureVerifier` is provided it will be used when
* verifying decoded JWS signatures, otherwise the default which is only capable of handling the `EdDSA`
* algorithm will be used.
* @param {IJwsVerifier} signatureVerifier
*/
  constructor(signatureVerifier: IJwsVerifier);
/**
* Decodes and validates a `Credential` issued as an SD-JWT. A `DecodedJwtCredential` is returned upon success.
* The credential is constructed by replacing disclosures following the
* [`Selective Disclosure for JWTs (SD-JWT)`](https://www.ietf.org/archive/id/draft-ietf-oauth-selective-disclosure-jwt-07.html) standard.
*
* The following properties are validated according to `options`:
* - the issuer's signature on the JWS,
* - the expiration date,
* - the issuance date,
* - the semantic structure.
*
* # Warning
* * The key binding JWT is not validated. If needed, it must be validated separately using
* `SdJwtValidator::validate_key_binding_jwt`.
* * The lack of an error returned from this method is in of itself not enough to conclude that the credential can be
* trusted. This section contains more information on additional checks that should be carried out before and after
* calling this method.
*
* ## The state of the issuer's DID Document
* The caller must ensure that `issuer` represents an up-to-date DID Document.
*
* ## Properties that are not validated
*  There are many properties defined in [The Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/) that are **not** validated, such as:
* `proof`, `credentialStatus`, `type`, `credentialSchema`, `refreshService` **and more**.
* These should be manually checked after validation, according to your requirements.
*
* # Errors
* An error is returned whenever a validated condition is not satisfied.
* @param {SdJwt} sd_jwt
* @param {CoreDocument | IToCoreDocument} issuer
* @param {JwtCredentialValidationOptions} options
* @param {FailFast} fail_fast
* @returns {DecodedJwtCredential}
*/
  validateCredential(sd_jwt: SdJwt, issuer: CoreDocument | IToCoreDocument, options: JwtCredentialValidationOptions, fail_fast: FailFast): DecodedJwtCredential;
/**
* Decode and verify the JWS signature of a `Credential` issued as an SD-JWT using the DID Document of a trusted
* issuer and replaces the disclosures.
*
* A `DecodedJwtCredential` is returned upon success.
*
* # Warning
* The caller must ensure that the DID Documents of the trusted issuers are up-to-date.
*
* ## Proofs
*  Only the JWS signature is verified. If the `Credential` contains a `proof` property this will not be verified
* by this method.
*
* # Errors
* * If the issuer' URL cannot be parsed.
* * If Signature verification fails.
* * If SD decoding fails.
* @param {SdJwt} credential
* @param {Array<CoreDocument | IToCoreDocument>} trustedIssuers
* @param {JwsVerificationOptions} options
* @returns {DecodedJwtCredential}
*/
  verifySignature(credential: SdJwt, trustedIssuers: Array<CoreDocument | IToCoreDocument>, options: JwsVerificationOptions): DecodedJwtCredential;
/**
* Validates a Key Binding JWT (KB-JWT) according to `https://www.ietf.org/archive/id/draft-ietf-oauth-selective-disclosure-jwt-07.html#name-key-binding-jwt`.
* The Validation process includes:
*   * Signature validation using public key materials defined in the `holder` document.
*   * `typ` value in KB-JWT header.
*   * `sd_hash` claim value in the KB-JWT claim.
*   * Optional `nonce`, `aud` and issuance date validation.
* @param {SdJwt} sdJwt
* @param {CoreDocument | IToCoreDocument} holder
* @param {KeyBindingJWTValidationOptions} options
* @returns {KeyBindingJwtClaims}
*/
  validateKeyBindingJwt(sdJwt: SdJwt, holder: CoreDocument | IToCoreDocument, options: KeyBindingJWTValidationOptions): KeyBindingJwtClaims;
}
/**
* Substitutes digests in an SD-JWT object by their corresponding plaintext values provided by disclosures.
*/
export class SdObjectDecoder {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new `SdObjectDecoder` with `sha-256` hasher.
*/
  constructor();
/**
* Decodes an SD-JWT `object` containing by Substituting the digests with their corresponding
* plaintext values provided by `disclosures`.
*
* ## Notes
* * Claims like `exp` or `iat` are not validated in the process of decoding.
* * `_sd_alg` property will be removed if present.
* @param {Record<string, any>} object
* @param {Array<string>} disclosures
* @returns {Record<string, any>}
*/
  decode(object: Record<string, any>, disclosures: Array<string>): Record<string, any>;
}
/**
* Transforms a JSON object into an SD-JWT object by substituting selected values
* with their corresponding disclosure digests.
*
* Note: digests are created using the sha-256 algorithm.
*/
export class SdObjectEncoder {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new `SdObjectEncoder` with `sha-256` hash function.
* @param {any} object
*/
  constructor(object: any);
/**
* Substitutes a value with the digest of its disclosure.
* If no salt is provided, the disclosure will be created with a random salt value.
*
* `path` indicates the pointer to the value that will be concealed using the syntax of
* [JSON pointer](https://datatracker.ietf.org/doc/html/rfc6901).
*
* For the following object:
*
*  ```
* {
*   "id": "did:value",
*   "claim1": {
*      "abc": true
*   },
*   "claim2": ["val_1", "val_2"]
* }
* ```
* 
* Path "/id" conceals `"id": "did:value"`
* Path "/claim1/abc" conceals `"abc": true`
* Path "/claim2/0" conceals `val_1`
* ```
*
* ## Errors
* * `InvalidPath` if pointer is invalid.
* * `DataTypeMismatch` if existing SD format is invalid.
* @param {string} path
* @param {string | undefined} [salt]
* @returns {Disclosure}
*/
  conceal(path: string, salt?: string): Disclosure;
/**
* Adds the `_sd_alg` property to the top level of the object, with
* its value set to "sha-256".
*/
  addSdAlgProperty(): void;
/**
* Returns the modified object as a string.
* @returns {string}
*/
  encodeToString(): string;
/**
* Returns the modified object as a string.
* @returns {string}
*/
  toString(): string;
/**
* Returns the modified object.
* @returns {Record<string, any>}
*/
  encodeToObject(): Record<string, any>;
/**
* Returns the modified object.
* @returns {any}
*/
  toJSON(): any;
/**
* Adds a decoy digest to the specified path.
* If path is an empty slice, decoys will be added to the top level.
* @param {string} path
* @param {number} number_of_decoys
*/
  addDecoys(path: string, number_of_decoys: number): void;
}
/**
* A DID Document Service used to enable trusted interactions associated with a DID subject.
*/
export class Service {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @param {IService} service
*/
  constructor(service: IService);
/**
* Returns a copy of the {@link Service} id.
* @returns {DIDUrl}
*/
  id(): DIDUrl;
/**
* Returns a copy of the {@link Service} type.
* @returns {Array<string>}
*/
  type(): Array<string>;
/**
* Returns a copy of the {@link Service} endpoint.
* @returns {string | string[] | Map<string, string[]>}
*/
  serviceEndpoint(): string | string[] | Map<string, string[]>;
/**
* Returns a copy of the custom properties on the {@link Service}.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Service}
*/
  static fromJSON(json: any): Service;
/**
* Deep clones the object.
* @returns {Service}
*/
  clone(): Service;
}
/**
* StatusList2021 data structure as described in [W3C's VC status list 2021](https://www.w3.org/TR/2023/WD-vc-status-list-20230427/).
*/
export class StatusList2021 {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Deep clones the object.
* @returns {StatusList2021}
*/
  clone(): StatusList2021;
/**
* Creates a new {@link StatusList2021} of `size` entries.
* @param {number | undefined} [size]
*/
  constructor(size?: number);
/**
* Returns the number of entries in this {@link StatusList2021}.
* @returns {number}
*/
  len(): number;
/**
* Returns whether the entry at `index` is set.
* @param {number} index
* @returns {boolean}
*/
  get(index: number): boolean;
/**
* Sets the value of the `index`-th entry.
* @param {number} index
* @param {boolean} value
*/
  set(index: number, value: boolean): void;
/**
* Encodes this {@link StatusList2021} into its compressed
* base64 string representation.
* @returns {string}
*/
  intoEncodedStr(): string;
/**
* Attempts to decode a {@link StatusList2021} from a string.
* @param {string} s
* @returns {StatusList2021}
*/
  static fromEncodedStr(s: string): StatusList2021;
}
/**
* A parsed [StatusList2021Credential](https://www.w3.org/TR/2023/WD-vc-status-list-20230427/#statuslist2021credential).
*/
export class StatusList2021Credential {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link StatusList2021Credential}.
* @param {Credential} credential
*/
  constructor(credential: Credential);
/**
* @returns {string}
*/
  id(): string;
/**
* Sets the given credential's status using the `index`-th entry of this status list.
* Returns the created `credentialStatus`.
* @param {Credential} credential
* @param {number} index
* @param {boolean} revoked_or_suspended
* @returns {StatusList2021Entry}
*/
  setCredentialStatus(credential: Credential, index: number, revoked_or_suspended: boolean): StatusList2021Entry;
/**
* Returns the {@link StatusPurpose} of this {@link StatusList2021Credential}.
* @returns {StatusPurpose}
*/
  purpose(): StatusPurpose;
/**
* Returns the state of the `index`-th entry, if any.
* @param {number} index
* @returns {CredentialStatus}
*/
  entry(index: number): CredentialStatus;
/**
* @returns {StatusList2021Credential}
*/
  clone(): StatusList2021Credential;
/**
* @param {any} json
* @returns {StatusList2021Credential}
*/
  static fromJSON(json: any): StatusList2021Credential;
/**
* @returns {any}
*/
  toJSON(): any;
}
/**
* Builder type to construct valid {@link StatusList2021Credential} istances.
*/
export class StatusList2021CredentialBuilder {
  free(): void;
/**
* Creates a new {@link StatusList2021CredentialBuilder}.
* @param {StatusList2021 | undefined} [status_list]
*/
  constructor(status_list?: StatusList2021);
/**
* Sets the purpose of the {@link StatusList2021Credential} that is being created.
* @param {StatusPurpose} purpose
* @returns {StatusList2021CredentialBuilder}
*/
  purpose(purpose: StatusPurpose): StatusList2021CredentialBuilder;
/**
* Sets `credentialSubject.id`.
* @param {string} id
* @returns {StatusList2021CredentialBuilder}
*/
  subjectId(id: string): StatusList2021CredentialBuilder;
/**
* Sets the expiration date of the credential.
* @param {Timestamp} time
* @returns {StatusList2021CredentialBuilder}
*/
  expirationDate(time: Timestamp): StatusList2021CredentialBuilder;
/**
* Sets the issuer of the credential.
* @param {string} issuer
* @returns {StatusList2021CredentialBuilder}
*/
  issuer(issuer: string): StatusList2021CredentialBuilder;
/**
* Sets the context of the credential.
* @param {string} context
* @returns {StatusList2021CredentialBuilder}
*/
  context(context: string): StatusList2021CredentialBuilder;
/**
* Adds a credential type.
* @param {string} t
* @returns {StatusList2021CredentialBuilder}
*/
  type(t: string): StatusList2021CredentialBuilder;
/**
* Adds a credential's proof.
* @param {Proof} proof
* @returns {StatusList2021CredentialBuilder}
*/
  proof(proof: Proof): StatusList2021CredentialBuilder;
/**
* Attempts to build a valid {@link StatusList2021Credential} with the previously provided data.
* @returns {StatusList2021Credential}
*/
  build(): StatusList2021Credential;
}
/**
* [StatusList2021Entry](https://www.w3.org/TR/2023/WD-vc-status-list-20230427/#statuslist2021entry) implementation.
*/
export class StatusList2021Entry {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link StatusList2021Entry}.
* @param {string} status_list
* @param {StatusPurpose} purpose
* @param {number} index
* @param {string | undefined} [id]
*/
  constructor(status_list: string, purpose: StatusPurpose, index: number, id?: string);
/**
* Returns this `credentialStatus`'s `id`.
* @returns {string}
*/
  id(): string;
/**
* Returns the purpose of this entry.
* @returns {StatusPurpose}
*/
  purpose(): StatusPurpose;
/**
* Returns the index of this entry.
* @returns {number}
*/
  index(): number;
/**
* Returns the referenced {@link StatusList2021Credential}'s url.
* @returns {string}
*/
  statusListCredential(): string;
/**
* Downcasts {@link this} to {@link Status}
* @returns {Status}
*/
  toStatus(): Status;
/**
* Deep clones the object.
* @returns {StatusList2021Entry}
*/
  clone(): StatusList2021Entry;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {StatusList2021Entry}
*/
  static fromJSON(json: any): StatusList2021Entry;
}
/**
* A type wrapping a `JwkStorage` and `KeyIdStorage` that should always be used together when
* working with storage backed DID documents.
*/
export class Storage {
  free(): void;
/**
* Constructs a new `Storage`.
* @param {JwkStorage} jwkStorage
* @param {KeyIdStorage} keyIdStorage
*/
  constructor(jwkStorage: JwkStorage, keyIdStorage: KeyIdStorage);
/**
* Obtain the wrapped `KeyIdStorage`.
* @returns {KeyIdStorage}
*/
  keyIdStorage(): KeyIdStorage;
/**
* Obtain the wrapped `JwkStorage`.
* @returns {JwkStorage}
*/
  keyStorage(): JwkStorage;
}
/**
*/
export class Timestamp {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link Timestamp} with the current date and time.
*/
  constructor();
/**
* Parses a {@link Timestamp} from the provided input string.
* @param {string} input
* @returns {Timestamp}
*/
  static parse(input: string): Timestamp;
/**
* Creates a new {@link Timestamp} with the current date and time.
* @returns {Timestamp}
*/
  static nowUTC(): Timestamp;
/**
* Returns the {@link Timestamp} as an RFC 3339 `String`.
* @returns {string}
*/
  toRFC3339(): string;
/**
* Computes `self + duration`
*
* Returns `null` if the operation leads to a timestamp not in the valid range for [RFC 3339](https://tools.ietf.org/html/rfc3339).
* @param {Duration} duration
* @returns {Timestamp | undefined}
*/
  checkedAdd(duration: Duration): Timestamp | undefined;
/**
* Computes `self - duration`
*
* Returns `null` if the operation leads to a timestamp not in the valid range for [RFC 3339](https://tools.ietf.org/html/rfc3339).
* @param {Duration} duration
* @returns {Timestamp | undefined}
*/
  checkedSub(duration: Duration): Timestamp | undefined;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {Timestamp}
*/
  static fromJSON(json: any): Timestamp;
}
/**
*/
export class UnknownCredential {
  free(): void;
/**
* Returns a {@link Jwt} if the credential is of type string, `undefined` otherwise.
* @returns {Jwt | undefined}
*/
  tryIntoJwt(): Jwt | undefined;
/**
* Returns a {@link Credential} if the credential is of said type, `undefined` otherwise.
* @returns {Credential | undefined}
*/
  tryIntoCredential(): Credential | undefined;
/**
* Returns the contained value as an Object, if it can be converted, `undefined` otherwise.
* @returns {Record<string, any> | undefined}
*/
  tryIntoRaw(): Record<string, any> | undefined;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {UnknownCredential}
*/
  static fromJSON(json: any): UnknownCredential;
/**
* Deep clones the object.
* @returns {UnknownCredential}
*/
  clone(): UnknownCredential;
}
/**
* A DID Document Verification Method.
*/
export class VerificationMethod {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* Creates a new {@link VerificationMethod} from the given `did` and {@link Jwk}. If `fragment` is not given
* the `kid` value of the given `key` will be used, if present, otherwise an error is returned.
*
* ### Recommendations
* The following recommendations are essentially taken from the `publicKeyJwk` description from the [DID specification](https://www.w3.org/TR/did-core/#dfn-publickeyjwk):
* - It is recommended that verification methods that use `Jwks` to represent their public keys use the value of
*   `kid` as their fragment identifier. This is
* done automatically if `None` is passed in as the fragment.
* - It is recommended that {@link Jwk} kid values are set to the public key fingerprint.
* @param {CoreDID | IToCoreDID} did
* @param {Jwk} key
* @param {string | undefined} [fragment]
* @returns {VerificationMethod}
*/
  static newFromJwk(did: CoreDID | IToCoreDID, key: Jwk, fragment?: string): VerificationMethod;
/**
* Returns a copy of the {@link DIDUrl} of the {@link VerificationMethod}'s `id`.
* @returns {DIDUrl}
*/
  id(): DIDUrl;
/**
* Sets the id of the {@link VerificationMethod}.
* @param {DIDUrl} id
*/
  setId(id: DIDUrl): void;
/**
* Returns a copy of the `controller` `DID` of the {@link VerificationMethod}.
* @returns {CoreDID}
*/
  controller(): CoreDID;
/**
* Sets the `controller` `DID` of the {@link VerificationMethod} object.
* @param {CoreDID} did
*/
  setController(did: CoreDID): void;
/**
* Returns a copy of the {@link VerificationMethod} type.
* @returns {MethodType}
*/
  type(): MethodType;
/**
* Sets the {@link VerificationMethod} type.
* @param {MethodType} type_
*/
  setType(type_: MethodType): void;
/**
* Returns a copy of the {@link VerificationMethod} public key data.
* @returns {MethodData}
*/
  data(): MethodData;
/**
* Sets {@link VerificationMethod} public key data.
* @param {MethodData} data
*/
  setData(data: MethodData): void;
/**
* Get custom properties of the Verification Method.
* @returns {Map<string, any>}
*/
  properties(): Map<string, any>;
/**
* Adds a custom property to the Verification Method.
* If the value is set to `null`, the custom property will be removed.
*
* ### WARNING
* This method can overwrite existing properties like `id` and result
* in an invalid Verification Method.
* @param {string} key
* @param {any} value
*/
  setPropertyUnchecked(key: string, value: any): void;
/**
* Serializes this to a JSON object.
* @returns {any}
*/
  toJSON(): any;
/**
* Deserializes an instance from a JSON object.
* @param {any} json
* @returns {VerificationMethod}
*/
  static fromJSON(json: any): VerificationMethod;
/**
* Deep clones the object.
* @returns {VerificationMethod}
*/
  clone(): VerificationMethod;
}
