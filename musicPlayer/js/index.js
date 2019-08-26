var oAudio = document.getElementsByTagName("audio")[0],
    oPrev = document.getElementsByClassName("btn-prev")[0],
    oPlay = document.getElementsByClassName("btn-play")[0],
    oNext = document.getElementsByClassName("btn-next")[0],
    CurrentTime = document.getElementsByClassName("current-time")[0],
    AllTime = document.getElementsByClassName("all-time")[0],
    oProActive = document.getElementsByClassName("pro-active")[0],
    oRadioBox = document.getElementsByClassName("radio-box")[0],
    oProBox = document.getElementsByClassName("pro-box")[0],
    oProbg = document.getElementsByClassName("pro-bg")[0],
    oVol = document.getElementsByClassName("vol")[0],
    oVolBox = document.getElementsByClassName("vol-box")[0],
    oVolbg = document.getElementsByClassName("vol-bg")[0],
    oSoundBox = document.getElementsByClassName("sound-box")[0],
    oVolActive = document.getElementsByClassName("vol-active")[0],
    oImage = document.getElementsByTagName("img")[0],
    musicName = document.getElementsByClassName("musicName")[0],
    oIphon = document.getElementsByClassName("iphone")[0],
    oWrapper = document.getElementsByClassName("wrapper")[0];
// 初始化
var i = 0, W = oProbg.offsetWidth, H, timer, currentTime;
var auto = true,
    flag = true;
function init(){
    let Name =  musicList[i].name.slice(8)
    musicName.innerHTML = Name
    oAudio.src = musicList[i].name;
    oImage.src = musicList[i].IMG;
    oImage.style.borderColor = musicList[i].Color;
    oAudio.oncanplay = function () {
        duration = oAudio.duration;
        CurrentTime.innerText = conversion(oAudio.currentTime);
        AllTime.innerText = conversion(duration);
    }
}
init();
// 判断当前设备是PC还是移动端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
// 如果是非PC端打开的显示提醒
if(!IsPC()){
    oIphon.style.display = "flex";
    oWrapper.style.display = "none";
    console.log("请在PC端打开")
}
// 上下首切换
oPrev.onclick = function(){
    i--;
    musicAuto();
    console.log("上一首" + i);
}
oNext.onclick = function(){
    i++;
    musicAuto();
    console.log("下一首" + i);
} 

//判断播放按钮状态
oPlay.onmouseup = function () {
    if(oAudio.paused){
        musicPlay()
    }else{
        musicPause()
    }
}
// 音乐播放
function musicPlay(){
    oAudio.play();
    timer = setInterval(movePro, 200);
    oPlay.className = "btn-play iconfont icon-stop";
    oImage.style.animationPlayState = "running";
}
//音乐暂停
function musicPause(){
    oAudio.pause();
    clearInterval(timer);
    oPlay.className = "btn-play iconfont icon-Play";
    oImage.style.animationPlayState = "paused";
}
// 自动播放
function musicAuto(){
    var List = musicList.length;
    clearInterval(timer);
    if(i < 0){
        i = List - 1;
    }else if(i == List){
        i = 0;
    }
    if(auto){
        oImage.style.animationName = "moveTo1";
    }else{
        oImage.style.animationName = "moveTo";
    }
    auto = !auto;
    init();
    musicPlay();
}
// 时间转换
function conversion(time){
    var sec = parseInt(time % 60) < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60);
    var min = parseInt(time) / 60 < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60);
    return min + ":" + sec;
}
// 进度条
function movePro(){
    var currentTime = oAudio.currentTime;
    oProActive.style.width = currentTime / duration * 320 + "px";
    CurrentTime.innerText = conversion(currentTime);
    if(currentTime == duration){
        i++;
        musicAuto();
    }
}
//进度条拖拽
oRadioBox.onmousedown = function () {
    clearInterval(timer);
    document.body.onmousemove = function () {
        var newWidth = event.clientX - oProBox.getBoundingClientRect().left;
        if(newWidth <= 0){
            newWidth = 0;
        }
        if(newWidth >= W){
            newWidth = W
        }
        oProActive.style.width = newWidth + "px";
        newTime = newWidth / W * duration
        CurrentTime.innerText = conversion(newTime);
    }
    document.body.onmouseup = function () {
        oAudio.currentTime = newTime;
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        musicPlay();
    }
}
// 音量调节
oVol.onclick = function () {
    if(flag){
        oVolBox.style.display = "block";
    }else{
        oVolBox.style.display = "none";
    }
    flag = !flag;
}
oSoundBox.onmousedown = function () {
    H = oVolbg.offsetHeight;
    document.body.onmousemove = function () {
        newHeight = oVolbg.getBoundingClientRect().bottom - event.clientY;
        if(newHeight <= 0){
            newHeight = 0;  
        }
        if(newHeight >= H){
            newHeight = H;
        }
        oVolActive.style.height = newHeight + "px";
        oAudio.volume = newHeight / H;
        console.log(oAudio.volume);
    }
    document.body.onmouseup = function () {
        if(oAudio.volume == 0){
            oVol.className = "vol iconfont icon-jingyin"
        }else if(oAudio.volume > 0){
            oVol.className = "vol iconfont icon-shengyin"
        }
        document.body.onmousemove = null;
    }
}
