import {combineReducers} from 'redux'
import qt_reducer from './QT-Reducers'

export default function allreducres (){
    return combineReducers({
        qts:qt_reducer
    })
}