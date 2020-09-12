import cookie from "cookie_js"

const adminToken  ="admin_token";
const username ="username";
const password ="password"

export function getToken(){
    return cookie.get(adminToken)
}
export function setToken(value){
    return cookie.set(adminToken,value)
}
export function removeToken(){
    return cookie.remove(adminToken)
}

export function getUserName(){
    return cookie.get(username)
}
export function setUserName(value){
    return cookie.set(username,value)
}
export function removeUserName(){
    return cookie.remove(username)
}
export function getPassWord(){
    return cookie.get(password)
}
export function setPassWord(value){
    return cookie.set(password,value)
}
export function removePassWord(){
    return cookie.remove(password)
}