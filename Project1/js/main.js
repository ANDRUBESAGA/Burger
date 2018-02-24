$(document).ready(() => {
 	$(".nav__hamburger--link").on("click", (e) =>{
 		e.preventDefault();

  	let changeLogo = $(".nav__hamburger--link").toggleClass("--active");
  	let openMenu = $(".hamburger__menu--list").toggleClass("--active");
	});
 	$(".slider__components").on("click", (e) =>{
 		e.preventDefault();

  	let openComponents = $(".slider__components").toggleClass("--active");  	
	});


 	$(".team-acco__trigger").on("click", (e) => {
 		e.preventDefault();

 		const $thisAccTeam = $(e.currentTarget);
 		const containerAccTeam = $thisAccTeam.closest(".team-acco");
 		const itemAccTeam = $thisAccTeam.closest(".team-acco__item");
 		const itemsAccTeam = $(".team-acco__item", containerAccTeam);
 		const otherContentAccTeam = $(".team-acco__content", containerAccTeam);
 		const contentAccTeam = $(".team-acco__content", itemAccTeam);
 		const texBlockAccTeam = $(".team-acco__text", itemAccTeam);
 		const regHeightAccTeam = texBlockAccTeam.outerHeight();	

 		if (!itemAccTeam.hasClass("--active")) {
 			itemsAccTeam.removeClass("--active");
 			itemAccTeam.addClass("--active");

 			otherContentAccTeam.css({
 				"height" : 0
 			})

 			if (regHeightAccTeam > 150) {
 			contentAccTeam.css({
 				"height" : regHeightAccTeam
 			})
 			} else {
 			contentAccTeam.css({
 				"height" : 150
 			})
 			}
 		} else {

 			itemAccTeam.removeClass("--active");
 			contentAccTeam.css({
 				"height" : 0
 			})
 		}
 	});

		
});
//fancybox
$(function () {
	$("[data-fancybox]").fancybox({
	// Options will go here
	});
});

//slick
	$(document).ready(function(){
		$('.burgers__container').slick({
		});
	});
 	
	function initMap() {
		var mapEl = document.getElementById('map');
        var uluru = {
			lat: -25.363, 
			lng: 131.044
		};
        var map = new google.maps.Map(mapEl, {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }