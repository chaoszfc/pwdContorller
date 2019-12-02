import axios from '../utils/axios';
import qs from 'qs'; // 根据需求是否导入qs模块
const baseUrl = 'http://192.168.25.23:3000/pwd-api'
//登录
const fcReq = {
    //公钥的接口
    sendPublicKey(){
        return axios.get(`${baseUrl}/sendPublicKey`,{})
    },
    login(password){
        return axios.post(`${baseUrl}/login`,{data:password});    
    },
    testSession(){
        return axios.get(`${baseUrl}/testSession`,{});   
    },
}
export default fcReq;