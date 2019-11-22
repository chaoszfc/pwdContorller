//分装axios
import axios from 'axios';
//序列化
import qs from 'qs';
const baseUrl = "http://192.168.25.23";

//通过node变量切换环境baseUrl
if(process.env.NODE_ENV == 'development'){
    //axios.defaults.baseURL可以设置axios的请求路径
    axios.defaults.baseURL = baseUrl;
}else if(process.env.NODE_ENV == 'debug'){

}else if(process.env.NODE_ENV == 'production'){

}
//设置请求超时
axios.defaults.timeout = 10000;
//设置post请求头
axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求拦截。登录态的判断
//请求拦截器
axios.interceptors.request.use(
    config=>{
        token && (config.headers.Authorization = token);        
        return config;    
    }
)