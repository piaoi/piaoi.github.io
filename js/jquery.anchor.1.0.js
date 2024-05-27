/*
 * @Author: 木白广木林
 * @Date: 2024-01-09 15:30:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-01-10 19:40:46
 * @FilePath: \IndexWeb\js\jquery.anchor.1.0.js
 */
// by zhangxinxu  welcome to visit my personal website http://www.zhangxinxu.com/
// 任意锚点平滑跳转插件
// 2010-07-15 v1.0
(function($){
	$.fn.zxxAnchor = function(options){
		var defaults = {
			ieFreshFix: true,
			anchorSmooth: true,
			anchortag: "anchor",
			animateTime: 1000
		};
		var sets = $.extend({}, defaults, options || {});
	
		//点击锚点跳转
		$(this).each(function(){
			$(this).click(function(){
				var aim = $(this).attr(sets.anchortag).replace(/#/g,"");	//跳转对象id
				var pos = $("#"+aim).offset().top;
				if(sets.anchorSmooth){
					//平滑
					$("html,body").animate({scrollTop: pos}, sets.animateTime);	
				}else{
					$(window).scrollTop(pos);
				}
				return false;				   
			});	
		});
	};
})(jQuery);