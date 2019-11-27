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
            pubicKey:"",
            rsaDta:"",
        }
    },
    methods:{
        LoginIn(){
            let _this = this;
            _this.$http.sendPublicKey().then(res=>{
                _this.pubicKey = res.data.keys;
                let encryptor = new JSEncrypt();  // 新建JSEncrypt对象
                encryptor.setPublicKey(_this.pubicKey); // 设置公钥
                const rsaDta = encryptor.encrypt(_this.password); // 进行加密
                _this.rsaDta = rsaDta;
                _this.$http.login({
                    password:_this.rsaDta
                }).then(res=>{
                    console.log(res);
                })
            })
        }
    }
}
</script>
<style lang="scss">
    @import "../assets/scss/homePage";
</style>