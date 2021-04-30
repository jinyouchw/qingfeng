import HttpClient from './http';
class MainApi extends HttpClient {
  public constructor() {
    super('/qingfengs');
  }
}
export default new MainApi()