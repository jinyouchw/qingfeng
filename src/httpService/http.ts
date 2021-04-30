/* eslint-disable */ 
import axios, { AxiosInstance, AxiosResponse ,AxiosRequestConfig} from 'axios';
import { Wapper } from './types'
import qs from 'qs';
import { message } from 'ant-design-vue';

const success = (msg:any) => {
  message.success(msg);
};
const error = (msg:any) => {
  message.error(msg);
};
declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {
  }
}

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    this._initializeRequestInterceptor()
    this._initializeResponseInterceptor();
  }
  private _initializeRequestInterceptor =()=>{
    const appConfig = {
      userId: 11,
      token: -1,
      appInfo: 'pc/1.0.1',
      nonce:-1,
      sign:-1,
      source: sessionStorage.getItem('source') || '202',
    };
  
    this.instance.interceptors.request.use(
      (config:AxiosRequestConfig)=>{
        config.data = qs.stringify({...appConfig,...config.data})
          return config
      },(err:any)=>{
        Promise.reject(err)
      }
    )

  }
  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };
  public async Get<T>(url:string,params?:any){
    return await this.instance.get<Wapper<T>>(url,params)
  }

  public async Post<T>(url:string,params?:any){
    return await this.instance.post<Wapper<T>>(url,params)
  }
  public async Put<T>(params?:any){
    return await this.instance.put<Wapper<T>>(params)
  }
  public async Patch<T>(params?:any){
    return  await this.instance.patch<Wapper<T>>(params)
  }
  public async Delete<T>(params?:any){
    return  await this.instance.delete<Wapper<T>>(params)
  }
  public async Request<T>(params?:any){
    return await this.instance.request<T>(params)
  }
  private _handleResponse = ( res : AxiosResponse) => {
    res.data.requestAccess = res.data.code==='0001'
    if(!res.data.requestAccess){
      error(res.data.msg)
      Promise.reject(res.data)
    }
    return res.data
  };

  private _handleError = (error: any) =>{
    Promise.reject(error);
    }
  }