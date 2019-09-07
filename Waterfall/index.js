var oLi = document.getElementsByTagName("li");
var Wrapper = document.getElementsByClassName("wrapper")[0];
var flag = false;
var num = 1;
function send(){
    if(!flag){
        num++;
        ajax("GET", "./getPics.php", dealData, "cpage=" + num, true);
        flag = true;
    }
}
send();

function dealData(data){
    flag = false;
    var data = JSON.parse(data);
    // console.log(data);
    if(data.length > 0){
        data.forEach(function (ele, index){
            var oItem = document.createElement("div");
            oItem.className = "item";
            oItem.offsetHeight = ele.height;
            oItem.offsetWidth = ele.width;
            var img = new Image();
            img.height = 230 * ele.height / ele.width;
            img.src = ele.image;
            oItem.appendChild(img);
            oLi[findeShortest(oLi)].appendChild(oItem);
        })
    }else{
        alert("没有了")
    }
}

function findeShortest(list){
    var len = list.length;
    var min = list[0].offsetHeight;
    var index = 0;
    for(var i = 1; i < len; i++){
        var h = list[i].offsetHeight;
        if(h < min){
            min = h;
            index = i;
        }
    }
    return index;
}

window.onscroll = function (){
    var index = findeShortest(oLi);
    var h = oLi[index].offsetHeight;
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(scrollHeight);
    if(h < scrollHeight + clientHeight){
            send();
    }
}