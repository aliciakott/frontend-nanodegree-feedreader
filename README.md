# Udacity Feedreader Testing

The premise of this project is that the Udacity Feedreader's original developer (we'll call her Karen) left to start her own business, leaving an unfinished test suite for me to complete. (_Thanks a lot, Karen_.)


## Getting started

Follow these steps to get a copy of the project running on your local machine


### Dependencies

You will need a Windows, Mac, or Linux based operating system and access to the internet in order to run this project.
Additionally, the project will not function properly without the following:

* [Google fonts](http://fonts.googleapis.com/)
* [Google javascript API](http://google.com/jsapi)
* [jQuery library](https://jquery.com/)
* [Handlebars templating](https://handlebarsjs.com/)
* and [Jasmine testing](http://jasmine.github.io/)

 Jasmine is included with the project files. All others are accessed through external links (an external stylesheet in the case of Google Fonts, external scripts for all others.)


### Installing

Either clone or download and unzip the files to your local directory. After downloading, please verify that:

* The css folder contains the normalize.css, icomoon.css, and style.css stylesheets
* The js folder contains the app.js file
* The fonts folder contains icomoon.eot, icomoon.svg, icomoon.ttf, and icomoon.woff
* The _jasmine_ folder contains two subfolders, lib and spec
* Within jasmine, the spec folder holds the feedreeder.js file
* Within jasmine, the lib folder has the jasmine-2.1.2 folder
* The jasmine-2.1.2 subfolder has boot.js, console.js, jasmine.js, jasmine.css, jasmine-html.js, and jasmine_favicon.png


## Running the tests

Open the index.html file in the browser of your choice. After a few seconds, you will notice the content of the page changing; that is Jasmine, performing the tests. The results of the tests will display at the bottom of the page.
