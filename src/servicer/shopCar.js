import request from '../utils/request';

export function getShopCar() {
  return request.get('/cart/index')
}

