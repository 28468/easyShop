import request from '../utils/request';

export function login(params) {
  return request.post('/auth/loginByMobile',params);
}

//查询收藏栏商品
export function getCollectData(params){
    return request.get("/collect/list",{params})
}

