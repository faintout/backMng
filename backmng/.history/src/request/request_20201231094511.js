import axios from 'axios'
axios.defaults.baseURL = 'http://0.0.0.0:9706'


const getData = (url,params ,header)=>{
    return new Promise((resolve,reject)=>{
        axios['post'](url,params,header).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

const AjaxTool = {
    get
}
