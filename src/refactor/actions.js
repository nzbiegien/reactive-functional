export function setText(isShown = false, message = '') {
  return {
    type: 'SET_TEXT',
    payload: {
      isShown,
      message
    }
  }
}
