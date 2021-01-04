import axios from 'axios'
import store from 'store'
import router from 'router'
axios.defaults.baseURL = 'http://0.0.0.0:9706'


const getData = (url, params, header) => {
    return new Promise((resolve, reject) => {
        axios['post'](url, params, header).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    store.commit()
    let user = JSON.parse(window.sessionStorage.getItem('access-user'));
    if (user) {
        token = user.token;
    }
    config.headers.common['token'] = token;
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
        if (parseInt(response.data.code) === 108 || parseInt(response.data.code) === 109 ) {
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
const AjaxTool = {
    // getters
}
