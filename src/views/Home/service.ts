import { GET, ParamOption } from '@/httpService/axios'  
const baseURL = '/qingfengs'


export function getMoudleList(params: any, options: ParamOption = <ParamOption>{}) {
    options.baseURL = baseURL
	return GET(`/home/moudle/list`,[params,options])
}