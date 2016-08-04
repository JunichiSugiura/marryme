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
    case 'UPDATE_PROPOSAL':
      return state;
    default:
      return  state;
  }
}
