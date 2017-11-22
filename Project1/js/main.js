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
 	$(".menu-acco__trigger").on("click", (e) => {
 		e.preventDefault();

 		const $thisAccMenu = $(e.currentTarget);
 		const containerAccMenu = $thisAccMenu.closest(".menu-acco");
 		const itemAccMenu = $thisAccMenu.closest(".menu-acco__item");
 		const itemsAccMenu = $(".menu-acco__item", containerAccMenu);
 		const otherContentAccMenu = $(".menu-acco__content", containerAccMenu);
 		const contentAccMenu = $(".menu-acco__content", itemAccMenu);
 		const texBlockAccMenu = $(".menu-acco__text", itemAccMenu);
 		const regWidth = texBlockAccMenu.outerWidth();	

 		if (!itemAccMenu.hasClass("--active")) {
 			itemsAccMenu.removeClass("--active");
 			itemAccMenu.addClass("--active");

 			otherContentAccMenu.css({
 				"width" : 0
 			})
	 			if (regWidth > 500) {
	 			contentAccMenu.css({
	 				"width" : regWidth
	 			})
	 			} else {
	 			contentAccMenu.css({
	 				"width" : 500
	 			})
	 			}
 		} else {

 			itemAccMenu.removeClass("--active");
 			contentAccMenu.css({
 				"width" : 0
 			})
 		}

 	});
 	
 	
});