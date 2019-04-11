(function($){
    $.pop = {
        msg:function(str){ 
            layer.open({
                content: str,
                skin: 'msg',
                time:1, //2秒后自动关闭
              });
        },
        load:function (msg) { 
            if (msg == "" || msg == undefined || msg == null) {
                msg="加载中"
            }
            layer.open({type: 2,shadeClose:false,content:msg});
        },
        clearLoad:function () { 
            layer.close(0);
        },
        clearAll:function () { 
            layer.closeAll();
        },
        alert:function(title1,message,op,confirm,cancle){
        	layer.open({
                title: [title1, 'background-color: #fff;'],
			    content: message,
			    btn: [op,'取消'],
                shadeClose: false,
                yes: function(index){
                    // layer.close(index)
                    confirm(index);
                },
                no:function(index){
                    cancle(index);
                    layer.close(index)
                }  
			});
        },
        okey:function(title1,message,op,confirm,cancle){
        	layer.open({
                title: [title1, 'background-color: #fff;'],
			    content: message,
			    btn: op,
                shadeClose: false,
                yes: function(index){
                    confirm(index);
                    layer.close(index)
                },
                no:function(index){
                    cancle(index);
                    layer.close(index)
                }  
			});
        }
    }
    // Object.assign($.pop,{
    //     msg:function(str){ 
    //         layer.open({
    //             content: str,
    //             skin: 'msg',
    //             time:1, //2秒后自动关闭
    //           });
    //     },
    //     load:function (msg) { 
    //         if (msg == "" || msg == undefined || msg == null) {
    //             msg="加载中"
    //         }
    //         layer.open({type: 2,shadeClose:false,content:msg});
    //     },
    //     clearLoad:function () { 
    //         layer.close(0);
    //     },
    //     clearAll:function () { 
    //         layer.closeAll();
    //     },
    //     alert:function(title1,message,op,confirm,cancle){
    //     	layer.open({
    //             title: [title1, 'background-color: #fff;'],
	// 		    content: message,
	// 		    btn: [op,'取消'],
    //             shadeClose: false,
    //             yes: function(index){
    //                 confirm(index);
    //                 layer.close(index)
    //             },
    //             no:function(index){
    //                 cancle(index);
    //                 layer.close(index)
    //             }  
	// 		});
    //     },
    //     okey:function(title1,message,op,confirm,cancle){
    //     	layer.open({
    //             title: [title1, 'background-color: #fff;'],
	// 		    content: message,
	// 		    btn: op,
    //             shadeClose: false,
    //             yes: function(index){
    //                 confirm(index);
    //                 layer.close(index)
    //             },
    //             no:function(index){
    //                 cancle(index);
    //                 layer.close(index)
    //             }  
	// 		});
    //     }
    // })
}($));

/**点击头部发布**/
$(function(){
    $("#publish").click(function(){
        $("#toPublish").fadeIn();
        $("#mask").addClass('show');
    })
    $("#mask").click(function(){
        $("#toPublish").fadeOut();
        $(this).removeClass("show")
    })
})