$(function () {
	"use strict";
	//navbar scroll
	$(".navbar li a[href*=#]").click(function () {
		if (
			location.pathname.replace(/^\//, "") ==
			this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var $target = $(this.hash);
			$target =
				($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$("html,body").animate({ scrollTop: targetOffset }, 1000);
				return false;
			}
		}
	});
	//elements smooth scroll
	$(".upper-bar .get-quote").click(function () {
		$("html, body").animate(
			{
				scrollTop: $(".choose-us").offset().top,
			},
			1000
		);
	});
	//Adjust Slider Height
	var winH = $(window).height(),
		upperH = $(".upper-bar").innerHeight(),
		navH = $(".navbar").innerHeight();
	$(".slider, .carousel-item").height(winH - (upperH + navH));
	//Featured Work Shuffle
	$(".featured-work ul li").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
		if ($(this).data("class") === "all") {
			$(".shuffle-imgs .col-sm").css("opacity", 1);
		} else {
			$(".shuffle-imgs .col-sm").css("opacity", "0.08");
			$($(this).data("class")).parent().css("opacity", 1);
		}
	});
});
