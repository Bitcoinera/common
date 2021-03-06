// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../polyfill';

import { sr25519DerivePublicSoft, waitReady } from '@polkadot/wasm-crypto';

export default async function deriveSoft (publicKey: Uint8Array, chainCode: Uint8Array): Uint8Array {
  await waitReady()
  return sr25519DerivePublicSoft(publicKey, chainCode);
}
