if (document.getElementById('info')){

  var el = document.querySelector('.rate');
	od1 = new Odometer({
	  el: el,
	  value: 00,
	});

	var el = document.querySelector('.ratio1');
	od2 = new Odometer({
	  el: el,
	  value: 00,
	});
	var el = document.querySelector('.ratio2');
	od3 = new Odometer({
	  el: el,
	  value: 00,
	});

	var el = document.querySelector('.size');
	od4 = new Odometer({
	  el: el,
	  value: 00,
	});
	var el = document.querySelector('.majors');
	od5 = new Odometer({
	  el: el,
	  value: 00,
	});
	var el = document.querySelector('.awards');
	od6 = new Odometer({
	  el: el,
	  value: 00,
	});
	var el = document.querySelector('.found');
	od7 = new Odometer({
	  el: el,
	  value: 00,
	  format: 'dddd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
	});

	setTimeout( function(){
		od1.update(80)
	}, 1000 );

	setTimeout( function(){
		od2.update(1);
		od3.update(16)
	}, 1400 );

	setTimeout( function(){
		od4.update(200)
	}, 1800 );

	setTimeout( function(){
		od5.update(650)
	}, 1000 );
	setTimeout( function(){
		od6.update(100)
	}, 1400 );
	setTimeout( function(){
		od7.update(1919)
	}, 1800 );
};


$(window).load(function() {
  $imagePan_panning=$(".jumbotron .panning");
  $imagePan=$(".jumbotron");
  $imagePan_container=$(".jumbotron .imagePanner");

    containerWidth=$imagePan.width();
    containerHeight=$imagePan.height();
    totalContentW=$imagePan_panning.width();
    totalContentH=$imagePan_panning.height();
 
    function MouseMove(e){
        var mouseCoordsX=(e.pageX - $imagePan.offset().left);
        var mouseCoordsY=(e.pageY - $imagePan.offset().top);
        var mousePercentX=mouseCoordsX/containerWidth;
        var mousePercentY=mouseCoordsY/containerHeight;
        var destX=-(((totalContentW-(containerWidth))-containerWidth)*(mousePercentX));
        var destY=-(((totalContentH-(containerHeight))-containerHeight)*(mousePercentY));
        var thePosA=mouseCoordsX-destX;
        var thePosB=destX-mouseCoordsX;
        var thePosC=mouseCoordsY-destY;
        var thePosD=destY-mouseCoordsY;
        var marginL=$imagePan_panning.css("marginLeft").replace("px", "");
        var marginT=$imagePan_panning.css("marginTop").replace("px", "");
        var animSpeed=500; //ease amount
        var easeType="easeOutCirc";
        if(mouseCoordsX>destX || mouseCoordsY>destY){
            $imagePan_container.stop().animate({left: -thePosA-marginL, top: -thePosC-marginT}, animSpeed,easeType); //with easing
        } else if(mouseCoordsX<destX || mouseCoordsY<destY){
            $imagePan_container.stop().animate({left: thePosB-marginL, top: thePosD-marginT}, animSpeed,easeType); //with easing
        } else {
            $imagePan_container.stop();
        }
    }
 
    $imagePan_panning.css("margin-left",($imagePan.width()-$imagePan_panning.width())/2).css("margin-top",($imagePan.height()-$imagePan_panning.height())/2);
  
  $('.jumbotron.info').hover( function(){

    $imagePan_panning=$(".info.jumbotron .panning");
    $imagePan=$(".info.jumbotron");
    $imagePan_container=$(".info.jumbotron .imagePanner");

    $(this).bind("mousemove", function(event){
        MouseMove(event);
    });
  });
  $('.jumbotron.events').hover( function(){

    $imagePan_panning=$(".events.jumbotron .panning");
    $imagePan=$(".events.jumbotron");
    $imagePan_container=$(".events.jumbotron .imagePanner");

    $(this).bind("mousemove", function(event){
        MouseMove(event);
    });
  });
  $('.jumbotron.contact').hover( function(){

    $imagePan_panning=$(".contact.jumbotron .panning");
    $imagePan=$(".contact.jumbotron");
    $imagePan_container=$(".contact.jumbotron .imagePanner");

    $(this).bind("mousemove", function(event){
        MouseMove(event);
    });
  });
});

$(window).resize(function() {
    $imagePan.unbind("mousemove");
    $(window).load();
});

$(document).ready( function(){
  $('.focuspoint').focusPoint();
});

$(window).resize( function(){
  $('.focuspoint').focusPoint();
})