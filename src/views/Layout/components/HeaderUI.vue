
<script setup>
import {getCategoryAPI} from "@/api/layout.js";
import {onMounted, ref} from "vue";
const categoryList=ref([])
const getCategory=async ()=>{
  const res=await getCategoryAPI()
  categoryList.value=res.result
  console.log(categoryList)
  console.log(res)
}
onMounted(()=>{
  getCategory()
})

</script>
<template>
 <ul class="app-header-nav">
    <li class="home" v-for="item in categoryList" :key="item.id">
        <RouterLink active-class="active" :to="`category/${item.id}`">{{item.name}}</RouterLink>
    </li>

 </ul>
</template>



<style lang="scss" scoped>
.app-header-nav{
    width:820px;
    display: flex;
    padding-left:40px;
    position:relative;
    z-index:998;
}
.home{
  margin-right: 40px;
  text-align: center;
  font-size: 16px;
  width: 38px;
  line-height: 32px;
  height: 32px;
  display: inline-block;
  &:hover{
    color: $xtxColor;
    border-bottom: 1px solid $xtxColor;
  }
}
</style>
