let util = {

};
util.title = function (title) {
    title = title ? title + ' ' : 'iView project';
    window.document.title = title;
};

/*
 * 时间戳转换成年月日
 */
util.formatDate = function (val) {
    if (!val || val == '' || val == undefined || val == "null") {
        return ''
    }
    var date = new Date(val);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    return /*y + '-' + */(m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + (h < 10 ? ('0' + h) : h) + ':' + (min < 10 ? ('0' + min) : min)/* + ':' + (s < 10 ? ('0' + s) : s)*/;
}

export default util;