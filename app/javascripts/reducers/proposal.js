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
  ],
  divorceType: ''
};

export default function proposal(state = initailState, action) {
  let partners;
  switch(action.type) {
    case 'UPDATE_ADDRESS':
      partners = state.partners.map((partner, i) => {
        return i === action.i ? { ...partner, address: action.address } : partner;
      });
      return { ...state, partners };

    case 'UPDATE_INIT_AMOUNT':
      partners = state.partners.map((partner, i) => {
        return i === action.i ? { ...partner, initAmount: action.initAmount } : partner;
      });
      return { ...state, partners };

    case 'UPDATE_SPLIT_SHARE':
      partners = state.partners.map((partner, i) => {
        return i === action.i ? { ...partner, splitShare: action.splitShare } : partner;
      });
      return { ...state, partners }

    case 'UPDATE_DIVORCE_TYPE':
      return { ...state, divorceType: action.divorceType }

    default:
      return state;
  }
}
