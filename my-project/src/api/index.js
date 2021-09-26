import * as api from './api';
//获取漏洞类型
export function getRoleTypeapi(option) {
    return api.http.get("/tju/third/get3").then(data => {
        return data;
    })
}
//获取自评等级
export function getLevelapi(option) {
    return api.http.get("/tju/second/get2").then(data => {
        return data;
    })
}
//提交漏洞
export function submitRoleApi(option) {
    return api.http.post("/tju/insert2", option).then(data => {
        return data;
    })
}
//登录
export function loginapi(option) {
    return api.http.post("/tju/login", option).then(data => {
        return data;
    })
}

//注册
export function registerapi(option) {
    return api.http.post("/tju/register", option).then(data => {
        return data;
    })
}

//找回密码
export function forgetPasswordapi(option) {
    return api.http.post("/tju/forget", option).then(data => {
        return data;
    })
}

//软件更新
export function getSoftwareUpdateApi(option) {
  return api.http.get("/tju/search", {
    params: option
  }).then(data => {
    return data;
  })
}

//政策
export function getPolicyApi(option) {
  return api.http.get("/tju/search_policy", {
    params: option
  }).then(data => {
    return data;
  })
}

//获取公告
export function getNoticeApi(option) {
    return api.http.get("/tju/search_bug", {params:option}).then(data => {
        return data;
    })
}

//获取个人报告
export function getExportApi(option) {
    return api.http.get("/tju/userbug_get", {params:option}).then(data => {
        return data;
    })
}

//获得英雄榜
export function herolistapi(data) {
    return api.http.post("/tju/herolist_get", data).then(data => {
        return data;
    })
}
//获得个人信息
export function usergetapi(data) {
    return api.http.get("/tju/user_get/get", {params: data}).then(data => {
        return data;
    })
}
//更新用户
export function userupdataapi(data) {
    return api.http.post("/tju/user_updata", data).then(data => {
        return data;
    })
}