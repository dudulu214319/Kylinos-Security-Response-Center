import axios from "axios";
// import router from "../router/index.js";

const http = axios.create({
  baseURL: "http://172.26.120.52:8000", //服务器
  timeout: 6000
});
http.interceptors.request.use(
  function(config) {
    if (config.method === "get") {
      config.data = true;
    }
    // let xtoken = sessionStorage.getItem("token");
    // if (xtoken) {
    //   config.headers["token"] = xtoken;
    // }
    if (config.headers["Content-Type"] == undefined) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  function(response) {
    // return response.data;
    if (response.data.token) {
      // 判断token是否存在，如果存在说明需要更新token
      // if(response.data.code==1003){
        
      // }

      sessionStorage.setItem("token", response.data.token); // 覆盖原来的token(默认一天刷新一次)
    }
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export { http };
