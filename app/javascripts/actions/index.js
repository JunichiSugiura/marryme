export function updateAddress(attr) {
  return {
    type: 'UPDATE_ADDRESS',
    i: attr.i,
    address: attr.address
  };
}

export function updateInitAmount(attr) {
  return {
    type: 'UPDATE_INIT_AMOUNT',
    i: attr.i,
    initAmount: attr.initAmount
  };
}

export function updateSplitShare(attr) {
  return {
    type: 'UPDATE_SPLIT_SHARE',
    i: attr.i,
    splitShare: attr.splitShare
  }
}
