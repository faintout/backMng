import axios from 'axios'
import store from '../store/index.js'
import router from '../router/index.js'
import {Message} from 'element-ui'
this.$message = Message
// axios.defaults.baseURL = 'http://172.17.35.25:9706'
axios.defaults.baseURL = '/server'




//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    store.commit('getToken')
    let user = store.state.token;
    config.headers.common['token'] = user||'';
    //console.dir(config);
    return config;
}, function (error) {
    // Do something with request error
    console.info("error: ");
    console.info(error);
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data && response.data.code) {
        if (parseInt(response.data.code) === 108 || parseInt(response.data.code) === 109) {
            //未登录
            response.data.msg = "登录信息已失效，请重新登录";
            this.$message.error(response.data.msg);
            router.push('/login');
        }
        if (parseInt(response.data.code) === -1) {
            road.$message.error("请求失败");
        }
    }
    return response;
}, function (error) {
    // Do something with response error
    console.dir(error);
    road.$message.error("服务器连接失败");
    return Promise.reject(error);
})

const getData = (url, params, header) => {
    return new Promise((resolve, reject) => {
        axios['post'](url, params, header).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
const AjaxTool = {
    // getters
    login(params) {
        return new Promise((resolve, reject) => {
            getData('/login', params).then(res => {
                if (res.success) {
                    resolve(res);
                } else {
                    this.$message({
                        type:'error',
                        message:res.msg
                    })
                    reject(res);
                }
            }, err => {
                this.$message({
                    type:'error',
                    message:err.msg
                })
                reject(err);
            });
        });
    }
}

export {
    AjaxTool
}
