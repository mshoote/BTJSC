# Capstone - BTJSC
This is a Capstone Project at the University of Nebraska Omaha (https://www.unomaha.edu) working with Buildertrend to test Javascript Frameworks.
The project will be testing the frameworks mentioned below for efficiency, documentation, and other possible metrics.
After testing the frameworks a recommendation will be made to our client Buildertrend on the best framework for them to use going forward. Currently they use Knockout JS.

# Maintainers: 
Matthew Schuette, Dreizan Moore, Maeghan Fry, Derek Tobler

# Development Environment:
Operating System: Windows and Mac

Languages: HTML and JavaScript and Perl

# Installation Instructions
Ember
1. You must install npm ("sudo npm install npm -g; npm install")
2. You must install nodejs ("curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -; sudo apt-get install -y nodejs")
3. Install ember ("sudo npm install -g ember-cli")
4. Run "sudo ember new [name-of-your-project]"
5. Replace the contents of your app and public directories in your new ember project with the app and public directories in this repo's "ember" directory ("ember directory located under "ListViewFrameworks")
6. Run "ember s"

# Frameworks:
Angular JS, Knockout JS(Fast-For-Each), Inferno, Ember

# Licenses:
Knockout, Knockout Fast-Foreach, Angular, and Inferno: MIT http://www.opensource.org/licenses/mit-license.php

Ember: EmberJS' contributors https://github.com/emberjs/ember.js/blob/master/LICENSE

# Buildertrend:
Buildertrend is an Omaha-based company that provides a large variety of residential construction software. More information is available on their website at https://www.buildertrend.com.

# System Requirements
Java 7.X or 8.X

Perl 5.12.X

# Copyright Declarations/Licensing Information
BTJSC is free software: you can redistribute it and/or modify it under the terms of the MIT License as published by the Open Source Initiative. See the file LICENSE for more details.

All associated documentation is licensed under the terms of the Creative Commons Attribution Share-Alike 4.0 license. See the file CC-BY-SA-4.0 for more details.

# Gathering Test Results
For testing each framework on your own you must follow these instructions. Use the framework code in "TestingFrameworks" folder.
1. Make sure your computer can run a Perl portion on the Testing program.
2. There must be a JavaScript reference to the Auto code in each of the framework's HTML file.
3. Add the correct amount of JSON data (10, 100, 1k, 5k ...) the chosen framework.
4. In the Auto code JavaScript be sure to set the reset time to an appropriate amount of time so the code doesn't refresh your web page before it loads the page. This portion of the code is commented out already.
  -(You can comment out the refreshing code of the JavaScript to get you first couple load times and then set it back up to the correct amount of time for refreshing.)
5. Once you open any of the HTML files the Auto code will get the load times of the web page and download them as TEXT files.
  -(You may need to allow your browser to download multiple iterations of the same files name.)
6. After you have run the program several times, collect the TEXT files in the downloads folder and place them in a separate one. 
  -(I would suggest naming the folder in the following format "FRAMEWORK_JSONSIZE_BROWSER".)
7. Finally, place a copy of the PERL code into the same folder; make sure to change the file rout in the Perl script each time you want to test the data times.
8. Afterwards run the PERL code in the folder and you will see a new TEXT file named TOTALTIME.TXT. This file will give you the average of the frameworks loading times.

# Testing Warning
For the frameworks code in the "TestingFrameworks" folder you must put the JSON data code (10, 100, 1k...) directly in the specified location. This is so you can get accurate page loading times from the web browser console, for Angular place the script in the JS file, both Knockout and Fast For Each needs it in the HTML file, and for ember in the about.js file.

