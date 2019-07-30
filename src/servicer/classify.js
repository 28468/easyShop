import request from '../utils/request';
//分类页初始化信息获取
export function classify() {
  return request.get('/catalog/index');
}
//根据分类ID获取当前分类信息和子分类
export function clickClassify(id) {
  return request.get('/catalog/current?id='+id);
}
//根据分类ID获取商品
export function classifyList(id) {
  console.log(id)
  return request.get('/goods/list?categoryId='+id);
}
//获取商品详情
export function getDetail(id) {
  return request.get('/goods/detail?id='+id);
}
//添加购物车
export function addcars(params) {
  console.log(params)
  return request.post('/cart/add',params);
}
export function getNumber() {
  return request.get('/cart/goodscount');
}