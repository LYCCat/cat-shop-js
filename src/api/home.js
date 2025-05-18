import http from "@/utils/http.js";
//获取banner 默认为1 首页 商品为2
 export function  getBannerAPI(params={}){
  const {distributionsSite='1'}=params
   return http({
    url:'home/banner',
    params:{
      distributionsSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @returns {*}
 */
export  const findNewAPI=()=>{
   return http({
     url:'/home/new'
   })
}
/**
 * @description:获取人气推荐
 * @returns {*}
 */
 export const getHotAPI=()=>{
  return http({
    url:'/home/hot'
  })
}
/**
 * @description:获取所有商品模块
 * @returns {*}
 */
 export const getGoodsAPI=()=>{
   return http({
     url:'/home/goods'
   })

}
