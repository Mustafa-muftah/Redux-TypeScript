 import { combineReducers } from "redux";
import reducer from './reducer';


export const AllReducer = combineReducers({
  firstReducer : reducer
})


export type RootState = ReturnType<typeof AllReducer>