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

	setTimeout( function(){
		od1.update(99)
	}, 1000 );

	setTimeout( function(){
		od2.update(1);
		od3.update(18)
	}, 1400 );

	setTimeout( function(){
		od4.update(200)
	}, 1800 );
}

