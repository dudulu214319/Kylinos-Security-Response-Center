import * as api from './api';
//获取漏洞类型
export function getRoleTypeapi(option) {
    return api.http.get("/home/project/summary").then(data => {
        return data;
    })
}
//获取自评等级
export function getLevelapi(option) {
    return api.http.get("/home/project/summary").then(data => {
        return data;
    })
}
//提交漏洞
export function submitRoleApi(option) {
    return api.http.post("/auth/login", option).then(data => {
        return data;
    })
}
//登录
export function loginapi(option) {
    return api.http.post("/auth/login", option).then(data => {
        return data;
    })
}

//注册
export function registerapi(option) {
    return api.http.post("/auth/login", option).then(data => {
        return data;
    })
}

//找回密码
export function forgetPasswordapi(option) {
    return api.http.post("/auth/login", option).then(data => {
        return data;
    })
}