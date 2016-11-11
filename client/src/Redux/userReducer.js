
// ------ ACTIONS FOR USER REDUCER --------- //

export function userAuth (userID) {
  return {
    type: 'USER_AUTH',
    isLoggedIn: true,
    userID
  }
}

// ----- SET USER REDUCER INITIAL STATE ------ //

const userInitialState = {
  isLoggedIn: false,
};


export default function userReducer (state = userInitialState, action) {
  switch(action.type) {
    case 'USER_AUTH' :
    state = {...state, isLoggedIn: true};
    break;
  }
  return state;
};

