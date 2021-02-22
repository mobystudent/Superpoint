'use strict';

import $ from 'jquery';

$(window).on('load', () => {
	showTabs();
	showSettings();
	toggleTabs();
	showNav();
	showSteps(1);
	resizeModalNav();
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
		if ($(this).parent().hasClass('tabs__item--active')) return;

		const numberTab = $(this).data('tab');
		const svgHref = $(this).find('.icon__item').attr('xlink:href');

		$('.main__content').hide();
		$(`.main__content[data-content=${numberTab}]`).show();

		$('.tabs__item').map((i, item) => {
			$(item).find('.icon__item').attr('xlink:href', `#tab${i + 1}`);
			$(item).removeClass('tabs__item--active');
		});

		$(this).find('.icon__item').attr('xlink:href', `${svgHref}a`);
		$(this).parent().addClass('tabs__item--active');

		showSteps(numberTab);
	});
}

function showNav() {
	$('#burger').click(function() {
		$(this).toggleClass('header__burger--active');
		$('.modal').toggleClass('modal--active');
	});
}

function resizeModalNav() {
	$(window).resize(() => {
		if (window.innerWidth >= 499) {
			$('#burger').removeClass('header__burger--active');
			$('.modal').removeClass('modal--active');
		}
	})
}

function showSteps(id) {
	$(`.main__content[data-content=${id}] .step__item`).map((i, item) => {
		if ($(item).hasClass('step__item--done')) {
			$(item).find('.icon__item').attr('xlink:href', `#step${i + 1}d`);
		} else if ($(item).hasClass('step__item--active')) {
			$(item).find('.icon__item').attr('xlink:href', `#step${i + 1}a`);
		} else {
			$(item).find('.icon__item').attr('xlink:href', `#step${i + 1}`);
		}
	});
}
