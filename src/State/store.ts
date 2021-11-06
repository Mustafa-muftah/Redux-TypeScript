 import { applyMiddleware, createStore } from "redux";
 import thunk from "redux-thunk";
 import { AllReducer } from './Reducer/CombineReducers';
 import { composeWithDevTools } from "redux-devtools-extension";


 export const store =  createStore (AllReducer,composeWithDevTools(applyMiddleware(thunk)))
