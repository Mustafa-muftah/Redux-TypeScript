import  actionTypes  from '../ActionTypes/actionTypes'

export interface dataPayload {
  name:string,
  username:string,
  email:string,
  address:{
    street:string,
    suite:string,
    city:string,
    zipcode:number
  }
  geo:{
    lat:number
    lng:number
  }
}

 interface searchProcess {
   type:actionTypes.SEARCH_PROCESS
 }
 interface success {
  type:actionTypes.SUCCESS
  payload: dataPayload []
}
interface failed {
  type:actionTypes.FAILED
  payload: string
}
export type ProcessAction =
  searchProcess | success | failed ;
