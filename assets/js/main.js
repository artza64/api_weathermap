$(function(){
	var apiKey = '368fc002ed7a86241151d9c4c4afee6a';
	var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + apiKey + '&units=metric&lang=fr';
	

	$('#weather button').click(function(e){
		e.preventDefault();
		var city = $('#city');
		var cityValue = city.val();

		var params = {
			url: baseUrl + '&q=' + cityValue,
			method: 'GET'

		};

		$.ajax(params).done(function(response){
			

			// Tab name
			$('.tabTitle').text("Météo " + response.name);

			// Show card
			$('.card').removeClass('d-none');

			// Error
			city.removeClass('is-invalid');
			$('.invalid-feedback').slideUp();
			$('.card').show();

			// Title
			$('.card-title').text(response.name);


			// Description

			$('.description-weather').text(response.weather[0].description);

			// Temp

			var temp    = Math.round(response.main.temp) + ' °';
			var tempMax = Math.round(response.main.temp_max) + ' °';
			var tempMin = Math.round(response.main.temp_min) + ' °';

			// Title
			$('.temp-weather').text(temp);
			$('.temp-max-weather').text(tempMax);
			$('.temp-min-weather').text(tempMin);

			// Image
			var image = response.weather[0].icon;
			$('.image-weather').attr('src', 'http://openweathermap.org/img/w/' + image + '.png');
			$('.image-weather').attr('alt', response.name);

		})
		.fail(function(){
			$('.invalid-feedback').slideDown();
			city.addClass('is-invalid');
			$('.card').hide();

		
		});

	});

});