const jwt = require('jsonwebtoken');
let secret = 'my_love_';

function createToken() {
    let payload = { userName: 'admin', passWord: 'P@ssw0rd' }
    // console.log('token',token)
    return token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 72 });
}
function decodeToken(token) {
    let payload=''
    try {
        payload = jwt.verify(token, secret)
        console.log(payload)
    }catch(e){
        payload = false
        console.log('e',e)
    }
    // return payload
    let msg = {
        msg: !payload ? 'Token失效请重新登录' : '登录成功!',
        code: !payload ? 109 : 200,
        success: !!(payload)
    }
    return msg
}
module.exports = { createToken, decodeToken }