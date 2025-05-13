import http from "@/utils/http";
export function getTest(){
    return http({
        url:'home/category/head'
    })
}