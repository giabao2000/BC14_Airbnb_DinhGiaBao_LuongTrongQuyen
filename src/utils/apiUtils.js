import axios from "axios";

const TOKEN_CLASS =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8";

const api = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api/",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers = {
      ...config.headers,
      TokenByClass: TOKEN_CLASS,

      Token:
        localStorage.getItem("UserClient") || localStorage.getItem("UserAdmin")
          ? JSON.parse(
              localStorage.getItem("UserClient") ||
                localStorage.getItem("UserAdmin")
            ).token
          : "",
    };

    return config;
  },
  (errors) => {
    // Do something with request error
    return Promise.reject(errors);
  }
);

export default api;
