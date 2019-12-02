<template>
    <div id="zhuye">
        <div class="loginContent">
            <h3>★hello★</h3>
            <h3>★welcome your password Controller★</h3>
        </div>
    </div>
</template>
<script>
export default {
    name:"homePage",
    data(){
        return{
           
        }
    },
    mounted(){
        this.testss();
    },
    methods:{
       testss(){
            let _this = this;
            _this.$http.testSession().then(res=>{
                
            }
        )}
    }
}
</script>
<style lang="scss">
    @import "../assets/scss/zhuye";
</style>