jqueryfun
=========

This repository is for sharing, testing, and developing jQuery scripts. Enjoy ! :-)
Feel free to download the project and we hope you will contribute too. 


jqueryfun project basic structure.

root 	Contains the below scripts.
index.php 
collaborate.php 		-- page for collaborative work. 		
layout.css				-- css page for project.  If desired feel free to make more.
jon.php					-- page for Jon to make test scripts to share. 
michael.php				-- page for Michael to make test scripts to share.
						
Directories in root listed below:
/js		This directory is for storing javascript files that will be included
		in php scripts. js stands for javascript. 
		All javascript files are stored in the js directory or
		it's sub-directories.
		This contains two files jon.js and jquery172.js
		jon.js is the javascript file included on jon.php
		jquery172.js contains the current version jQuery 1.7.2.

js/helpers	-- has two helper files jQuery.jon.js and jonHandles.js.
		These files are helpers because they help jon.js.
		They are not directly included in a .php script, but
		are always included in another javascript file.  
		
		jQuery.jon.js  is the file for the class named "jon".
		This class will contain methods made to respond to 
		requests made by the user.

	   	jonHandles.js  is the file for handling all requests
		made by the user on jon.php.
 
/images 	-- made two buttons w. rollover images too. 


Note: At this stage of the project development, the project has a
basic structure which has "event handlers" in jonHandles.js and a "class" named "jon"
located in jQuery.jon.js. These are included in the jon.js file.  
Plus, jon.php has the images and css for two buttons which are handled 
by the event handler script "jonHandles.js". So, these scripts
show how to make a javascript class the jQuery way, how to handle 
click events on a page and respond to the click event using methods in your 
custom built jQuery class.  Hopefully, this will be helpful. I hope to use this 
node to help people how to begin coding in javascript and jQuery.     

If you want to join the project please feel free to make your own 
scripts and directories. 
			 