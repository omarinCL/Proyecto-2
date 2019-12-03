export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const onLogin = payload => (dispatch, getState) => {
  const state = getState()
  const foundUser = state.loginReducer.users.find(user => user.email === payload.email && user.password === payload.password)

  if (foundUser) {
    dispatch(onLoginSuccess({ user: foundUser }))
  } else {
    dispatch(onLoginError({ error: '401' }))
  }
}

export const onLoginError = payload => ({
  payload,
  type: LOGIN_ERROR
})

export const onLoginSuccess = payload => ({
  payload,
  type: LOGIN_SUCCESS
})
