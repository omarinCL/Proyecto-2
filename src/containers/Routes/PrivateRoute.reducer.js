import { LOGIN_SUCCESS, LOGIN_ERROR } from '../Login/Login.actions'

const initialState = {
  loggedIn: null,
  loginError: false
}

const privateRouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, loggedIn: action.payload.user, loginError: false }
    }
    case LOGIN_ERROR:
      return { ...state, loggedIn: null, loginError: true }
    default: {
      return state
    }
  }
}

export default privateRouteReducer
