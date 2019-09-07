(function ($){
    var page = {
        // 入口函数
        init: function(dom, obj){
            this.fillHtml(dom, obj);
            this.bindEvent(dom, obj);
            console.log(obj)
        },
        // 插入dom
        fillHtml: function(dom, obj){
            dom.empty();
            // 容错处理
            if(obj.current < 1 || obj.pageCount < 1 || obj.current > obj.pageCount) return;
            
            // 上一页
            if(obj.current == 1){
                dom.append('<a hrefjavascript;: class="prev disabled"><上一页</a>');
            }else{
                dom.append('<a hrefjavascript;: class="prev"><上一页</a>');
            }

            // 总页数小于7
            if(obj.pageCount <= 7){
                for(var i = 1; i <= obj.pageCount; i++){
                    if(i == obj.current){
                        dom.append('<span class="active">' + i +'</span>');
                    }else{
                        dom.append('<a href="javascript:;" class="item">' + i + '</a>');
                    }
                }
            };
            // 总页数大于7
            if(obj.pageCount > 7){
                var start,
                    end;
                    // 当前页小于4
                if(obj.current <= 4){
                    start = 1;
                    end = 6
                    for(; start < end; start++){
                        // console.log(12)
                        if(start == obj.current){
                            dom.append('<span class="active">' + start +'</span>');
                        }else{
                            dom.append('<a href="javascript:;" class="item">' + start + '</a>');
                        }
                    }
                    dom.append('<span class="omit">...</span>');
                    dom.append('<a href="javascript:;" class="item">' + obj.pageCount + '</a>');
                };

                if(obj.current > 4){
                    // 总页数减去当前页大于4
                    if(obj.pageCount - obj.current  >= 4){
                        start = obj.current - 2;
                        end = obj.current + 2;
                        dom.append('<a href="javascript:;" class="item">1</a>');
                        dom.append('<span class="omit">...</span>');
                        for(; start <= end; start++){
                            
                            if(start == obj.current){
                                dom.append('<span class="active">' + start +'</span>');
                            }else{
                                dom.append('<a href="javascript:;" class="item">' + start + '</a>');
                            }
                        }
                        dom.append('<span class="omit">...</span>');
                        dom.append('<a href="javascript:;" class="item">' + obj.pageCount + '</a>');
                    }
                    // 总页数减去当前页小于4
                    else if(obj.pageCount - obj.current  < 4){
                        start = obj.pageCount - 5;
                        end = obj.pageCount;
                        dom.append('<a href="javascript:;" class="item">1</a>');
                        dom.append('<span class="omit">...</span>');
                        for(; start <= end; start++){
                            if(start == obj.current){
                                dom.append('<span class="active">' + start +'</span>');
                            }else{
                                dom.append('<a href="javascript:;" class="item">' + start + '</a>');
                            }
                        }
                    }   
                }    
            }


            // 下一页
            if(obj.pageCount == obj.current){
                dom.append('<a href="script:;" class="next disabled">下一页></a>')
            }else{
                dom.append('<a href="script:;" class="next">下一页></a>')
            }

        },
        // 事件绑定
        bindEvent: function(dom, obj){
            var _this = this;
            dom.on("click",".item",function(){
                obj.current = parseInt( $(this).text() );
                _this.fillHtml(dom, obj);
            })
            dom.on("click",function(e){
                // console.log(e.target)
                if(e.target.className == "prev"){
                    obj.current--;
                }else if(e.target.className == "next"){
                    obj.current++;
                }
                _this.fillHtml(dom, obj);
            })
        }
    };

    $.fn.extend({
        paging: function (options){
            // console.log(this);
            var obj = {
                pageCount: 10,
                current: 1
            }
            var arges = $.extend(obj, options);
            page.init(this, arges);

        },
        
        
    })
   

})($)