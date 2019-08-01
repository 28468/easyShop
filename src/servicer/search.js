import request from '../utils/request';

export function getSearch() {
  return request.get('/search/index');
}

export function searchGoodsLists(params) {
  return request.get('/goods/list',{params});
}
