var navList = document.getElementById("navList").getElementsByTagName("li");
for(var i = 0; i < navList.length; i++){
    navList[i].onmousemove = function(){
        if(this.className != "show"){
            this.className = "show";
        }
    }
    navList[i].onmouseout = function(){
        if(this.className != ""){
            this.className = "";
        }
    }
}
//改变二级菜单宽度
var height = document.getElementById("navList").getElementsByTagName("item");
var j = 5;
if(j < height.length){
    navList[i].onmousemove = function(){
        if(this.className != "item height"){
            this.className = "item height";
        }
    }
}