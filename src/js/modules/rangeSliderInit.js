import $ from "jquery";
require('ion-rangeslider');

export default function rangeSliderInit() {
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		grid: false,
		step: 10,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs
	});


	function updateInputs(data) {
		$('.aside-filter__price-from').text(spaceBetweenNum(data.from));
		$('.aside-filter__price-to').text(spaceBetweenNum(data.to));
	}

	function spaceBetweenNum(n) {
		n += "";
		n = new Array(4 - n.length % 3).join("U") + n;
		return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
	}


}