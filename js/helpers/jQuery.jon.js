/*jQuery.jon.js
 * This is the main class for processing on the jon.php page. 
 * 
 */

jQuery.jon = {
		
		/* setBlueBox()
		 * This method will move the blue in from left side of page
		 * to the middle of the page. 
		 */
		setBlueBox: function(){
			
			console.log('setBlueBox function was run.');
			
		},
		/* setPurpleBox()
		 * This method will move the purple box in from the left 
		 * side of the page to the middle of the page. 
		 */
		setPurpleBox: function(){
			
			console.log('setPurpleBox function was run.');
			
		},
		/* button1Test() 
		 * Test method to show how methods can be executed 
		 * in an event handler.
		 */
		button1Test: function(){
			
			console.log('button1Test method was executed.');
			
		},
		/* button2Test() 
		 * Test method to show how methods can be executed 
		 * in an event handler.
		 */
		button2Test: function(){
			
			console.log('button2Test method was executed.');
			
		},
		/* button1Action()
		 * If button 1 is clicked run this method.
		 * 
		 */
		button1Action: function(){
			
			// console.log('button2Test method was executed.');
			
			
		/*	$('#image1').fadeIn(3000, function() {
		        // Animation complete
		      });*/
			/*$('#image1').fadeIn(3000, function() {
		        // Animation complete
		      });*/
			
			// If the image2 animation started this will stop it.
			
			// Takes animation to it's end and stops there. 
			/*$('#image2').stop(true, true);*/
			
			// This will stop the animation at the current point. 
			$('#image2').stop();
			
			// Set more css for image1
			$('#image1').css({
					'position': 'absolute',
					'left': '0px',
					'top': '0px',
					 'width': '250px',
					 'height':'250px',
			});
			
			
			$('#image1').stop(true, true).fadeIn(3000, function() {
		        // Animation complete
		      }).stop(true, true).animate({		  
		    	    'position': 'absolute',
				     opacity: 0.25,
				    'left': '400px',
				    'top': '150px',
		    	  
				  }, 5000, function() {
				    // Animation complete.
				  });
			
			/* $('#image1').animate({
				    opacity: 0.25,
				    right: '0px',
				    top: '0px',
				  }, 5000, function() {
				    // Animation complete.
				  });*/
		},
		/* button2Action()
		 * If button 2 is clicked run this method.
		 * 
		 */
		button2Action: function(){
			
			// console.log('button2Test method was executed.');
						
			$('#image2').stop(true, true).fadeIn(3000, function() {
		        // Animation complete
		      }).stop(true, true).animate({		  
		    	    'position': 'absolute',
				     opacity: 0.25,
				    'right': '400px',
				    'top': '150px',
		    	  
				  }, 5000, function() {
				    // Animation complete.
				  });
			
		
		}
		
}


