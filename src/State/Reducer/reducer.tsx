import  actionTypes  from "../ActionTypes/actionTypes"
import { ProcessAction }  from "../Action/action"
import { dataPayload } from './../Action/action';

interface reducerTypes{
  loading:boolean
  error: string | null
  data : dataPayload []
  
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};
const reducer = (state:reducerTypes = initialState , action: ProcessAction):reducerTypes => {
  switch(action.type){
    case actionTypes.SEARCH_PROCESS:
      return { loading :true , error:null , data :[] }
      case actionTypes.SUCCESS:
        return { loading :false , error:null , data :action.payload }
        case actionTypes.FAILED:
          return { loading :false , error:action.payload , data :[] }
    default:
      return state;
  }


}
export default reducer ;