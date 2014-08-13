#Hurdle  <img src="https://raw.githubusercontent.com/ksparakis/Hurdle/master/default_app_logo.png" width="100px" height="100px"/>
Dynamic Form Submitter , for testing php server code without having to create the front end.

 <img src="https://github.com/ksparakis/Hurdle/blob/master/Screenshot%202014-08-01%2017.40.42.png" width="400px" height="300px"/>  
 
 <img src="https://github.com/ksparakis/Hurdle/blob/master/Screenshot%202014-08-01%2017.41.03.png" width="400px" height="300px"/>
 
 
#How To Use

##Install
* First off you must have a local webserver running, I recommend Xampp for those who don't know anything about local webservers.
* Download the Hurdle folder and save it to your htdocs(This is for xampp users) or where ever your webserver is set.
* Open a web browser and go to "localhost/hurdel" or whatever url you have set the file in and enjoy.

##Instruction
* Scan file and add values to the inputs, and submit
* Input all the information manualy by adding input, and file location then submiting

##Tips
* Works Best In Google Chrome and Safari
* Add a comment in this style in your php "//hurdle:{"file path to file"} "  replace the file path with the file path of the folder so that the scaner can add it when it scans the form.


##Warnings
- Opening the file directly from the folder will not work, this is because your browser disallows any code opened from a file to submit a form.

##Known Bugs and issues
* Currently once you scan a form you need to refresh the page in order to clear the data and re scan a new file.
* Mozzila firefox does not allow for temporary files so the scan file does not work.
* If you dont include "//hurdle:{"file path to file"} " in some browsers the scan does not work.
