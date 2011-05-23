
$('footer').addClass(function(i, c) {
		var rndClass = "ft_";
		var rnd = 1 + Math.floor(Math.random() * 14);
		if (rnd < 10) {
			rndClass += "0";
		}
		rndClass += rnd;
		console.log(rndClass);
		return rndClass;
	})
