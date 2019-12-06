import { ADD_FAVORITE_EPISODE, REMOVE_FAVORITE_EPISODE } from '../Episodios/Episodios.actions'
import { ADD_FAVORITE_CHARACTER, REMOVE_FAVORITE_CHARACTER } from '../Personajes/Personajes.actions'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Orlando',
      email: 'orlando@chilecompra.cl',
      password: 'orlando123',
      favoriteEpisodes: [2, 7],
      favoriteCharacters: [3, 5]
    },
    {
      id: 2,
      name: 'Oscar',
      email: 'oscar@chilecompra.cl',
      password: 'oscar123',
      favoriteEpisodes: [3, 5],
      favoriteCharacters: [1, 2]
    },
    {
      id: 3,
      name: 'Pedro',
      email: 'pedro@chilecompra.cl',
      password: 'pedro123',
      favoriteEpisodes: [1, 6],
      favoriteCharacters: [4, 9]
    }
  ]
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.concat([action.payload.episodeId])
      // console.log(user)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case REMOVE_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.filter(epId => epId !== action.payload.episodeId)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case ADD_FAVORITE_CHARACTER: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteCharacters = user.favoriteCharacters.concat([action.payload.characterId])
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case REMOVE_FAVORITE_CHARACTER: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteCharacters = user.favoriteCharacters.filter(epId => epId !== action.payload.characterId)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    default: {
      return state
    }
  }
}

export default loginReducer
