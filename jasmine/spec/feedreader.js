/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // The `loadFeed` function depends on an array of objects. The following
        // checks that each object in the array has a name property defined, and
        // that the value of that property is not empty
        it('has URLs defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeFalsy();
            });
        });

        // The `loadFeed` function depends on an array of objects. The following
        // checks that each object in the array has a URL property defined, and
        // that the value of that property is not empty
        it('has names defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeFalsy();
            });
        });
    });



    describe('The menu', function() {

        // This test verifys that the menu is hidden by default by checking
        // for the .menu-hidden class
        it('is hidden by default', function() {
            var hidden = $('body').hasClass('menu-hidden');
            expect(hidden).toBe(true);
        });

        it('toggles visibility when icon is clicked', function() {
            // triggers click event, which should toggle off .menu-hidden class
            // and show menu
            $('.menu-icon-link').trigger('click');
            var hidden = $('body').hasClass('menu-hidden');
            expect(hidden).toBe(false);

            // triggers click event, which should toggle on .menu-hidden class
            // and hide the menu
            $('.menu-icon-link').trigger('click');
            hidden = $('body').hasClass('menu-hidden');
            expect(hidden).toBe(true);
        });
    });


    describe('Initial Entries', function() {

        // This test makes sure that when loadFeed runs, there is at least a
        // single .entry element within the .feed container.
        var entries = [];
        beforeEach(function(done) {
            loadFeed(0);
            setTimeout(function() {
                done();
            }, 1000);
        });

        it('should create new .entry DOM element', function() {
            this.entries = $('.feed .entry').toArray();
            expect(this.entries.length).not.toBe(0);
        });
    });



    describe('New Feed Selection', function() {
        var oldEntries = [];
        var newEntries = [];

        // This test makes sure that the content actually changes when the
        // loadFeed function is called. It does this by first collecting the
        // contents of the first .entry element, then running loadFeed in a
        // nested callback again and collecting the first .entry element again.
        // It then compares the two.
        beforeEach(function(done) {
            $('.feed .entry').each(function() {
            oldEntries.push(this.innerHTML);
            });

            loadFeed(0, loadFeed(1));
            setTimeout(function() {
                done();
            }, 2000);
        });

        it('changes feed content', function() {
            $('.feed .entry').each(function() {
            newEntries.push(this.innerHTML);
            });

            var checkMatch = (oldEntries[0] == newEntries[0]) ? true:false;
            expect(checkMatch).toBe(false);
        });
    });



    describe('Error handling', function() {

        // If the argument is ommitted, or non-numerical, loadFeed should throw an error
        it('throws an error when argument is non-numerical or ommitted', function() {
            var testStringValue = function() {
                loadFeed('x');
            };

            expect(testStringValue).toThrow();
            expect(loadFeed).toThrow();
        });

        // Out-of-bound array access should cause loadFeed to throw an error
        it('throws an error when argument is greater than or equal to array.length', function() {
            var testOuterValue = function() {
                loadFeed(allFeeds.length);
            };

            expect(testOuterValue).toThrow();
        });

        // Any non-negative number less than allFeeds.length, passed as argument in loadFeed should not throw an error
        it('does NOT throw an error for all non-negative values less than array.length', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var testInnerValue = function() {
                    loadFeed(i);
                };
                expect(testInnerValue).not.toThrow();
            }
        });
    });
}());
