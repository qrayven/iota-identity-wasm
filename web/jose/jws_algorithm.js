/** Supported algorithms for the JSON Web Signatures `alg` claim.
 *
 * [More Info](https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms) */
export var JwsAlgorithm;
(function (JwsAlgorithm) {
    /** HMAC using SHA-256 */
    JwsAlgorithm["HS256"] = "HS256";
    /** HMAC using SHA-384 */
    JwsAlgorithm["HS384"] = "HS384";
    /** HMAC using SHA-512 */
    JwsAlgorithm["HS512"] = "HS512";
    /** RSASSA-PKCS1-v1_5 using SHA-256 */
    JwsAlgorithm["RS256"] = "RS256";
    /** RSASSA-PKCS1-v1_5 using SHA-384 */
    JwsAlgorithm["RS384"] = "RS384";
    /** RSASSA-PKCS1-v1_5 using SHA-512 */
    JwsAlgorithm["RS512"] = "RS512";
    /** RSASSA-PSS using SHA-256 and MGF1 with SHA-256 */
    JwsAlgorithm["PS256"] = "PS256";
    /** RSASSA-PSS using SHA-384 and MGF1 with SHA-384 */
    JwsAlgorithm["PS384"] = "PS384";
    /** RSASSA-PSS using SHA-512 and MGF1 with SHA-512 */
    JwsAlgorithm["PS512"] = "PS512";
    /** ECDSA using P-256 and SHA-256 */
    JwsAlgorithm["ES256"] = "ES256";
    /** ECDSA using P-384 and SHA-384 */
    JwsAlgorithm["ES384"] = "ES384";
    /** ECDSA using P-521 and SHA-512 */
    JwsAlgorithm["ES512"] = "ES512";
    /** ECDSA using secp256k1 curve and SHA-256 */
    JwsAlgorithm["ES256K"] = "ES256K";
    /** No digital signature or MAC performed */
    JwsAlgorithm["NONE"] = "none";
    /** EdDSA signature algorithms */
    JwsAlgorithm["EdDSA"] = "EdDSA";
})(JwsAlgorithm || (JwsAlgorithm = {}));
//# sourceMappingURL=jws_algorithm.js.map