import request from '../utils/request';
//获取首页数据
export function homePage() {
return request.get('/');
}

//根据制造商ID获取制造商详情
export function gethomedetail(id) {
return request.get('/brand/detail?id='+id);
}

//
export function gethomegoodslist() {
return request.get('/goods/list?brandId=1001000&page=1&size=10000');
}