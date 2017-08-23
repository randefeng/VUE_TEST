/*
 * 可引入不同的ajax库， 并依次修改_http _get _post方法
 */
import axios from 'axios'

var servers = {};

servers._http = axios;

servers._get = function(url, data, callback){
    
    if(arguments.length==1){
        data = {};
    }
    if(arguments.length==2){
        callback = data;
        data = {};
    }

    servers._http.request({
        url: url,
        method: 'GET',
        params: data,
        timeout: 10000,
        withCredentials: false, // default
        responseType: 'json', // default options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    })
    .then(function (response) {
        console.log(response);
        if(typeof callback === 'function'){
            callback(response.data);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

};

servers._post = function(url, data, callback){
    
    if(arguments.length==1){
        data = {};
    }
    if(arguments.length==2){
        callback = data;
        data = {};
    }

    servers._http.request({
        url: url,
        method: 'POST',
        data: data,
        timeout: 10000,
        withCredentials: false, // default
        responseType: 'json', // default options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    })
    .then(function (response) {
        console.log(response);
        if(typeof callback === 'function'){
            callback(response.data);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

};

servers.getTest = function (callback){
    let url = '/api/init?platform=EMPLOYEE';
    servers._get(url, callback)
}

servers.postTest = function (callback){
    let url = '/api/seller/saa/v1/login';
    servers._post(url, {'kw':'a'}, callback)
}

servers.init = function (callback){
    let url = '/api/init?platform=EMPLOYEE';
    servers._get(url, callback)
}

servers.login = function (postdata, callback){
    let url = '/api/seller/saa/v1/login';
    servers._post(url, postdata, callback)
}

servers.getOrderList = function (postdata, callback){
    let page = postdata.page || 0;
    let size = postdata.size || 10;
    let url = '/api/trade/v1/orderList?page=' + page + '&size=' + size;
    postdata.data = postdata.data || {};
    servers._post(url, postdata.data, callback)
}

/*
 * 取消订单
 */
servers.cancelOrder = function (postdata, callback){
    let url = '/api/trade/v1/editStatus';
    postdata = postdata || {};
    servers._post(url, postdata, callback)
}

export default {
  install (Vue) {
    Vue.prototype.$http = axios
    Vue.http = axios
    Vue.prototype.$servers = servers
  },
  $http: axios,
  $servers: servers
}

export const $servers = servers