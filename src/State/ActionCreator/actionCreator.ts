import  actionTypes  from "../ActionTypes/actionTypes"
import { ProcessAction }  from "../Action/action"
import { Dispatch } from "react"
import axios from "axios"


export const processProgress =(term:string) => {
 return async ( dispatch:Dispatch<ProcessAction> ) => {
 dispatch({
  type:actionTypes.SEARCH_PROCESS
})

try{
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${term}`)

  const ID = data.map( (res:any) => {
  return res
})

dispatch ( {
  type:actionTypes.SUCCESS,
  payload: ID
})
}
catch(err:any){
  dispatch({
    type:actionTypes.FAILED,
    payload: err.message,
  })
}
 }
}