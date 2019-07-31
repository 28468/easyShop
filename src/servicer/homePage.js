import request from '../utils/request';
  //获取首页数据
export function homePage() {
  return request.get('/');
}
