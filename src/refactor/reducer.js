const initialState = {
  isShown: false,
  message: ''
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        isShown: action.payload.isShown,
        message: action.payload.message
      };
    default:
      return state;
  }
}
