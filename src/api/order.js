import  http  from  '@/utils/http.js'
/**
 * orderSize:0,
 * page:1,
 * pageSize:2
 */
export const getUserOrder=(params)=>{
  return http({
    url:'/member/order',
    method:'GET',
    params
  })
}
