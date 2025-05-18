import http from "@/utils/http.js";
//导航列表
export function  getCategoryAPI(){
  return http({
    url:'home/category/head'
  })
}
