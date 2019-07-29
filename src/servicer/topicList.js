import request from '../utils/request';
  //获取专题数据
export function topicList() {
  return request.get('/topic/list?page=1&?size=100');
}
