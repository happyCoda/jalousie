/*
* PurrJS JavaScript library. 
* (c) 2013, happyCoda. 
* MIT License. 
* https://github.com/happyCoda/purrjs
*/

window.onload = function () {
	var docFrag = document.createDocumentFragment(),
	div,
	container = document.querySelector('.container'),
	img = document.querySelector('img'),
	imgSrc = img.getAttribute('src'),
	imgClone,
	imgWidth = parseInt(img.width, 10),
	imgHeight = parseInt(img.height, 10);


	$(img).hide();

	for (var i = 0; i < 10; i++) {
		div = document.createElement('div');
		div.setAttribute('class', 'shutter');
		div.style.width = imgWidth/10 + 'px';
		div.style.height = imgHeight + 'px';
		div.style.position = 'absolute';
		div.style.left = 0 + i*imgWidth/10 + 'px';
		div.style.top = '0px';
		div.style.backgroundColor = '#c33';
		imgClone = document.createElement('img');
		imgClone.setAttribute('src', imgSrc);
		imgClone.style.position = 'absolute';
		imgClone.style.left = -(0 + i*imgWidth/10) + 'px';
		imgClone.style.top = '0px';
		div.appendChild(imgClone);
		docFrag.appendChild(div);
	}


	container.appendChild(docFrag);

	$('.shutter').animate({width: 0}, 3000);

};