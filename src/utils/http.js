import axios from 'axios'

const http=axios.create(
    {
        baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
        timeout:5000
    }
)
http.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  // Add a response interceptor
http.interceptors.response.use(function (response) {

    return response.data
  }, function (error) {
    return Promise.reject(error);
  });

 export default http