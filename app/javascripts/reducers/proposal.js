const initailState = {
  address: '',
  partners: [
    {
      address: '',
      initAmount: 0,
      splitShare: 0
    },
    {
      address: '',
      initAmount: 0,
      splitShare: 0
    }
  ]
};

export default function proposal(state = initailState, action) {
  switch(action.type) {
    case 'UPDATE_ADDRESS':
      const partners = state.partners.map((partner, i) => {
        return i === action.i ? {...partner, address: action.address} : partner;
      });
      return {...state, partners};
    default:
      return  state;
  }
}
