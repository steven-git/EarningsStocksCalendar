$(document).ready(function(){
	$.get('/api/Upcoming', function(stocks){// Current signed in user
		for (var i = 0; i < stocks.length; i++) {
			console.log(stocks.length)
			$('#data').append('<tr>'+stocks[i]+'</tr>');
		};
	}); 
});

