const initialState = {
    menu: false,
    moreInput: false
};

export default function userstate(state = initialState, action) {

  switch (action.type) {
    case 'MENU_OPEN':
      return {...state, menu: !state.menu}

    case 'CHANGE_MORE_INPUT':
      return {...state, moreInput: !state.moreInput}

    default:
      return state
    }
}