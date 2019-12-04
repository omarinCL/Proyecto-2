import Axios from 'axios'

export const LOAD_CHARACTERS_SUCCESS = 'LOAD_CHARACTERS_SUCCESS'
export const LOAD_CHARACTERS_ERROR = 'LOAD_CHARACTERS_ERROR'
export const LOADING_CHARACTERS = 'LOADING_CHARACTERS'
export const ADD_FAVORITE_CHARACTER = 'ADD_FAVORITE_CHARACTER'
export const REMOVE_FAVORITE_CHARACTER = 'REMOVE_FAVORITE_CHARACTER'

export const getCharacters = url => async dispatch => {
  dispatch(createAction(LOADING_CHARACTERS))
  try {
    const response = await Axios.get(!url ? 'https://rickandmortyapi.com/api/character' : url)
    dispatch(createAction(LOAD_CHARACTERS_SUCCESS, response.data))
  } catch (error) {
    dispatch(createAction(LOAD_CHARACTERS_ERROR))
  }
}

export const addFavoriteCharacter = id => (dispatch, getState) => {
  const state = getState()
  const user = state.privateRouteReducer.loggedIn
  dispatch(createAction(ADD_FAVORITE_CHARACTER, { userId: user.id, characterId: id }))
}

export const removeFavoriteCharacter = id => (dispatch, getState) => {
  const state = getState()
  const user = state.privateRouteReducer.loggedIn
  dispatch(createAction(REMOVE_FAVORITE_CHARACTER, { userId: user.id, characterId: id }))
}

const createAction = (type, payload) => {
  if (payload) {
    return {
      type,
      payload
    }
  } else return { type }
}
