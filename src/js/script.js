'use strict';

import $ from 'jquery';

$(window).on('load', () => {
	showTabs();
});

function showTabs() {
	$('#showtabs').click(function() {
		$(this).toggleClass('tabs__btn--active');
		$('.tabs__wrap').toggleClass('tabs__wrap--active');
	});
}
