<template>
    <div>      

        <h1>{{title}}</h1>
        <p>{{id}}</p>
         <ul>
            <li v-for="(item,index) in Array(5)" :key="index">
                <router-link :to="'/goods/type'+(index+1)+'/id0'+(index+1)">商品编号{{index+1}}</router-link>
            </li>
        </ul>
          <router-view />
    </div>
  
</template>

<script>
    export default {
         data() {
            return {
                id: '',
                title: ''
            }
        },
        watch: { // watch可以监听实例里所有成员的变化
            $route(v) {
                // console.log(v)
                this.id = v.params.goodsid
                this.title = v.params.goodsid + '商品'
                // 还可以通过这个新闻id 去后台ajax请求新闻的数据来显示不同的内容
            }
        },
        created() {
            // $route 用来获取当前页面的路由信息
            this.id = this.$route.params.goodsid
            this.title = this.$route.params.goodsid + '商品'
            // $router 用来处理路由跳转的方法集合
            // console.log(this.$route)
            // console.log(this.$router)
        }
    }
</script>

<style scoped>

</style>