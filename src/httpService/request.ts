import HttpClient from './http';
class MainApi extends HttpClient {
  public constructor() {
    console.log('aa', process.env.BASE_URL)
    super('/qingfengs');
  }
}
export default new MainApi()