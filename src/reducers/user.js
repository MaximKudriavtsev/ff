const initialState = {
    menu: false
};

export default function userstate(state = initialState, action) {

  switch (action.type) {
    case 'MENU_OPEN':
      return {...state, menu: !state.menu}

    default:
      return state
    }
}