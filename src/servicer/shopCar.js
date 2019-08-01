import request from '../utils/request';
//获取购物车商品列表

export function getShopCar() {
  return request.get('/cart/index')
}

//删除购物车商品
export function delshopCar(id) {
  console.log(id)
  return request.post('/cart/delete',id)
}
//获取商品数量和总价

export function carchecked(params) {
  console.log(params)
  return request.post('/cart/checked',params)
}

//数量改变
export function updata(params) {
  console.log(params)
  return request.post('/cart/updata',params);
}