// Copyright 2017-2020 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const re = new RegExp('(Development|Local Testnet)$');

export default function isTestChain (chain?: string | null): boolean {
  if (!chain) {
    return false;
  }

  return !!re.test(chain.toString());
}
