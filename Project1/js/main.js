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
	 
		
//map settins 
	function initMap() {
		var mapEl = document.getElementById('map');
		var image = "../img/icons/map-marker.svg";
		var style = 
		[
			{
				"featureType": "landscape",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 60
					}
				]
			},
			{
				"featureType": "road.local",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 40
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 30
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ef8c25"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#b6c54c"
					},
					{
						"lightness": 40
					},
					{
						"saturation": -40
					}
				]
			},
			{}
		]
	
        var uluru = {
			lat: 59.939095, 
			lng: 30.315868
		};
        var map = new google.maps.Map(mapEl, {
          zoom: 11,
		  center: uluru,
		  styles: style
        });
        var markers = locations.map(function(location, i) {
			return new google.maps.Marker({
			  position: location,
			  icon: image
			});
		});

		var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
		
	}
			var locations = [
				{lat: 59.914722, lng: 30.493762},
				{lat: 59.944877, lng: 30.382525},
				{lat: 59.890923, lng: 30.313860},
				{lat: 59.972079, lng: 30.309741}
			]
