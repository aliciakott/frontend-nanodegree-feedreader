# Udacity Feedreader Testing

The premise of this project is that the Udacity Feedreader's original developer (we'll call her Karen) left to start her own business, leaving an unfinished test suite for me to complete. (_Thanks a lot, Karen_.)


## Getting started

Follow these steps to get a copy of the project running on your local machine


### Dependencies

You will need a Windows, Mac, or Linux based operating system and access to the internet in order to run this project.
Additionally, the project will not function properly without the following:

* [Google fonts] (http://fonts.googleapis.com/)
* [Google javascript API] (http://google.com/jsapi)
* [jQuery library] (https://jquery.com/)
* [Handlebars templating] (https://handlebarsjs.com/)
* and [Jasmine testing] (http://jasmine.github.io/)

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


### RSS Feeds

```
expect(allFeeds).toBeDefined();
expect(allFeeds.length).not.toBe(0);


allFeeds.forEach(function(feed) {
    expect(feed.url).toBeDefined();
    expect(feed.url).not.toBeFalsy();
});
allFeeds.forEach(function(feed) {
    expect(feed.name).toBeDefined();
    expect(feed.name).not.toBeFalsy();
});
```
The `loadFeed` function depends on an array of objects, `allFeeds`. These tests verify that 1. the `allFeeds` array has been defined, 2. it is not empty, and 3. that every object in the array has both a name and URL property defined. Without these properties defined, `loadFeed` will throw an error.


### The Menu

```
var hidden = $('body').hasClass('menu-hidden');
expect(hidden).toBe(true);

$('.menu-icon-link').trigger('click');
hidden = $('body').hasClass('menu-hidden');
expect(hidden).toBe(false);

$('.menu-icon-link').trigger('click');
hidden = $('body').hasClass('menu-hidden');
expect(hidden).toBe(true);
```
These tests verify first that the menu is hidden by default, and that clicking the menu icon triggers the event listener which changes the visibility of the menu.


### Initial Entries

```
this.entries = $('.feed .entry').toArray();
expect(this.entries.length).not.toBe(0);
```
This test makes sure that when `loadFeed` runs, there is at least a single `.entry` element within the `.feed` container.

### New Feed Selection

```
var checkMatch = (oldEntries[0] == newEntries[0]) ? true:false;
expect(checkMatch).toBe(false);
```
This test makes sure that the content actually changes when the `loadFeed` function is called by the links in the menu. It does this by first collecting the contents of the first `.entry` element, then running `loadFeed` again and collecting the first `.entry` element a second time. It then compares the two.

### Error Handling

`loadFeed` has one parameter, which references the index of the `allFeeds` array.


```
var testStringValue = function() {
    loadFeed('x');
};

expect(testStringValue).toThrow();
expect(loadFeed).toThrow();
```
If the argument is ommitted, or non-numerical, `loadFeed` throws an error.


```
var testOuterValue = function() {
    loadFeed(allFeeds.length);
};

expect(testOuterValue).toThrow();
});
```
Out-of-bound array access causes `loadFeed` to throw an error.


```
var testInnerValue = function() {
    loadFeed(i);
};
expect(testInnerValue).not.toThrow();
```
Any non-negative number less than the length of `allFeeds`, passed as argument in `loadFeed` does not throw an error.
