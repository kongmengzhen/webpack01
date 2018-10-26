<template>
    <div>
      
<!-- 谁的子路由就在谁的容器里面切换 因此我们要写个切换路由的容器  -->
<router-view /> <!-- 注意 这里必须使用单标签 如果使用双标签 则子路由的内容就不会显示 -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>