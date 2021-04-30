//方案一
// import { GET, ParamOption } from '@/httpService/axios'  
// const baseURL = '/qingfengs'


// export function getMoudleList(params: any, options: ParamOption = <ParamOption>{}) {
//     options.baseURL = baseURL
// 	return GET(`/home/moudle/list`,[params,options])
// }

//方案二
import request from '../../httpService/request'

export function getMoudleList() {
 
	return request.Get(`/home/moudle/list`)
}
