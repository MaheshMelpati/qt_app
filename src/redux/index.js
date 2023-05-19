import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import allreducres from "./reduces";

const myReducers = allreducres();
const middelware = [thunk];
let enhancers = compose(applyMiddleware(thunk));
let store = createStore(
    myReducers,
    compose(enhancers,applyMiddleware(...middelware)));

export default store;