
$(function(){
	var adddd = $(".receiver").find("dd").html();
	var addname = $(".bm-list-right");
	var ddhtml = "";
	var addhtml = "";
	var is = true;
	$(".bm-list-left").each(function() {
		$(this).find(".checkbox").click(function(){
			var checkf = $(this).parent(this);
			var checkc = checkf.parent(checkf).find(".bm-list-right")
			if($(this).attr("checked")){
				checkc.find("li").each(function(){
					var dataid = $(this).find(".checkbox").attr("data-id");
			    	var remove = $(".receiver-right").find("." + dataid)
			    	remove.parent(remove).remove();
				})
			    ddhtml = $(".receiver-right").html();
				$(this).removeAttr("checked");
				checkc.find(".checkbox").removeAttr("checked");
			}else{
				ddhtml = $(".receiver-right").html();
				checkc.find("li").each(function(){
			    	var dataid = $(this).find(".checkbox").attr("data-id");
			    	if($(this).find(".checkbox").attr("checked")){
			    		addhtml += "";
			    	}else{
						addhtml += "<li>" + $(this).find("label").text() + '<em class="' + dataid +'"></em></li>';
			    	}
				})
				ddhtml += addhtml;
				$(".receiver-right").html(ddhtml);
				addhtml = "";
				$(this).attr("checked",true);
				checkc.find(".checkbox").attr("checked",true);
				checkc.find(".checkbox").prop("checked",true);
			}
			del();
		});
	});
	$(".bm-list-right").find("li").each(function() {
	    var check = $(this).find(".checkbox");
	    check.click(function(){
		    if(!check.attr("checked")){
		    	$(this).attr("checked",true);
		    	$(this).prop("checked",true);
		    	var dataid = $(this).attr("data-id");
		    	var addhtml = "<li>" + $(this).parent(this).find("label").text() + '<em class="' + dataid +'"></a></em>';
				var receiver = $(".receiver-right").find("li");
		    	if(receiver.length > 0){
					receiver.each(function(){
			    		var className = $(this).find("a").attr("class");
			    		if(className === dataid){
			    			is = false;
			    			return false
			    		}else{
			    			is = true
			    		}
			    	})
			    	if(is === true){
			    		ddhtml += addhtml;
			    	}else{
			    		ddhtml = ddhtml;
			    	}
		    	}else{
		    		ddhtml = addhtml;
		    	}
		    	$(".receiver-right").html(ddhtml);
		    	var a = $(this).parent(this);
		    	var b = a.parent(a);
		    	var c = b.parent(b);
		    	var d = c.find(".bm-list-left");
		    	b.find("li").each(function(){
		    		if($(this).find(".checkbox").attr("checked")){
		    			is = true;
			    	}else{
			    		is = false;
			    		return false
			    	}
		    	})
		    	if(is === true){
			    	d.find(".checkbox").attr("checked",true);
					d.find(".checkbox").prop("checked",true);
			    }
		    }else{
		    	var dataid = $(this).attr("data-id");
		    	var remove = $(".receiver-right").find("." + dataid)
		    	remove.parent(remove).remove();
		    	$(this).removeAttr("checked");
		    	ddhtml = $(".receiver-right").html();
		    	var a = $(this).parent(this);
		    	var b = a.parent(a);
		    	var c = b.parent(b);
		    	var d = c.find(".bm-list-left");
		    	d.find(".checkbox").removeAttr("checked");
		    }
		    del();
		})
	});
	function del(){
		$(".receiver-right").find("li").each(function(){
			$(this).find("em").click(function(){
				var emclass = $(this).attr("class");
				var checkdataid = $(".checkbox[data-id="+emclass+"]");
				checkdataid.removeAttr("checked");
				ddhtml = $(".receiver-right").html();
			    var remove = $(".receiver-right").find("." + emclass)
			    remove.parent(remove).remove();
		    	var a = checkdataid.parent(checkdataid);
		    	var b = a.parent(a);
		    	var c = b.parent(b);
		    	var d = c.find(".bm-list-left");
		    	d.find(".checkbox").removeAttr("checked");
			})
		})
	}
})

$(function(){
	$(".bumen").find(".down").hide();
	$(".bumen").find(".up").click(function(){
		$(".bumen-list").hide(500);
		$(this).hide();
		$(".bumen").find(".down").show();
	})
	$(".bumen").find(".down").click(function(){
		$(".bumen-list").show(500);
		$(this).hide();
		$(".bumen").find(".up").show();
	})
	$(".msg-info-btm").find("textarea").focus(function(){
    	$(this).css("color","#000000");
  	});
  	$(".msg-info-btm").find("textarea").blur(function(){
    	$(this).css("color","#cccccc");
  	});
})