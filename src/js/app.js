if (typeof PG === 'undefined') PG = {};
if (typeof PG.app === 'undefined') PG.app = {};

(function($, exports, window) {

	$(document).ready(function() {

		var $scope = $('body');
		var body = $scope;

		var agent = navigator.userAgent||navigator.vendor||window.opera;

		var isMobile = PG.useragent.isMobile(agent);

		var youtubeUrlsArray = ['8XQIgLq0FLY', 'TwNQL7NU1Cw', 'DAmrnw89l44', '1YaBUQo5Uj8', 'G8C4bYndrc0', '-Hn3iF67mdw'];
		var vidI = Math.floor(Math.random()*youtubeUrlsArray.length);

		//var youtubeSingleUrl = 'AnDutViIj-8';

		if(!isMobile) {
			$('.js-video-wrapper').tubular({videoId: youtubeUrlsArray[vidI]});
		} else {

			/**
			 * Below code obtains image from YT video, good for when PG teaser comes out
			 **/

			 /**var getYoutubeImageFrame = 'http://img.youtube.com/vi/' + youtubeSingleUrl + '/maxresdefault.jpg';
			 $('body').css('background', '#000 url(' + getYoutubeImageFrame + ') no-repeat center center');
			 $('body').css('background-size', 'cover');
			 **/

		  body.addClass('static-video-loop');

			var loopBackgroundArray = ['taxi', 'puddle', 'police', 'sign'];
			var randomBackground = Math.floor(Math.random()*loopBackgroundArray.length);

			body.addClass('static-video-loop__' + loopBackgroundArray[randomBackground]);
		}

		// Mute/Unmute
		$('.js-mute-audio').click(function() {
			$(this).toggleClass('is-mute');
		});

		$('.js-refresh-video').click(function() {
			$(this).addClass('is-loading');
			vidI++;
			vidI %= youtubeUrlsArray.length;
			player.loadVideoById(youtubeUrlsArray[vidI]);
		});

		// Date Behaviours

		var currentYear = new Date().getFullYear();
		var $dateEl = $('.js-current-date');

		$dateEl.each(function() {
			$(this).html(currentYear);
		});

	});
})(
	jQuery,
	PG.app,
	window
);