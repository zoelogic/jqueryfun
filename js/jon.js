/* jon.js
 * This script is the main javascript page for the jon.php
 * @author Jon
 * @date 5/5/2012
 * 
 */

/* Waite for document to initialize and get all needed javascript
 * before running any javascript.
 */
$(document).ready(function(){
	
	/*
	 * Test that document.ready function is working properly.  
	 */
	console.log('Document ready entered.');
	
	/*
	 * Include the handles script. All requests from jon.php
	 * are handled in this script.
	 */
	$.getScript('js/helpers/jonHandles.js');
	
	
	/*
	 * Get the needed javascript class.
	 * Class is made the jQuery way.  Hence, the 
	 * class is available using jQuery commands. $.classname.methodname();
	 * If you do not include the class this way it will
	 * not be available the first time the script is run.   
	 */
	$.getScript('js/helpers/jQuery.jon.js', function(){
		
		/*
		 * Test that jQuery.jon.js script is working.
		 */
		console.log('jQuery.jon.js script was included :-)');
		$.jon.setBlueBox();
		$.jon.setPurpleBox();
		
		// Hide elements
		//$('#image1').hide();
		
		
	});
	
});