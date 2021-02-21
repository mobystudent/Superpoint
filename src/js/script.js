'use strict';

import $ from 'jquery';

$(window).on('load', () => {
	showTabs();
	showSettings();
	toggleTabs();
});

function showTabs() {
	$('#showtabs').click(function() {
		$(this).toggleClass('tabs__btn--active');
		$('.tabs__wrap').toggleClass('tabs__wrap--active');
	});
}

function showSettings() {
	$('#showSettings').click(() => {
		$('.header__list').slideToggle();
	});
}

function toggleTabs() {
	$('.tabs__btn--point').click(function() {
		const numberTab = $(this).data('tab');

		$('.main__content').hide();
		$(`.main__content[data-content=${numberTab}]`).show();
	});
}
