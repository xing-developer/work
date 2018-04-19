/*选项卡*/
function setTab(name,cursel,n){for(i=1;i<=n;i++){var menu=document.getElementById(name+i);var con=document.getElementById("con_"+name+"_"+i);menu.className=i==cursel?"hover":"";con.style.display=i==cursel?"block":"none";
}}
//侧边浮动
$(function(){
   $(".zxzs").hover(function() {
        $(".zxzs_c").show();
    },function(){
		$(".zxzs_c").hide();
	});
});
$(document).ready(function(){
	$(function(){
		var len=$('.qie_roll_r').width() > 100 ? 100 : $('.qie_roll_r').width();
		var wall=0;
		$('.qie_text_r').each(function(){
			var b=$('.qie_roll_r').length;
			wall=len*b;	
			$(this).width(wall);
		})
		$('.qie_r_right').click(function(){
			var sz=$('.qie_roll_r').length;
			var wh=len*(sz-2);
			var wid=len*(sz-1);
			$('.qie_r_left').removeClass('qie_r_left1');
			var l=$('.qie_text_r').css('left');
			if(Math.abs(parseInt(l))>=wh){
				$(this).addClass('qie_r_right1');
				$('.qie_text_r').animate({'left':'-'+wid+'px'})
			}else{
				$('.qie_text_r').animate({'left':'-='+len+'px'})
			}
		})
		$('.qie_r_left').click(function(){
			$('.qie_r_right').removeClass('qie_r_right1');
			var l=$('.qie_text_r').css('left');
			var wh=len*(-1);
			if(l>=wh+"px"){
				$(this).addClass('qie_r_left1');
				$('.qie_text_r').animate({'left':'0px'})
			}else{
				$('.qie_text_r').animate({'left':'+='+len+'px'})
			}
		})
	})
})
//
$(function(){
	$(".picnews_tab").hide();
	$(".picnews_list1").hover(function(){
		$(this).find(".picnews_tab").show();
	},function(){
		$(this).find(".picnews_tab").hide();
	})
	$(".picnews_list2").hover(function(){
		$(this).find(".picnews_tab").show();
	},function(){
		$(this).find(".picnews_tab").hide();
	})	
})