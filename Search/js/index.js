var text = document.getElementsByClassName("text")[0];
        var submit = document.getElementsByClassName("submit")[0];
        var oul = document.getElementsByTagName("ul")[0];
        var textWrap = document.getElementsByClassName("text-wrap")[0];
        var flag = true;
        text.onfocus = function (){
            if(flag){
                text.value = '';
                flag = false;
            }            
            textWrap.style.borderColor = '#ccc'
            text.style.color = '#000';
        }
        text.onblur = function () {
            if(text.value == ""){
                text.value = "输入文字查看新闻";
                text.style.color = '#ccc';
                flag = true;
            }
            textWrap.style.borderColor = '#2d78f4'
            
        }
        text.oninput = function () {
            var val = text.value;
            var oScript = document.createElement("script");
            oScript.src = 'https://sp1.baidu.com/8qUZeT8a2gU2pMbgoY3K/su?wd=' + val + '&prod=news&cb=cbs';
            document.body.appendChild(oScript);
            oScript.remove();
        }
        function cbs(data){
            console.log(data.s);
            var str = '';
            if(data.s.length > 0){
                oul.style.display = "block";
                data.s.forEach(function (ele, index){
                str += '<li>' + ele + '</li>'
                })
            }else{
                oul.style.display = "none";
            }
            console.log(str);
            oul.innerHTML = str;
        }