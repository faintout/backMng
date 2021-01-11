import { getData } from './request'

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
    }
}
export {
    getData
}