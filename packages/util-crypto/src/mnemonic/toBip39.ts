// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mnemonicToSeedSync } from 'bip39';
import { bufferToU8a } from '@polkadot/util';

// import { bip39ToSeed, isReady } from '@polkadot/wasm-crypto';

/**
 * @name toSeed
 * @summary Creates a valid Ethereum/Bitcoin-compatible seed from a mnemonic input
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicToBip39, mnemonicValidate } from '@polkadot/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 *
 * if (isValidMnemonic) {
 *   console.log(`Seed generated from mnemonic: ${mnemonicToBip39(mnemonic)}`); => u8a
 * }
 * ```
 */
export default function toBip39 (mnemonic: string, password = ''): Uint8Array {
  // FIXMe Re-add when we have support in the WASM libs again
  // return isReady()
  //   ? bip39ToSeed(mnemonic, password)

  return bufferToU8a(mnemonicToSeedSync(mnemonic, password)).subarray(0, 32);
}
