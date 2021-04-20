/* eslint-disable */ 
import axios, { AxiosResponse, AxiosTransformer } from 'axios'
import { message } from 'ant-design-vue'

import store from '@/store'
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 25000
const Axios: AxiosTransformer = axios

export interface ParamOption {
  load?: boolean; // 接口请求过程中 是否显示 load
  loadNoClose?: boolean; // load true的情况下    请求完成也不关闭load
  successMsg?: string | boolean; // 请求成功 提示信息  默认false不提示  string:'信息'   true：显示后端信息
  errorMsg?: boolean | string; // 错误信息   默认true 显示后端错误信息,  string:信息    false 不提示
  bolb?: boolean; // 后端传输二进制数据
  error?: (errorText: string) => void
  finally?: () => void
  baseURL?: string
}

export interface ErrorResponse {
  code: number;
  description: string;
  msg: string;
  traceId: string;
}

export function GET(url: string, params: any = []) {
  return fetch(url, 'get', params[0], params[1])
}

export function POST(url: string, params: any = []) {
  return fetch(url, 'post', params[0], params[1])
}

export function DELETE(url: string, params: any = []) {
  return fetch(url, 'delete', params[0], params[1])
}

export function PATCH(url: string, params: any = []) {
  return fetch(url, 'patch', params[0], params[1])
}

export function PUT(url: string, params: any = []) {
  return fetch(url, 'put', params[0], params[1])
}

const queryList:any[]=[];

function fetch(url: string, method: string, params: any, option: ParamOption = <ParamOption>{}) {
  if (option.load) {
    store.commit('setLoading', true)
  }
  let request: any = {
    method: method,
    url: url
  }
  if (/get/i.test(method)) {
    request.params = params
  } else {
    request.data = params
  }
  if (option.bolb) {
    request.responseType = 'blob'
    request.emulateJSON = true
  }
  if(option.baseURL){
    request.baseURL = option.baseURL
  }

  const item:any = queryList.find((i=>{
    return i.req === JSON.stringify(request)
  }))
  if(item){
    return item.res
  }else{
    const res= Axios(request).then(({ data: res }: AxiosResponse) => {
      if(typeof res === 'string'){
        return Promise.reject({response: {statusText: `接口${url}未返回正确格式`}})
      }
      if (option.load && !option.loadNoClose) {
        store.commit('setLoading', false)
      }
      if (option.successMsg)
        message.success(typeof option.successMsg === 'string' ? option.successMsg : res.msg)
      option.finally && option.finally()
      // 删除接口
      queryList.splice(queryList.findIndex(i=> {
        return i.req === JSON.stringify(request)
      }),1)
      return res
    }).catch((e: any) => {
      let  response:AxiosResponse<ErrorResponse>  =e.response  || {}
      store.commit('setLoading', false)
      const errorMsg: any = option.errorMsg || (response.data && (response.data.msg||response.data.description)) || codeError(response.status,e.message) || response.statusText || '未知错误'
      if (option.errorMsg !== false) {
        message.error(errorMsg)
      }
      switch (response.status) {
        case 401:
        // 跳转到登录界面
         
          break
      }
      option.error && option.error(errorMsg)
      option.finally && option.finally()
      // 删除接口
      queryList.splice(queryList.findIndex(i=> {
        return i.req === JSON.stringify(request)
      }),1)
      return Promise.reject(errorMsg)
    })
    queryList.push({req:JSON.stringify(request),res})
    return  res
  }



}


function codeError(code: number,message: any): string | undefined {
  switch (code) {
    case 404:
      return '404找不到'
    case 401:
      return '登录已过期'
    case 500:
    case 502:
    case 504:
      return '服务器错误'
  }
  if(message === 'timeout of 15000ms exceeded'){
    return  '服务器响应超时'
  }
}
