// JavaScript Document
$(function() {
		   
	var $news=$(".news");
	$news.show();
	$('.hnews').click(function(){
		if($news.is(":visible")){
			$news.hide();
		}else{
			$news.show();
		}
	});
		   
	/*$('.bottom_btn_open').click(function(){
		$('.ad_layor').slideToggle("slow");
		$(this).hide();
	});*/
	$('.bottom_btn_close').click(function(){
		$('.ad_layor').slideToggle("slow");	
		var t=setTimeout("$('.bottom_btn_open').show()",800)
	});
	/*$('.wight_point').click(function(){
		$('.wight_point').removeClass('blue_point');
		$(this).addClass('blue_point');
	});*/
	$('#person_phone').hover(function(){
		$(this).children('.advertiser_habble').fadeIn();
		$(this).children('#person_phone_flah').css('visibility','hidden');
	},function(){
		$(this).children('.advertiser_habble').hide();
		$(this).children('#person_phone_flah').css('visibility','visible');
	});
	$('#person_ipad').hover(function(){
		$(this).children('.publisher_habble').fadeIn();
		$(this).children('#person_ipad_flah').css('visibility','hidden');
	},function(){
		$(this).children('.publisher_habble').hide();
		$(this).children('#person_ipad_flah').css('visibility','visible');
	});
	$('#person_desk').hover(function(){
		$(this).children('.developer_habble').fadeIn();
		$(this).children('#person_desk_flah').css('visibility','hidden');
	},function(){
		$(this).children('.developer_habble').hide();
		$(this).children('#person_desk_flah').css('visibility','visible');
	});
	$('#person_desk').hover(function(){
		$(this).children('.developer_habble').fadeIn();
		$(this).children('#person_desk_flah').css('visibility','hidden');
	},function(){
		$(this).children('.developer_habble').hide();
		$(this).children('#person_desk_flah').css('visibility','visible');
	});
	$('#person_left_1,#person_left_2,#person_left_3').hover(function(){
		$(this).children('.advertiser_habble').fadeIn();
		$(this).children('.sec_person_ipone_hubble').css('visibility','hidden');
	},function(){
		$(this).children('.advertiser_habble').hide();
		$(this).children('.sec_person_ipone_hubble').css('visibility','visible');
	});
	$('#person_right_1,#person_right_2,#person_right_3').hover(function(){
		$(this).children('.man_habble').fadeIn();
		$(this).children('.sec_person_desk_hubble').css('visibility','hidden');
	},function(){
		$(this).children('.man_habble').hide();
		$(this).children('.sec_person_desk_hubble').css('visibility','visible');
	});
	$('#left_hand,#left_hand_six').hover(function(){
		$(this).children('.big_hubble_five').fadeIn();
		$(this).children('.small_hubble_five').css('visibility','hidden');
	},function(){
		$(this).children('.big_hubble_five').hide();
		$(this).children('.small_hubble_five').css('visibility','visible');
	});
});
//add by qingfang 2013.8.23
$(function(){
	$('.expic_single').mouseenter(function(){
		$('.expic_hover').hide();
		$(this).parent('.expic_list ul li').children('.expic_hover').show();
	});	
	//$('.expic_single').mouseleave(function(){
		//$('.expic_hover').hide();
		//$(this).parent('.expic_list ul li').children('.expic_hover').hide();
	//});	
});

/*******************************************************
@ These JS codes below is created
@ By      : Liu Kangning
@ For     : Ripple mobile version
@ On      : 6th Oct 2013
@ QQ      : 410532598
@ Email   : liukangning@gmail.com
@ Github  : https://github.com/decradish
********************************************************/
$(function(){
	//for top left nav in mobile version
	var oNav = $("ul.nav");
	var sATags = '<div id="mobile_nav"><div class="mobile_nav_core">';
	oNav.find("a").each(function(){
		if(!$(this).hasClass("logo")){
			sATags += $(this)[0].outerHTML;
		}
	});
	sATags += oNav.next(".login_btn")[0].outerHTML;
	sATags += '</div></div>';
	oNav.next(".login_btn")
		.after(sATags)
		.next("#mobile_nav").click(function(){
			var oThis = $(this);
			if(oThis.hasClass("showing")){
				oThis
					.find("div.mobile_nav_core").animate({
						marginTop: -350
					})
					.parent().removeClass("showing");
			}else{
				oThis
					.find("div.mobile_nav_core").animate({
						marginTop: 0
					})
					.parent().addClass("showing");
			}
		});

	//for crumbs dropdown menu
	//$("div.left_slidebar h3#on a").click
	$("#on").click(function(){
		$(this)
			.addClass("siblings")
			.siblings("h3").show();
	})
	.find("a").attr("href", "JavaScript:void(0);");
});



