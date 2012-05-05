/* jonHandles.js
 * This script handles all requests made from jon.php script. 
 * 
 */

/*
 * Handle for all clicks made inside the id="jonPageNavigator" tag.
 * jQuery puts all click event details into the functions event paramenter.
 * Then, we can test details of the event with (event.target).hasClass(); etc....
 */
$('#jonPageNavigator').bind('click', function(event){
	
	/*
	 * Stop links from going to a new url. 
	 * Instead we use javascript to handle link requests.
	 */
	event.preventDefault();
	
	/*
	 * If the event has a class named targetButton1 within it
	 * Then, execute the below code.
	 */
	if ($(event.target).hasClass('targetButton1')){
		
		console.log('Button1 target worked :-)');
		
	}
	
	/*
	 * If the event has a class named targetButton2 within it
	 * Then, execute the below code.
	 */
	if ($(event.target).hasClass('targetButton2')){
		
		console.log('Button2 target worked :-)');
		
	}

});

