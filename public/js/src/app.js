/*
* jalousie JavaScript plugin.
* (c) 2013-2017, happyCoda.
* MIT License.
* https://github.com/happyCoda/jalousie
*/

$.fn.jalousie = function (params) {
  let docFrag = document.createDocumentFragment(),
    	$div,
      shutterNum = params.shutterNum || 10,
    	$img = this.find('img'),
    	imgWidth = $img.width(),
    	imgHeight = $img.height(),
      $shutters;

    this.css({
      position: 'relative'
    });

  	for (let i = 0; i < shutterNum; i += 1) {
      $div = $('<div/>', {
        class: 'shutter'
      }).css({
        position: 'absolute',
        width: 0,
        height: imgHeight,
    		left: Math.ceil((i * (imgWidth / shutterNum))) + 'px',
    		top: '0px',
        backgroundColor: params.shutterBgColor || 'rgb(255, 255, 255)'
      });
  		docFrag.appendChild($div.get(0));
  	}

  	this.append($(docFrag));

  	$shutters = $('.shutter');

    function runAnimation() {
      return $shutters.animate({width: (Math.ceil(imgWidth / shutterNum)) + 'px'}, params.duration || 3000);
    }

    function hideElements() {
      if (params.hide) {
        $img.add($shutters).hide();
      }
    }

    $.when(runAnimation()).then(hideElements);
};
