export function updateAddress(attr) {
  return {
    type: 'UPDATE_ADDRESS',
    i: attr.i,
    address: attr.address
  };
}