
import {legacy_createStore,applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { reducer } from "./reducer";




const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
export { store };