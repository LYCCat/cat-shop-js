import http from "@/utils/http.js";
export const getOrderAP=(id)=>{
  return http({
    url:`/member/order/${id}`,
  })
}
