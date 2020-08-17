(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(e,a,t){"use strict";t.r(a);var r=t(42),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" CHANGELOG")]),e._v(" "),t("h2",{attrs:{id:"_3-2-1-aug-17-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-aug-17-2020"}},[e._v("#")]),e._v(" 3.2.1 Aug 17, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Allow for (optional, default blake2) hasher to secp256k1 sign/verify functions")]),e._v(" "),t("li",[e._v("Utilities for secp256k1 publicKey expansion and compression")]),e._v(" "),t("li",[e._v("Add basic Ethereum address utils (encode with checksum & checksum verification)")]),e._v(" "),t("li",[e._v("Add Ethereum-compatible "),t("code",[e._v("mnemonicToBip39")]),e._v(" seed creation function")])]),e._v(" "),t("h2",{attrs:{id:"_3-1-1-aug-10-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-aug-10-2020"}},[e._v("#")]),e._v(" 3.1.1 Aug 10, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("deriveAddress(<address>, '/<soft>/<soft-b>')")]),e._v(" via sr25519 soft")]),e._v(" "),t("li",[e._v("Use "),t("code",[e._v("scrypt")]),e._v(" from WASM as available (JS fallback in place)")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("base32{Encode, Decode}")]),e._v(" utilities (IPFS-compatible alphabet)")]),e._v(" "),t("li",[e._v("Support IPFS compatibility flag in base58 encoding/decoding")]),e._v(" "),t("li",[e._v("Update to "),t("code",[e._v("@polkadot/wasm-crypto")]),e._v(" 1.3.1")])]),e._v(" "),t("h2",{attrs:{id:"_3-0-1-jul-27-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-1-jul-27-2020"}},[e._v("#")]),e._v(" 3.0.1 Jul 27, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add Katal ss58Format (Thanks to https://github.com/retotrinkler)")]),e._v(" "),t("li",[e._v("Adjust JSON pair output with scrypt kdf (version 3 output)")])]),e._v(" "),t("h2",{attrs:{id:"_2-18-1-jul-13-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-18-1-jul-13-2020"}},[e._v("#")]),e._v(" 2.18.1 Jul 13, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("base64{Decode, Encode, Validate}")]),e._v(" as crypto utils")]),e._v(" "),t("li",[e._v("Extract "),t("code",[e._v("base58Validate")]),e._v(" from base58 decode checks")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("isAscii")]),e._v(" to allow detection of printable ASCII sequences (including tab, newline)")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("isUtf8")]),e._v(" to allow detection of valid Utf8 sequences")])]),e._v(" "),t("h2",{attrs:{id:"_2-17-1-jul-6-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-17-1-jul-6-2020"}},[e._v("#")]),e._v(" 2.17.1 Jul 6, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("encode{Derived, Multi}Address")]),e._v(" to encode derived/multi addresses")]),e._v(" "),t("li",[e._v("Correctly handle 0 inputs in "),t("code",[e._v("numberToU8a")])]),e._v(" "),t("li",[e._v("Simplify and flatten base58 dependencies")])]),e._v(" "),t("h2",{attrs:{id:"_2-16-1-jun-29-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-16-1-jun-29-2020"}},[e._v("#")]),e._v(" 2.16.1 Jun 29, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Adjust "),t("code",[e._v("addressCheck")]),e._v(" and "),t("code",[e._v("encodeAddress")]),e._v(" function to check for valid base58 alphabets (better error reporting)")]),e._v(" "),t("li",[e._v("Rename "),t("code",[e._v("createKeySub")]),e._v(" to "),t("code",[e._v("createKeyDerived")]),e._v(" based on changed in Substrate (sub keys now named derived)")])]),e._v(" "),t("h2",{attrs:{id:"_2-15-1-jun-22-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-15-1-jun-22-2020"}},[e._v("#")]),e._v(" 2.15.1 Jun 22, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Adjust keyring to no override 0-prefix (Polkadot live) settings with keychain default")])]),e._v(" "),t("h2",{attrs:{id:"_2-14-1-jun-16-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-14-1-jun-16-2020"}},[e._v("#")]),e._v(" 2.14.1 Jun 16, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("extractTime")]),e._v(" utility conversion (Thanks to https://github.com/kwingram25)")])]),e._v(" "),t("h2",{attrs:{id:"_2-13-1-jun-8-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-13-1-jun-8-2020"}},[e._v("#")]),e._v(" 2.13.1 Jun 8, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Fix JS blake2 fallback (non-wasm) to correctly deal with hex inputs")]),e._v(" "),t("li",[e._v("Align "),t("code",[e._v("bnToHex")]),e._v(" signature with "),t("code",[e._v("bnToU8a")]),e._v(" (with old/new style)")]),e._v(" "),t("li",[e._v("Allow "),t("code",[e._v("bnTo{Hex,U8a}")]),e._v(" to take any value with "),t("code",[e._v(".toBn()")]),e._v(" signatures")])]),e._v(" "),t("h2",{attrs:{id:"_2-12-2-jun-1-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-2-jun-1-2020"}},[e._v("#")]),e._v(" 2.12.2 Jun 1, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Fix "),t("code",[e._v("isFunction")]),e._v(" signature to assert "),t("code",[e._v("Function")])])]),e._v(" "),t("h2",{attrs:{id:"_2-12-1-jun-1-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-1-jun-1-2020"}},[e._v("#")]),e._v(" 2.12.1 Jun 1, 2020")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Important")]),e._v(" Removed "),t("code",[e._v("mnemonicToSeed")]),e._v(", it is only for bip39, use "),t("code",[e._v("mnemonicToMiniSecret")]),e._v(" for the Substrate variant")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("u8aEq")]),e._v(" to compare two Uint8Array or hex values for an exact match")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("addressEq")]),e._v(" to compare two addresses (ss58, Uint8array or hex) for an exact match")]),e._v(" "),t("li",[e._v("Throw error on "),t("code",[e._v("{nacl,schnorrkel}Verify")]),e._v(" on invalid input lengths")]),e._v(" "),t("li",[e._v("Performance optimizations in "),t("code",[e._v("u8aToHex")]),e._v(" & "),t("code",[e._v("u8aConcat")])])]),e._v(" "),t("h2",{attrs:{id:"_2-11-1-may-26-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-1-may-26-2020"}},[e._v("#")]),e._v(" 2.11.1 May 26, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Internal cleanups on typings")]),e._v(" "),t("li",[e._v("Support for latest TypeScript, eslint & typescript-eslint")])]),e._v(" "),t("h2",{attrs:{id:"_2-10-1-may-14-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-1-may-14-2020"}},[e._v("#")]),e._v(" 2.10.1 May 14, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add Kulupu ss58 prefix as an allowed value (Thanks to https://github.com/sorpaas)")]),e._v(" "),t("li",[e._v("Make the "),t("code",[e._v("TextEncoder")]),e._v(" polyfill handle non-compliant Buffer implementations (newer versions of Jest)")]),e._v(" "),t("li",[t("code",[e._v("DeriveJunction")]),e._v(" now also allows for BigInt values (aligning with number types elsewhere)")]),e._v(" "),t("li",[e._v("Small code-flow optimizations")])]),e._v(" "),t("h2",{attrs:{id:"_2-9-1-apr-30-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-1-apr-30-2020"}},[e._v("#")]),e._v(" 2.9.1 Apr 30, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add support for ECDSA keypairs (Thanks to https://github.com/akru)")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("createKeyMulti")]),e._v(" & "),t("code",[e._v("createKeySub")]),e._v(" to create utility sub & multi keys")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("u8aSorted")]),e._v(" to sort "),t("code",[e._v("Uint8Arrays")])]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("sortAddresses")]),e._v(" to sort addresses based on their internal representation")])]),e._v(" "),t("h2",{attrs:{id:"_2-8-1-apr-9-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-1-apr-9-2020"}},[e._v("#")]),e._v(" 2.8.1 Apr 9, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Keypair will now throw an error when attempting to sign/derive using a locked pair (Thanks to https://github.com/h4x3rotab)")]),e._v(" "),t("li",[e._v("Cleanup "),t("code",[e._v("isDevelopment")]),e._v(" regex to cater for chains such as "),t("code",[e._v("Westend Development")])])]),e._v(" "),t("h2",{attrs:{id:"_2-7-1-mar-31-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-1-mar-31-2020"}},[e._v("#")]),e._v(" 2.7.1 Mar 31, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("bnSqrt")]),e._v(" to calculate the integer sqrt via Newton iteration")]),e._v(" "),t("li",[e._v("Allow for optional wasm-crypto, specifically via "),t("code",[e._v("@polkadot/util-crypto/noWasm")])]),e._v(" "),t("li",[e._v("Misc. CI infrastructure cleanups")])]),e._v(" "),t("h2",{attrs:{id:"_2-6-1-feb-29-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-feb-29-2020"}},[e._v("#")]),e._v(" 2.6.1 Feb 29, 2020")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Breaking change")]),e._v(" Following on the 2.0 release, "),t("code",[e._v("@polkadot/wasm")]),e._v(" was updated to 1.1+. sr25510 now only verifies 0.8+ signatures, closing the loop on dropping Substrate 1.x-era support")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("signatureVerify (message: Uint8Array | string, signature: Uint8Array | string, addressOrPublicKey: Uint8Array | string): VerifyResult")]),e._v(" to verify any signature, regardless of type. Returns validity & detected crypto type.")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("cryptoIsReady (): boolean")]),e._v(" function to check status of initialization")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("addressCheckChecksum (decoded: Uint8Array)")]),e._v(" as an helper to extract and verify the ss58 checksum")]),e._v(" "),t("li",[e._v("Swap to yarn 2, allow use in yarn 2 projects")])]),e._v(" "),t("h2",{attrs:{id:"_2-5-1-feb-22-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-feb-22-2020"}},[e._v("#")]),e._v(" 2.5.1 Feb 22, 2020")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Breaking change")]),e._v(" (TypeScript only) The "),t("code",[e._v("*.d.ts")]),e._v(" files now contain TypeScript 3.8 features, "),t("code",[e._v("#private")]),e._v(", which is not usable in older versions")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("isBigInt(value)")]),e._v(" to allow "),t("code",[e._v("BigInt")]),e._v(" checks. Also add support in "),t("code",[e._v("bnToBn")]),e._v(" as well as number conversion utils")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("isChildClass(Parent, Child?)")]),e._v(" to check if a class extends the parent, asserting Child is Parent")]),e._v(" "),t("li",[e._v("(internal) Use "),t("code",[e._v("#<field>")]),e._v(" instead of "),t("code",[e._v("private _<field>")]),e._v(" for private class variables")])]),e._v(" "),t("h2",{attrs:{id:"_2-4-1-feb-18-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-feb-18-2020"}},[e._v("#")]),e._v(" 2.4.1 Feb 18, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Ensure that "),t("code",[e._v("formatBalance")]),e._v(" does not apply unit overrides apply when no SI is applicable")]),e._v(" "),t("li",[e._v("Adjust "),t("code",[e._v("formatBalance(<balance>, <options>)")]),e._v(" to take expanded "),t("code",[e._v("withUnit: string | boolean")]),e._v(" option where string is an actual unit, e.g. "),t("code",[e._v("KSM")])]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("decimals")]),e._v(" option to "),t("code",[e._v("formatBalance")]),e._v(" should now be passed as part of the "),t("code",[e._v("options")]),e._v(" (previous last-param deprecated)")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v(".setSS58Format")]),e._v(" on keyring will now just operate on pairs created on the keyring, not globally. The global "),t("code",[e._v("setSS58Format")]),e._v(" in "),t("code",[e._v("@polkadot/util-crypto")]),e._v(" will be deprecated.")]),e._v(" "),t("li",[e._v("The deprecated "),t("code",[e._v("addressPrefix")]),e._v(" option to keyring has been belatedly removed (Use "),t("code",[e._v("ss58Format")]),e._v(" rather)")])]),e._v(" "),t("h2",{attrs:{id:"_2-3-1-feb-15-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-feb-15-2020"}},[e._v("#")]),e._v(" 2.3.1 Feb 15, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Remove dependency on moment.js with "),t("code",[e._v("formatDate")]),e._v(" function (Thanks to https://github.com/AndreasGassmann)")]),e._v(" "),t("li",[e._v("Move TypeScript "),t("code",[e._v("@types/*")]),e._v(" to dev deps (Thanks to https://github.com/AndreasGassmann)")]),e._v(" "),t("li",[e._v("Update to "),t("code",[e._v("@polkadot/wasm-crypto")]),e._v(" 1.0")]),e._v(" "),t("li",[e._v("Cleanup dependencies to pave the way for using yarn 2 (Explicit instead of implicit)")])]),e._v(" "),t("h2",{attrs:{id:"_2-2-1-feb-06-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-feb-06-2020"}},[e._v("#")]),e._v(" 2.2.1 Feb 06, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add resolver for jest requires (tests from src)")])]),e._v(" "),t("h2",{attrs:{id:"_2-1-1-feb-04-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-feb-04-2020"}},[e._v("#")]),e._v(" 2.1.1 Feb 04, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Update "),t("code",[e._v("detectPackage(<package.json>, __dirname?)")]),e._v(" with calling folder")])]),e._v(" "),t("h2",{attrs:{id:"_2-0-1-jan-30-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-1-jan-30-2020"}},[e._v("#")]),e._v(" 2.0.1 Jan 30, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Update w3f/schnorrkel to 0.8.5 (Full Substrate 2.x support, no 1.x support)")]),e._v(" "),t("li",[e._v("Remove Alice session (ed2551) account from testing keyring (not applicable to Substrate 2.x)")]),e._v(" "),t("li",[e._v("Remove "),t("code",[e._v("chainspec")]),e._v(", "),t("code",[e._v("db")]),e._v(", "),t("code",[e._v("trie-codec")]),e._v(", "),t("code",[e._v("trie-db")]),e._v(" and "),t("code",[e._v("trie-hash")]),e._v(" packages (moved to client)")]),e._v(" "),t("li",[e._v("Renamed "),t("code",[e._v("assertSingletonPackage")]),e._v(" to "),t("code",[e._v("detectPackage")]),e._v(" with inclusion of version listing")]),e._v(" "),t("li",[e._v("Swap to elliptic library for secp2561 recovery (No node bindings)")])]),e._v(" "),t("h2",{attrs:{id:"_1-8-1-jan-09-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-1-jan-09-2020"}},[e._v("#")]),e._v(" 1.8.1 Jan 09, 2020")]),e._v(" "),t("ul",[t("li",[e._v("Add cross-client encryption/decryption support (Thanks to https://github.com/hskang9)")])]),e._v(" "),t("h2",{attrs:{id:"_1-7-1-nov-27-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-1-nov-27-2019"}},[e._v("#")]),e._v(" 1.7.1 Nov 27, 2019")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("formatBalance")]),e._v(" signature now allows to force unit displays")]),e._v(" "),t("li",[e._v("Keypair now allows for derive on a pair, with "),t("code",[e._v("pair.derive(...)")])]),e._v(" "),t("li",[t("code",[e._v("assert")]),e._v(" now acts like a real asserts, with no return - signature adapted for new TS 3.7")])]),e._v(" "),t("h2",{attrs:{id:"_1-6-1-oct-24-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-oct-24-2019"}},[e._v("#")]),e._v(" 1.6.1 Oct 24, 2019")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pair.sign(message)")]),e._v(" now takes an optional second "),t("code",[e._v("options?: SignOptions")]),e._v(" parameter, where "),t("code",[e._v("SignOptions")]),e._v(" is currently defined as "),t("code",[e._v("{ withType: boolean }")]),e._v(". Here "),t("code",[e._v("withType")]),e._v(" instructs the signing to prepend the type of signature (ed2551, sr25519 or ecdsa). This is used for the new Polkadot/Substrate MultiSignature format.")])]),e._v(" "),t("h2",{attrs:{id:"_1-5-1-sep-25-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-sep-25-2019"}},[e._v("#")]),e._v(" 1.5.1 Sep 25, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Fix typings on the Keyring-exposed encode & decodeAddress")]),e._v(" "),t("li",[e._v("Allow ss58Format = 0 as a valid value")]),e._v(" "),t("li",[e._v("Loosen type definitions for allowed ss58format values (still checked against allowed array)")])]),e._v(" "),t("h2",{attrs:{id:"_1-4-1-sep-12-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-sep-12-2019"}},[e._v("#")]),e._v(" 1.4.1 Sep 12, 2019")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Breaking change")]),e._v(" To set the "),t("code",[e._v("ss58Format")]),e._v(", you should now use "),t("code",[e._v("setSS58Format")]),e._v(" as opposed to the old "),t("code",[e._v("setAddressPrefix")])]),e._v(" "),t("li",[e._v("Renamed "),t("code",[e._v("keyring.setAddressPrefix")]),e._v(" to "),t("code",[e._v("keyring.setSS58Format")])]),e._v(" "),t("li",[e._v("Deprecated "),t("code",[e._v("addressPrefix")]),e._v(" on the keyring options, added the "),t("code",[e._v("ss58Format")]),e._v(" as a replacement (aligning with chain properties - the old version is still accepted)")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("stringToHex")]),e._v(" and "),t("code",[e._v("hexToString")]),e._v(" conversion utilities to "),t("code",[e._v("@polkadot/util")])]),e._v(" "),t("li",[e._v("Swap to "),t("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel 7.6.0"),t("OutboundLink")],1),e._v(" for all compilation, for latest improvements in code generation")])]),e._v(" "),t("h2",{attrs:{id:"_1-3-1-sep-10-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-sep-10-2019"}},[e._v("#")]),e._v(" 1.3.1 Sep 10, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Remove the "),t("code",[e._v("ExtError")]),e._v(" class, always prefer the standard JS "),t("code",[e._v("Error")]),e._v(" object for errors. This would bre a breaking change for any applications using "),t("code",[e._v("ExtError")])])]),e._v(" "),t("h2",{attrs:{id:"_1-2-1-sep-09-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-sep-09-2019"}},[e._v("#")]),e._v(" 1.2.1 Sep 09, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Keyring "),t("code",[e._v("addFromAddress")]),e._v(" can now be used to store external accounts, for example those provided by external signers")]),e._v(" "),t("li",[e._v("Maintainability updates")])]),e._v(" "),t("h2",{attrs:{id:"_1-1-1-aug-09-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-aug-09-2019"}},[e._v("#")]),e._v(" 1.1.1 Aug 09, 2019")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("assertSingletonPackage")]),e._v(" now warns via console.warn, but does not throw. This does allow the info to come accross while still allowing the app developers using multiple libraries time to fix.")])]),e._v(" "),t("h2",{attrs:{id:"_1-0-1-aug-02-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-1-aug-02-2019"}},[e._v("#")]),e._v(" 1.0.1 Aug 02, 2019")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("formatBalance")]),e._v(" now allows for "),t("code",[e._v("Compact")]),e._v(" inputs")]),e._v(" "),t("li",[t("code",[e._v("formaBalance")]),e._v(" now allows correct formatting of very large decimals")])]),e._v(" "),t("h3",{attrs:{id:"_0-94-1-jul-20-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-94-1-jul-20-2019"}},[e._v("#")]),e._v(" 0.94.1 Jul 20, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("checkAddress(address, prefix)")]),e._v(" to "),t("code",[e._v("@polkadot/util-crypto")]),e._v(" that validates an ss-58 address")]),e._v(" "),t("li",[e._v("Add support for the Kusama network (as a valid checked prefix)")]),e._v(" "),t("li",[e._v("Add an "),t("code",[e._v("asm.js")]),e._v(" fallback for the React Native environment (via "),t("code",[e._v("@polkadot/wasm-crypto")]),e._v(")")]),e._v(" "),t("li",[e._v("The ed25519 key for Alice (representing the session), now appears in the test keyrings")]),e._v(" "),t("li",[e._v("Fix missing dependencies for keyring (after address moves in 0.93.1)")])]),e._v(" "),t("h3",{attrs:{id:"_0-93-1-jun-14-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-93-1-jun-14-2019"}},[e._v("#")]),e._v(" 0.93.1 Jun 14, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Breaking: External pair interface for keyring has been changed. Instead of\n"),t("ul",[t("li",[t("code",[e._v("getMeta")]),e._v(" use the "),t("code",[e._v("meta")]),e._v(" getter, i.e. "),t("code",[e._v("console.log(pair.meta.name)")])]),e._v(" "),t("li",[t("code",[e._v("address")]),e._v(" use the "),t("code",[e._v("address")]),e._v(" getter, i.e. "),t("code",[e._v("console.log(pair.address)")])]),e._v(" "),t("li",[t("code",[e._v("publicKey")]),e._v(" use the "),t("code",[e._v("publicKey")]),e._v(" getter, i.e. "),t("code",[e._v("console.log(pair.publicKey)")])])])]),e._v(" "),t("li",[t("code",[e._v("Move decodeAddress")]),e._v(", "),t("code",[e._v("encodeAddress")]),e._v(" & "),t("code",[e._v("setAddressPrefix")]),e._v(" functions into "),t("code",[e._v("@polkadot/util-crypto")]),e._v(" from "),t("code",[e._v("@polkadot/keyring")]),e._v(". External interfaces should not be affected at this point since it is also (still) exported and exposed on keyring")])]),e._v(" "),t("h3",{attrs:{id:"_0-92-1-jun-04-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-92-1-jun-04-2019"}},[e._v("#")]),e._v(" 0.92.1 Jun 04, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Only allow integer input values into "),t("code",[e._v("formatBalance")])]),e._v(" "),t("li",[e._v("Allow "),t("code",[e._v("formatBalance")]),e._v(", "),t("code",[e._v("formatDecimal")]),e._v(" & "),t("code",[e._v("formatNumber")]),e._v(" to cater for negative numbers")]),e._v(" "),t("li",[e._v("Add 'Bob//stash' to testing keyring, joining the existing 'Alice//stash'")])]),e._v(" "),t("h3",{attrs:{id:"_0-91-1-may-22-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-91-1-may-22-2019"}},[e._v("#")]),e._v(" 0.91.1 May 22, 2019")]),e._v(" "),t("ul",[t("li",[e._v("ed25519/sr25519 sign & verify functions can now take the message input as Uint8Array/string/hex and verify allows for the signature/publicKey to be specified as Uint8Array/hex")]),e._v(" "),t("li",[e._v("Update "),t("code",[e._v("@polkadot/wasm")]),e._v(" to include a maintenance bump for the "),t("code",[e._v("w3f/schnorrkel")]),e._v(" libraries")])]),e._v(" "),t("h3",{attrs:{id:"_0-90-1-may-08-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-90-1-may-08-2019"}},[e._v("#")]),e._v(" 0.90.1 May 08, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Moving towards 1.0")]),e._v(" "),t("li",[e._v("Added bnMin & bnMax functions")])]),e._v(" "),t("h3",{attrs:{id:"_0-76-1-apr-03-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-76-1-apr-03-2019"}},[e._v("#")]),e._v(" 0.76.1 Apr 03, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Fix "),t("code",[e._v("addFromMnemonic")]),e._v(" to generate using new-style derivation.")]),e._v(" "),t("li",[e._v("Pull in "),t("code",[e._v("formatBalance")]),e._v(", "),t("code",[e._v("formatDecimal")]),e._v(", "),t("code",[e._v("formatElapsed")]),e._v(", "),t("code",[e._v("formatNumber")]),e._v(", "),t("code",[e._v("calcSi")]),e._v(", "),t("code",[e._v("findSi")]),e._v(" & "),t("code",[e._v("isTestChain")]),e._v(" utility functions from the originals in "),t("code",[e._v("@polkadot/ui-util")])]),e._v(" "),t("li",[e._v("Swap out "),t("code",[e._v("wasm-schnorrkel")]),e._v(" & "),t("code",[e._v("wasm-ed25519")]),e._v(" for combined version with "),t("code",[e._v("wasm-crypto")])]),e._v(" "),t("li",[e._v("Swap DB interfaces to optional LRU, removing "),t("code",[e._v("transactionAsync")]),e._v(" (client-only changes)")])]),e._v(" "),t("h3",{attrs:{id:"_0-75-1-mar-29-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-75-1-mar-29-2019"}},[e._v("#")]),e._v(" 0.75.1 Mar 29, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Start journey to 1.0")])]),e._v(" "),t("h3",{attrs:{id:"_0-42-1-mar-28-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1-mar-28-2019"}},[e._v("#")]),e._v(" 0.42.1 Mar 28, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("assertSingletonPackage")]),e._v(" to util")]),e._v(" "),t("li",[e._v("Ensure that only a single keyring instance is loaded (uses above)")])]),e._v(" "),t("h3",{attrs:{id:"_0-41-1-mar-25-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1-mar-25-2019"}},[e._v("#")]),e._v(" 0.41.1 Mar 25, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Extensions to the client-specific database interfaces (non-breaking for API and util users)")])]),e._v(" "),t("h3",{attrs:{id:"_0-40-1-mar-23-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1-mar-23-2019"}},[e._v("#")]),e._v(" 0.40.1 Mar 23, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Add additional derivation path extraction mechanisms to util-crypto")]),e._v(" "),t("li",[e._v("Add createFromUri function to keypair (creates keypair, does not add it)")]),e._v(" "),t("li",[e._v("Allow all crypto hashing & ed25519 to use WASM (as available, JS fallbacks)")])]),e._v(" "),t("h3",{attrs:{id:"_0-39-1-mar-20-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1-mar-20-2019"}},[e._v("#")]),e._v(" 0.39.1 Mar 20, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Pull in bip39 generation functions from "),t("code",[e._v("@poladkot/wasm-crypto")]),e._v(" with a fallback to the pure JS versions")])]),e._v(" "),t("h3",{attrs:{id:"_0-38-1-mar-18-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1-mar-18-2019"}},[e._v("#")]),e._v(" 0.38.1 Mar 18, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Align with current substrate master for sr25519 keys and hard/soft derivation")]),e._v(" "),t("li",[e._v("Swap default dev keys to derived (sr25519)")])]),e._v(" "),t("h3",{attrs:{id:"_0-37-1-mar-14-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1-mar-14-2019"}},[e._v("#")]),e._v(" 0.37.1 Mar 14, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),e._v(" "),t("h3",{attrs:{id:"_0-36-1-mar-13-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1-mar-13-2019"}},[e._v("#")]),e._v(" 0.36.1 Mar 13, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("fromUri")]),e._v(" to keyring along with hard & soft key derivation.")])]),e._v(" "),t("h3",{attrs:{id:"_0-35-1-mar-04-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1-mar-04-2019"}},[e._v("#")]),e._v(" 0.35.1 Mar 04, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Remove NodeJs-only "),t("code",[e._v("syncify")]),e._v(" function, not exported by the package (with binary dependency for Node)")])]),e._v(" "),t("h3",{attrs:{id:"_0-34-1-feb-13-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1-feb-13-2019"}},[e._v("#")]),e._v(" 0.34.1 Feb 13, 2019")]),e._v(" "),t("ul",[t("li",[e._v("Keyring now allows for ed25519 and sr25519 instances. Upon creation, you need to pass the "),t("code",[e._v("ed25519")]),e._v("or "),t("code",[e._v("sr25519")]),e._v(" string to denote the type, i.e. "),t("code",[e._v("new Keyring({ type: 'sr25519' })")])])]),e._v(" "),t("h3",{attrs:{id:"_0-33-1-nov-22-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-33-1-nov-22-2018"}},[e._v("#")]),e._v(" 0.33.1 Nov 22, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-32-1-oct-18-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-32-1-oct-18-2018"}},[e._v("#")]),e._v(" 0.32.1 Oct 18, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-31-1-oct-12-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-31-1-oct-12-2018"}},[e._v("#")]),e._v(" 0.31.1 Oct 12, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-30-1-sep-11-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-30-1-sep-11-2018"}},[e._v("#")]),e._v(" 0.30.1 Sep 11, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-29-1-sep-01-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-29-1-sep-01-2018"}},[e._v("#")]),e._v(" 0.29.1 Sep 01, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-28-1-aug-11-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-28-1-aug-11-2018"}},[e._v("#")]),e._v(" 0.28.1 Aug 11, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-27-1-aug-06-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-27-1-aug-06-2018"}},[e._v("#")]),e._v(" 0.27.1 Aug 06, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-26-1-jun-27-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-26-1-jun-27-2018"}},[e._v("#")]),e._v(" 0.26.1 Jun 27, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-25-1-jun-26-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-25-1-jun-26-2018"}},[e._v("#")]),e._v(" 0.25.1 Jun 26, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-24-1-jun-22-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-24-1-jun-22-2018"}},[e._v("#")]),e._v(" 0.24.1 Jun 22, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-23-1-jun-21-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-23-1-jun-21-2018"}},[e._v("#")]),e._v(" 0.23.1 Jun 21, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-22-1-may-24-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-22-1-may-24-2018"}},[e._v("#")]),e._v(" 0.22.1 May 24, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-21-1-may-17-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-21-1-may-17-2018"}},[e._v("#")]),e._v(" 0.21.1 May 17, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-20-1-may-16-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-20-1-may-16-2018"}},[e._v("#")]),e._v(" 0.20.1 May 16, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-19-1-apr-19-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-19-1-apr-19-2018"}},[e._v("#")]),e._v(" 0.19.1 Apr 19, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-18-1-mar-20-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-18-1-mar-20-2018"}},[e._v("#")]),e._v(" 0.18.1 Mar 20, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-17-1-mar0-8-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-17-1-mar0-8-2018"}},[e._v("#")]),e._v(" 0.17.1 Mar0 8, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-16-1-feb-23-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-16-1-feb-23-2018"}},[e._v("#")]),e._v(" 0.16.1 Feb 23, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-15-1-feb-15-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-15-1-feb-15-2018"}},[e._v("#")]),e._v(" 0.15.1 Feb 15, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-14-1-feb-07-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-14-1-feb-07-2018"}},[e._v("#")]),e._v(" 0.14.1 Feb 07, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-13-1-jan-25-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-13-1-jan-25-2018"}},[e._v("#")]),e._v(" 0.13.1 Jan 25, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-12-1-jan-11-2018"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-12-1-jan-11-2018"}},[e._v("#")]),e._v(" 0.12.1 Jan 11, 2018")]),e._v(" "),t("h3",{attrs:{id:"_0-11-1-dec-30-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-11-1-dec-30-2017"}},[e._v("#")]),e._v(" 0.11.1 Dec 30, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-10-1-dec-17-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-1-dec-17-2017"}},[e._v("#")]),e._v(" 0.10.1 Dec 17, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-9-1-dec-14-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-9-1-dec-14-2017"}},[e._v("#")]),e._v(" 0.9.1 Dec 14, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-8-1-dec-12-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-1-dec-12-2017"}},[e._v("#")]),e._v(" 0.8.1 Dec 12, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-7-1-dec-11-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-7-1-dec-11-2017"}},[e._v("#")]),e._v(" 0.7.1 Dec 11, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-6-1-nov-30-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-6-1-nov-30-2017"}},[e._v("#")]),e._v(" 0.6.1 Nov 30, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-5-1-nov-20-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-5-1-nov-20-2017"}},[e._v("#")]),e._v(" 0.5.1 Nov 20, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-4-1-nov-19-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-1-nov-19-2017"}},[e._v("#")]),e._v(" 0.4.1 Nov 19, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-3-1-nov-19-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-1-nov-19-2017"}},[e._v("#")]),e._v(" 0.3.1 Nov 19, 2017")]),e._v(" "),t("h3",{attrs:{id:"_0-2-1-nov-18-2017"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-1-nov-18-2017"}},[e._v("#")]),e._v(" 0.2.1 Nov 18, 2017")])])}),[],!1,null,null,null);a.default=s.exports}}]);