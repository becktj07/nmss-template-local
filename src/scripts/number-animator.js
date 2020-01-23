var section = document.querySelector('.numbers-section');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
    var shouldAnimate = (window.scrollY + window.innerHeight - 200) >= section.offsetTop;

	if (shouldAnimate && !hasEntered) {
  	hasEntered = true;
    
    $('.value').each(function () {
    	$(this).prop('Counter', 0).animate({
        Counter: $(this).text().replace(/,/g, '')
    	}, {
            duration: 2500,
            easing: 'swing',
                step: function (now) { 
                    $(this).text(Math.ceil(now).toLocaleString());
                }
   		});
    });
  }
});