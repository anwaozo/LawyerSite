function openCity(evt, caseType) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(caseType).style.display = 'block';
	evt.currentTarget.className += ' active';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// AOS Animation Initialize
AOS.init({ once: true });

// Fixed header on scoll
$(window).scroll(function () {
	if ($(window).scrollTop() >= 200) {
		$('.header').addClass('header-fixed');
	} else {
		$('.header').removeClass('header-fixed');
	}
});
