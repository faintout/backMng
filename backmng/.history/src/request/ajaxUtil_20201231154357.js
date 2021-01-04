import { getData } from './request'
import {Message} from 'element-ui'
const AjaxTool = {
    // getters
    login(params) {
        return new Promise((resolve, reject) => {
            getData('/login', params).then(res => {
                if (res.success) {
                    resolve(res);
                } else {
                    Message({
                        type: 'error',
                        message: res.msg
                    })
                    reject(res);
                }
            }, err => {
                Message({
                    type: 'error',
                    message: err.msg
                })
                reject(err);
            });
        });
    },
    //
    addTable(){
        
    }
}
export {
    AjaxTool
}