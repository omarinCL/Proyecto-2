import { LOADING_CHARACTERS, LOAD_CHARACTERS_SUCCESS, LOAD_CHARACTERS_ERROR } from './Personajes.actions'

const initialState = {
  loading: false,
  response: null,
  error: false,
  characters: []
}

const personajesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CHARACTERS:
      return {
        ...state,
        loading: true
      }

    case LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        response: action.payload,
        characters: state.characters.concat(action.payload.results),
        loading: false,
        error: false
      }
    case LOAD_CHARACTERS_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default personajesReducer
