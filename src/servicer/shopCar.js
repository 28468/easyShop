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
