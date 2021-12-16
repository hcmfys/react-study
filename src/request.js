// 引入axios和qs
import axios from 'axios'
import {getCookie}  from './cookie'
import { message } from 'antd';
const HOST="http://test-pub-sys.int.chuxingyouhui.com";
// 创建axios请求实例
const request = axios.create({
    baseURL: HOST, // 设置跨域代理接口统一的前置地址
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
         'UserId':getCookie("UserId"),
    }});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    message.error(error);
    return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 只返回数据
    return response.data
}, function (error) {
    // const status = error.response.status
    // if (status >= 500) {
    //   alert('服务繁忙请稍后再试')
    // } else if (status >= 400) {
    //   console.log(error)
    //   alert(error.response.data.message)
    // }
    // 对响应错误做点什么
    // console.dir(error)
    return Promise.reject(error)
})

// 你定义的后台请求接口调用
// postApi, getApi 自定义方法名称
// data 请求时向后台发送的参数
// qs 请求时默认FormData,参数为字符串，使用qs.stringify(data)转换成对象，也可自行设置请求头
export function postApi (url,data) {
    return request({
        url: url,
        method: 'post',
        data: data
    })
}

export function getApi (url,data) {
    return request({
        url: url,
        method: 'post',
        data: data
    })
}

