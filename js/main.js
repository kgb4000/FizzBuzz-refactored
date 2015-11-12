

$(function fizzBuzzer() {

	// Variables
	var userInput = $('#user-input');
	var $form = $('#fizzbuzz-form');
	var $element = $('#fizz-buzz-numbers');
	var answer = '';

	userInput.focus();

	userInput.keydown(function(e) {
		console.log(e);
		console.log("keys pressed");
		if(e.keyCode >= 48 && e.keyCode <= 57) {
			return true;
		} else {
			console.log("Off");
			e.preventDefault();
		}
	});


	// Submitting the form
	$form.on('submit', function(e) {
		e.preventDefault();

		answer = '';

		var number = userInput.val();

		if(number === '' || number < 1) {
			var $warning = $('#warning').html('<p class="warning">Please enter a number</p>');
			console.log('Error');
			$warning.fadeIn(500);
			$warning.fadeOut(1500);
			return false;

		} else {

			for(var i = 1; i <= number; i++) {

				if(i % 3 ===0 && i % 5 ===0) {

					console.log('Fizz Buzz');
					answer += 'Fizz Buzz' + '</br>';
					$element.html(answer);

				} else if(i % 3 === 0) {
					console.log('Fizz');
					answer += 'Fizz' + '</br>';
					$element.html(answer);

				} else if(i % 5 === 0) {
					console.log('Buzz');
					answer += 'Buzz' + '</br>';
					$element.html(answer);

				} else {
					console.log(i);
					answer += i + '</br>';
					$element.html(answer);
				}

			}

			userInput.val('');

		}
	});
});

fizzBuzzer();