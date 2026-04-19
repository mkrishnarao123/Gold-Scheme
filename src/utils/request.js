import axios from "axios";

const service = axios.create({
  withCredentials: true,
  timeout: 0,
  headers: {
    "content-type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    const authToken = sessionStorage.getItem("token");
    config.headers["Authorization"] = "Bearer " + authToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async function (res) {
    if (res.data.status_code === 200 || res.data.access_token) {
      console.log("successtoken");
      return res;
    }
    if (res.data.status_code === 401) {
      console.log("failedtoken");
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  function (error) {
    // forbidden
    if (error.response?.status === 408) {
      //route to forbidden page
      console.log();
    }
    return Promise.reject(error.response?.data || error);
  }
);

export default service;
