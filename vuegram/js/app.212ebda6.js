(function(e){function t(t){for(var s,r,l=t[0],o=t[1],c=t[2],p=0,m=[];p<l.length;p++)r=l[p],i[r]&&m.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"026b":function(e,t,a){"use strict";var s=a("8f8c"),i=a.n(s);i.a},"17f7":function(e,t,a){"use strict";var s=a("8876"),i=a.n(s);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-phone"},[a("div",{staticClass:"phone-header"},[2===e.step||3===e.step?a("a",{staticClass:"cancel-cta",on:{click:e.goToHome}},[e._v("Cancel")]):e._e(),a("p",[e._v("VueGram")]),2===e.step?a("a",{staticClass:"next-cta",on:{click:function(t){e.step=3}}},[e._v("Next")]):e._e(),3===e.step?a("a",{staticClass:"next-cta",on:{click:e.share}},[e._v("Share")]):e._e()]),a("PhoneBody",{attrs:{posts:e.posts,step:e.step,image:e.image,filters:e.filters,filter:e.filter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),a("div",{staticClass:"phone-footer"},[a("div",{staticClass:"home-cta",on:{click:e.goToHome}},[a("i",{staticClass:"fas fa-home fa-lg"})]),a("input",{attrs:{type:"file",id:"file",name:"file",disabled:1!==e.step},on:{change:e.upLoadImage}}),e._m(0)])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"file"}},[a("div",{staticClass:"upload-cta"},[a("i",{staticClass:"far fa-plus-square fa-lg"})])])}],r=[{username:"周杰伦",userImage:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565283253927&di=3296c995266c4f209318e9368f564889&imgtype=0&src=http%3A%2F%2Fwww.smugmug.com%2Fphotos%2Fi-8PBGLsg%2F0%2FO%2Fi-8PBGLsg-O.jpg",postImage:"http://cms-bucket.ws.126.net/2019/08/07/290859a5579c4d20886d06316a923859.jpeg",likes:427,hasBeenLiked:!1,caption:"哎呦，不错哦.",filter:"perpetua"},{username:"小白",userImage:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3185129170,1965086716&fm=26&gp=0.jpg",postImage:"http://img2.imgtn.bdimg.com/it/u=1792201800,1278641132&fm=26&gp=0.jpg",likes:153,hasBeenLiked:!1,caption:"这是一段文字",filter:"perpetua"},{username:"小王",userImage:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1022041283,4133755956&fm=26&gp=0.jpg",postImage:"http://img1.imgtn.bdimg.com/it/u=4169902702,1912686883&fm=26&gp=0.jpg",likes:280,hasBeenLiked:!1,caption:"这是一段文字",filter:"perpetua"},{username:"小李",userImage:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3556004340,164306614&fm=26&gp=0.jpg",postImage:"http://img2.imgtn.bdimg.com/it/u=3120515037,273442517&fm=26&gp=0.jpg",likes:156,hasBeenLiked:!1,caption:"这是一段文字",filter:"perpetua"}],l=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"phone-body"},[a("transition",{attrs:{"leave-active-class":"animated rotateOutDownLeft","enter-active-class":"animated rotateInUpRight",mode:"out-in"}},[1===e.step?a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],key:1,staticClass:"feed"},e._l(e.posts,function(e,t){return a("vuegramPost",{key:t,attrs:{post:e}})}),1):e._e(),2===e.step?a("div",{key:2},[a("div",{staticClass:"selected-image",class:e.filter,style:{backgroundImage:"url("+e.image+")"}}),a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"filter-container"},e._l(e.filters,function(t,s){return a("filterType",{key:s,attrs:{filter:t,image:e.image}})}),1)]):e._e(),3===e.step?a("div",{key:3},[a("div",{staticClass:"selected-image",class:e.filter,style:{backgroundImage:"url("+e.image+")"}}),a("div",{staticClass:"capton-container"},[a("textarea",{attrs:{placeholder:"Write a caption..."},domProps:{value:e.value},on:{input:e.inputText}})])]):e._e()])],1)},c=[],u=(a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vuegram-post"},[a("div",{staticClass:"header"},[a("div",{staticClass:"level-left"},[a("figure",{staticClass:"image is-32x32"},[a("img",{attrs:{src:e.post.userImage,alt:""}})]),a("span",{staticClass:"username"},[e._v(e._s(e.post.username))])]),a("div",{ref:"img",staticClass:"img-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.dblclick}}),a("div",{staticClass:"content"},[a("div",{staticClass:"heart",on:{click:e.clicklike}},[a("i",{staticClass:"far fa-heart",class:{fas:e.like}})]),a("p",{staticClass:"likes",staticStyle:{marginBottom:"0px"}},[e._v(e._s(e.post.likes)+" likes")]),a("p",{staticClass:"caption"},[a("span",[e._v(e._s(e.post.username)+"："+e._s(e.post.caption))])])])])])}),p=[],m={props:{post:Object},data:function(){return{like:!1}},methods:{dblclick:function(e){var t=this.$refs.img;t.classList.add("animated","bounce"),t.addEventListener("animationend",function(){t.classList.remove("animated","bounce")}),this.clicklike()},clicklike:function(){this.like?(this.like=!1,this.post.likes--):(this.like=!0,this.post.likes++)}}},f=m,d=(a("17f7"),a("2877")),g=Object(d["a"])(f,u,p,!1,null,null,null),h=g.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filter-type"},[a("p",[e._v(e._s(e.filter.name))]),a("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},b=[],k=(a("7f7f"),new s["a"]),_={props:{filter:Object,image:String},methods:{selectFilter:function(){k.$emit("selectedFilter",this.filter.name)}}},y=_,C=(a("78e5"),Object(d["a"])(y,v,b,!1,null,null,null)),j=C.exports,x={props:{posts:Array,step:Number,image:String,filters:Array,filter:String,value:String},components:{vuegramPost:h,filterType:j},methods:{inputText:function(e){this.$emit("input",e.target.value)}}},w=x,I=(a("026b"),Object(d["a"])(w,o,c,!1,null,null,null)),F=I.exports,O={created:function(){var e=this;k.$on("selectedFilter",function(t){return e.filter=t})},data:function(){return{posts:r,step:1,image:"",filters:l,filter:"",caption:""}},components:{PhoneBody:F},methods:{upLoadImage:function(e){var t=this,a=e.target.files;if(a.length){var s=new FileReader;s.readAsDataURL(a[0]),s.onload=function(e){t.image=e.target.result},this.step=2}},goToHome:function(){this.step=1,this.image="",this.filter="",this.caption=""},share:function(){var e={username:"鲍鹏",userImage:"http://image01.oneplus.cn/user/201902/16/1198/c02e06e846498a03179219a7525e15c6.jpg",postImage:this.image,likes:0,hasBeenLiked:!1,caption:this.caption,filter:this.filter};this.posts.unshift(e),this.goToHome()}}},L=O,S=(a("5c0b"),Object(d["a"])(L,i,n,!1,null,null,null)),P=S.exports,T=a("e52d"),B=a.n(T);s["a"].use(B.a),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("5e27"),i=a.n(s);i.a},"5e27":function(e,t,a){},"78e5":function(e,t,a){"use strict";var s=a("b6ea"),i=a.n(s);i.a},8876:function(e,t,a){},"8f8c":function(e,t,a){},b6ea:function(e,t,a){}});
//# sourceMappingURL=app.212ebda6.js.map