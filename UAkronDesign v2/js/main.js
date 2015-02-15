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
}
