jQuery(function ($) {
	"use strict"
	$(document).ready(function () {

		$('.toggle-submenu-show').on('click', function () {
			$('.toggle-submenu').slideToggle();
		});

		$('.menu-tggle').on('click', function () {
			$('.menu-toggle-bar').addClass('show');

		});

		$('.toggle-close-btn').on('click', function () {
			$('.menu-toggle-bar').removeClass('show');
		});




		$('.menu-search').on('click', function () {
			$('.search-panel').removeClass('popup-hide');
		});

		$('.btn-popup-close').on('click', function () {
			$('.search-panel').addClass('popup-hide');
		});



		// slider

		var swiper = new Swiper('.swiper', {
			slidesPerView: 4,
			direction: getDirection(),
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.slide-btn-next',
				prevEl: '.slide-btn-prev',
			},
			on: {
				resize: function () {
					swiper.changeDirection(getDirection());
				},
			},
		});

		function getDirection() {
			var windowWidth = window.innerWidth;
			var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

			return direction;
		}

		//slider2
		var swiper = new Swiper('.mySwiper2', {
			slidesPerView: 3,
			direction: getDirection(),
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.slide-btn-next',
				prevEl: '.slide-btn-prev',
			},
			on: {
				resize: function () {
					swiper.changeDirection(getDirection());
				},
			},
		});

		function getDirection() {
			var windowWidth = window.innerWidth;
			var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

			return direction;
		}
		//slider1
		var swiper = new Swiper('.mySwiper1', {
			slidesPerView: 1,
			direction: getDirection(),
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.slide-btn-next',
				prevEl: '.slide-btn-prev',
			},
			on: {
				resize: function () {
					swiper.changeDirection(getDirection());
				},
			},
		});

		function getDirection() {
			var windowWidth = window.innerWidth;
			var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

			return direction;
		}
		//slider
		$('#slider').owlCarousel({
			loop: true,
			margin: 10,
			nav: false,
			dots: false,
			autoplay: true,

			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		})


		// Isotop init
		var gridfilter = $('#news-filter-content');
		if (gridfilter.length) {
			$('#news-filter-content').imagesLoaded(function () {
				$('#news-filter-nav').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});
				var $grid = $('#news-filter-content').isotope({
					itemSelector: '.news-filter-item',
					percentPosition: true,
					masonry: {
						columnWidth: '.news-filter-item',
					}
				});
			});
		}

		if ($('#news-filter-nav button').length) {
			var projectfiler = $('#news-filter-nav button');
			if (projectfiler.length) {
				$('#news-filter-nav button').on('click', function (event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			}
		}

		// capital-news slider

		// Isotop init
		var gridfilter = $('#news-filter-content1');
		if (gridfilter.length) {
			$('#news-filter-content1').imagesLoaded(function () {
				$('#news-filter-nav1').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});
				var $grid = $('#news-filter-content1').isotope({
					itemSelector: '.news-filter-item1',
					percentPosition: true,
					masonry: {
						columnWidth: '.news-filter-item1',
					}
				});
			});
		}

		if ($('#news-filter-nav1 button').length) {
			var projectfiler = $('#news-filter-nav1 button');
			if (projectfiler.length) {
				$('#news-filter-nav1 button').on('click', function (event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			}
		}

		// Isotop3 init
		var gridfilter = $('#news-filter-content3');
		if (gridfilter.length) {
			$('#news-filter-content3').imagesLoaded(function () {
				$('#news-filter-nav3').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});
				var $grid = $('#news-filter-content3').isotope({
					itemSelector: '.news-filter-item3',
					percentPosition: true,
					masonry: {
						columnWidth: '.news-filter-item3',
					}
				});
			});
		}

		if ($('#news-filter-nav3 button').length) {
			var projectfiler = $('#news-filter-nav3 button');
			if (projectfiler.length) {
				$('#news-filter-nav3 button').on('click', function (event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			}
		}




		// Isotop init
		var gridfilter = $('#news-filter-subcontent');
		if (gridfilter.length) {
			$('#news-filter-subcontent').imagesLoaded(function () {
				$('#news-filter-subnav').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});
				var $grid = $('#news-filter-subcontent').isotope({
					itemSelector: '.news-filter-subitem',
					percentPosition: true,
					masonry: {
						columnWidth: '.news-filter-subitem',
					}
				});
			});
		}

		if ($('#news-filter-subnav button').length) {
			var projectfiler = $('#news-filter-subnav button');
			if (projectfiler.length) {
				$('#news-filter-subnav button').on('click', function (event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			}
		}
		// Isotop init
		var gridfilter = $('#news-filter-content4');
		if (gridfilter.length) {
			$('#news-filter-content4').imagesLoaded(function () {
				$('#news-filter-nav4').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({
						filter: filterValue
					});
				});
				var $grid = $('#news-filter-content4').isotope({
					itemSelector: '.news-filter-item4',
					percentPosition: true,
					masonry: {
						columnWidth: '.news-filter-item4',
					}
				});
			});
		}

		if ($('#news-filter-nav4 button').length) {
			var projectfiler = $('#news-filter-nav4 button');
			if (projectfiler.length) {
				$('#news-filter-nav4 button').on('click', function (event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			}
		}





		var $item = 0,
			$itemNo = $(".hero figure").length;
		function transitionSlide() {
			$item++;
			if ($item > $itemNo - 1) {
				$item = 0;
			}
			$(".hero figure").removeClass("on");
			$(".hero figure")
				.eq($item)
				.addClass("on");
		}
		var $autoTransition = setInterval(transitionSlide, 3500);

		$(".hero figure").click(function () {
			clearInterval($autoTransition);
			$item = $(this).index();
			$(".hero figure").removeClass("on");
			$(".hero figure")
				.eq($item)
				.addClass("on");
			$autoTransition = setInterval(transitionSlide, 3500);
		});




		//...................//scroollbtn//.................................................//


		var btn = $('#scrolltop');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});






		//Stikcy Header
		var menubar = $('#sp-menubar');
		// var slidebar = $('#slidebar');
		if ($('#sp-menubar').length) {
			var headerHeight = menubar.outerHeight();
			var stickyHeaderTop = menubar.offset().top;
			//menubar.css({"top":stickyHeaderTop});
			//slidebar.css({"margin-top":headerHeight});
			var stickyHeader = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > stickyHeaderTop) {
					menubar.addClass('header-sticky');
					//menubar.css({"top":"0px"});
				} else {
					if (menubar.hasClass('header-sticky')) {
						menubar.removeClass('header-sticky');
						//menubar.css({"top":stickyHeaderTop});
					}
				}
			};
			stickyHeader();
			$(window).scroll(function () {
				stickyHeader();
			});
		}

	});
});

