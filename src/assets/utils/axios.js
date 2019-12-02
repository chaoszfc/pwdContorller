//分装axios
import axios from 'axios';
//序列化
import QS from 'qs';
// import store from '../store/index';
// //通过node变量切换环境baseUrl
// if(process.env.NODE_ENV == 'development'){
//     //axios.defaults.baseURL可以设置axios的请求路径
//     axios.defaults.baseURL = baseUrl;
// }else if(process.env.NODE_ENV == 'debug'){

// }else if(process.env.NODE_ENV == 'production'){

// }

// 创建axios实例
var instance = axios.create({imeout: 1000 * 12});
//让axios携带cookie
instance.defaults.withCredentials=true;
console.log(instance.defaults);
var sessionId = getCookie("sessionId") //获取cookie指定字段参数
instance.defaults.Cookie = sessionId;
//设置请求超时
instance.defaults.timeout = 10000;
//设置post请求头
instance.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//错误状态码控制
const errorHandle = (status,other) => {
    //状态码判断
    switch(status){

    }
}
//请求拦截。登录态的判断
//请求拦截器
instance.interceptors.request.use(
    config=>{
        const token = '123'
        // store.state.token;
        token && (config.headers.Authorization = token);        
        return config;    
    },
    error=>{
        return Promise.error(error)
    }
)
//响应拦截器
instance.interceptors.response.use(
    //请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    //请求失败
    error =>{
        const { response } = error;
        if(response){
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                // store.commit('changeNetwork', false);
             } else {
                 return Promise.reject(error);
             }
        }
    }
)
function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
}

export default instance;