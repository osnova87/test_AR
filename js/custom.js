$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




// SLICK SLIDER

$(document).ready(function(){
    $('.single-item').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        zIndex: 1000
	});
});

// MENU <=767 and departed elements

var nav = jQuery('nav'),
	ul  = jQuery('.menu--inside--1');

function windowSize(){
	if ($(window).width() <= '766') {
		ul.insertAfter(".navbar--button--push");
	} else {
		nav.insertAfter(".main-wrapper hr:eq(0)");
		ul.insertAfter("#button--320");
	}
}
$(window).on('load resize',windowSize);

// Open Navigation - 1 onclick

function one_menu (blockId){
	if ($(blockId).css('display') == 'none') {
		$(blockId).animate({height: 'show'}, 500);
	} else {
		$(blockId).animate({height: 'hide'}, 500);
	}
}

function one_menu_2 (blockId){
	if ($(blockId).css('display') == 'none') {
		$(blockId).animate({height: 'show'}, 500);
	} else {
		$(blockId).animate({height: 'hide'}, 500);
	}
}
// Close Navigation when you are clicking anywhere

jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".menu--inside--1, .menu--inside--2");
		var bot = $(".navbar--button--push, .nav--title--menu2");
		if (!div.is(e.target)
			&& !bot.is(e.target)
			&& div.has(e.target).length === 0) {
			div.hide();
		}
	});
});

