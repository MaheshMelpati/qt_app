import { GET_QTS } from "../actions/QT-Actions";

const qt_reducer = (state={}, {type,payload})=>{
    switch (type) {
        case GET_QTS:
            return payload    
        default:
           return state
    }
}
export default qt_reducer