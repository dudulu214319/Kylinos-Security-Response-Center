import * as api from './api';
// // 管理员登录
// export function managerLogin(option) {
//     return api.http.post("/auth/login", option).then(data => {
//         return data;
//     })
// }
// // 管理员退出
// export function managerLogout() {
//     return api.http.post("/auth/logout").then(data => {
//         return data;
//     })
// }
// // 获取用户锁定数据
// export function getLockData() {
//     return api.http.get("/user/setting").then(data => {
//         return data;
//     })
// }
export function getManageListAPI(data) {
    return api.http.get("/testapp/first/get", {params: data}).then(data => {
        return data;
    })
}
export function loginapi(data) {
    return api.http.post("/testapp/first/get", data).then(data => {
        return data;
    })
}
//获得英雄榜
export function herolistapi(data) {
    return api.http.post("/testapp/herolist_get", data).then(data => {
        return data;
    })
}
//获得个人信息
export function usergetapi(data) {
    return api.http.get("/testapp/user_get/get", {params: data}).then(data => {
        return data;
    })
}
//更新用户
export function userupdataapi(data) {
    return api.http.post("/testapp/user_updata", data).then(data => {
        return data;
    })
}
// // 删除用户 
// export function deleteManager(option) {
//     return api.http.delete("/user/manager", {data: option}).then(data => {
//         return data;
//     })
// }
// export function homeProSummary(data) {
//     return api.http.post("/home/project/summary",{params: data}).then(data => {
//         return data;
//     })
// }
