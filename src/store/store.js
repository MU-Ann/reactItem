import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"


let reducer = (state=[],action) =>{
    switch (action.type) {
        case "DATA":
            console.log(action.data)
          
            action.data.data.forEach((item)=>{
                item.key = item.id
            })
            state = action.data
            return state;
        default:
            return state;            
    }
}
let reducers = combineReducers({ reducer,})

let store = createStore(reducers, applyMiddleware(thunk))
 



export default store;