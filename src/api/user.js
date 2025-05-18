import http from "@/utils/http.js";
export const  loginAPI=({account,password})=>{
  return http({
    url:'/login',
    method:'POST',
    date:{
      account,
      password
    }
   })
}
/**
 * @description:??
 * @param limit
 * @returns {*}
 */
export const getLikeListAPI=({limit=4})=>{
  return http({
    url:'/goods/relevant',
    params:{
      limit
    }
  })
}

