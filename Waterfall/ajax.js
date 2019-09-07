function ajax(method, url, callback, data, flag){
    // ajax对象
    var xml = null;
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest();
    }else{
        xml = new ActiveXObject("Microsoft.XMLHttp");
    }

    // 初始化HTTP请求参数（请求方式，地址，同步异步）
    // 发送请求

    method = method.toUpperCase();//转换成大写
    var date = new Date();
    timer = date.getTime();
    if(method == "GET"){
        xml.open(method, url + "?" + data+ "$timer=" + timer, flag);
        xml.send();
    }else if(method == "POST"){
        xml.open(method, url, flag);
        xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xml.send(data);
    }

    // 监听数据
    xml.onreadystatechange = function () {
        console.log(xml.readyState);
        if(xml.readyState == 4){
            // 检查数据
            if(xml.status == 200){
                callback(xml.responseText);
            }
        }
    }
}
