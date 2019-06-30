import authReducer from './authReducer'
import filmsReducer from './filmsReducer'
import { combineReducers} from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    film: filmsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});


export default rootReducer