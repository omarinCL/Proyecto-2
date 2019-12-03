import { combineReducers } from 'redux'
import loginReducer from './../containers/Login/Login.reducer'
import privateRouteReducer from './../containers/Routes/PrivateRoute.reducer'
import episodiosReducer from './../containers/Episodios/Episodios.reducer'

const rootReducer = combineReducers({ loginReducer, privateRouteReducer, episodiosReducer })

export default rootReducer
