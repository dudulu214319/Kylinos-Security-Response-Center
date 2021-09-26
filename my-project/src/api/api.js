import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.43.224:8000", //服务器
  timeout: 6000
});
http.interceptors.request.use(
  function(config) {
    if (config.method === "get") {
      config.data = true;
    }
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
      sessionStorage.setItem("token", response.data.token); // 覆盖原来的token(默认一天刷新一次)
    }
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export { http };
