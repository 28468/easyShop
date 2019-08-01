import request from '../utils/request';

export function getSearch() {
  return request.get('/search/index');
}

