/* 如果想在每个页面都使用这个组件有两种方式 1我们可以在每个使用它的组件先导入  再局部进行注册 最后代template进行使用 */
/* 2 因为每个App.vue这个组建都要使用他 我们可以在APP.vue这个组件对其进行注册 */
<template>
    <div>
       
        
      <!-- 如果index的模式是history就可以使用a标签  但是如果使用hash模式 则使用啊标签就会出错 因为路径后面有#/
       <a href="/">首页</a>
        <a href="/news">新闻</a>
        <a href="/login">登录</a> -->
        <!-- 解决上面的问题 我们可以采用下面的方式 使用router-link代替a 这样可以兼容history hash-->
        <router-link to='/'>首页</router-link>
        <router-link to='/news'>新闻</router-link>
        <router-link to='/login'>登录</router-link>
        <router-link to='/reg'>注册</router-link>
        <router-link to='/goods'>商品</router-link>
      



    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>