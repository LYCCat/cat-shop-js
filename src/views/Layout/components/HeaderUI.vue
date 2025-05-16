<template>
 <ul class="app-header-nav">
    <li class="home">
        <RouterLink to="/">首页</RouterLink>
    </li>
    <li>
        <RouterLink to="/">居家</RouterLink>
    </li>
    <li>
        <RouterLink to="/">美食</RouterLink>
    </li>
    <li>
        <RouterLink to="/">服饰</RouterLink>
    </li>
 </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-header-nav{
    width:820px;
    display: flex;
    padding-left:40px;
    position:relative;
    z-index:998;
}
</style>
