<template>
    <div id="homePage">
        <div class="loginContent">
            <label>
                <span>用户名:</span>
                <input type="text" placeholder="请输入用户名" v-model="username">
            </label>
            <label>
                <span>密码:</span>
                <input type="password" placeholder="请输入密码" v-model="password">
            </label>
            <a class="loginfx" @click="LoginIn()">登录</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"homePage",
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods:{
        LoginIn(){
            
        }
    }
}
</script>
<style lang="scss">
    @import "../assets/scss/homePage";
</style>