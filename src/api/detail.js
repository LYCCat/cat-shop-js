import http from "@/utils/http.js";

/**
 * @description:商品详情
 * @param id
 * @returns {*}
 */
export  const getDetail=(id)=>{
  return http({
    url:'/goods',
    params:{
      id
    }
  })
}
/**
 * @description:这是什么
 * @param id
 * @param type
 * @param limit
 * @returns {*}
 */
 export  const getHotGoodsAPI=({id,type,limit=3})=>{
  return http({
    url:'/goods/hot',
    params:{
      id,
      type,
      limit
    }
  })

}
