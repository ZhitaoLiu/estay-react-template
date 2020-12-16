import request from '@/utils/request.js';

export function getTopBanner() {
  return request({
    url: '/banner',
  });
}
