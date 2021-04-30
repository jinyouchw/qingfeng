export interface  Wapper<T> {
    requestAccess:boolean,
    code:string,
    msg:string,
    success?:boolean,
    timeStamp?:number,
    data:T
  }
export interface commonParams {
  appInfo:string|-1,
  source:string|-1,
  nonce:string|-1,
  token:string|-1,
  userId:number,
  sign:string
}
 export interface User {
   username:string,
   age:number,
  
 }
