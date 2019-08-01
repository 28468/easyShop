import request from '../utils/request';

export function login(params) {
  return request.post('/auth/loginByMobile',params);
}

//查询收藏栏商品
export function getCollectData(params){
    return request.get("/collect/list",{params})
}

///获取用户地址数据
export function gwtAddress(){
  return request.get("/address/list")
}
//添加地址
export function add(params){
  return request.post("/address/save",params)
}
//删除地址
export function del(id){
  return request.post("/address/delete",id)
}