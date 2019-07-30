import request from '../utils/request';
  //获取专题数据
export function topicList() {
  return request.get('/topic/list?page=1&?size=100');
}
//获取专题详情
export function getdetail(id) {
  return request.get('/topic/detail?id='+id);
}
//根据专题Id获取相关专题
export function getrelated() {
  return request.get('/topic/related?id=300');
}
//根据专题ID或者商品ID获取评论获取相关专题
export function getcommentlist() {
  return request.get('/comment/list?valueId=314&typeId=1&size=5&page=1');
}
/* //针对某个标题添加评论
export function gettopic() {
  return request.get('/topic/related?id=300');
} */