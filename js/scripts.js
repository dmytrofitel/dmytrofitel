
$(document).ready(function(){
	$('.scroll-to').click(function (e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$("body").addClass('scroll-text');
		setTimeout(function(){
			$("body").removeClass('scroll-text');
		}, 1400);
		$('html, body, h1').stop().animate({
			scrollTop: offsetTop 
		}, 1400);
		return false;
	});/* Scroll to */
	// $('.bg-img').each(function() {
	// 	$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	// });
	// $('#fullpage').fullpage({
	// 	anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
	// 	menu: '#main-nav',
	// 	css3: true,
	// 	scrollingSpeed: 1000
	// });
});
$(document).scroll(function(){
	var scrollPos = $(this).scrollTop();
	$('h1').css({
		'opacity' : 1-(scrollPos/1000),
		'transform': 'translate(0%, ' + scrollPos /20 + '%' 
	});
	$('.dev').css({
		'opacity' : 1-(scrollPos/500),
		'transform': 'translate(0%, ' + scrollPos /1 + '%' 
	});
	$('.content').css({
		'transform': 'translate(0%, ' + scrollPos /20 - '%'
	});
});

/* Map */
function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: new google.maps.LatLng(49.83826, 24.02324),
		scrollwheel: false,
		mapTypeControl: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT_TOP
		},
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		styles: [{
			
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 40
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"saturation": "1"
			},
			{
				"weight": "1.00"
			},
			{
				"color": "#f1e8b8"
			}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "labels",
			"stylers": [
			{
				"visibility": "simplified"
			},
			{
				"color": "#f1e8b8"
			}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f1e8b8"
			},
			{
				"weight": "2.24"
			}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#f1e8b8"
			}
			]
		},
		{
			"featureType": "administrative.neighborhood",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "geometry",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#000000"
			}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#191919"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 21
			},
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 18
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": 19
			},
			{
				"visibility": "on"
			},
			{
				"color": "#272727"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#8adcfd"
			},
			{
				"lightness": 17
			}
			]
		}]
	});
var marker = new google.maps.Marker({
	position: new google.maps.LatLng(49.85302327, 24.01955187),
	icon: {
		url: "images/greeting-man.svg",
		scaledSize: new google.maps.Size(80,90)
	},
	map: map
});
}