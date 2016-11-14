$('.filter-btn').click(function(event) {
	var drop = $(this).next();
	if(drop.is(':hidden')){
		drop.slideDown(250)
		$(this).addClass('active')
	}
	else{
		drop.slideUp(250)
		$(this).removeClass('active')
	}
});

$('#card-slider').bxSlider({
  pagerCustom: '#thumb',
  mode: 'fade'
});
$(document).ready(function() {
  $(".fancybox").fancybox({
    padding : 0,
    openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});