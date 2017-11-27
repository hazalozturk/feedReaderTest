$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.*/
    describe('RSS Feeds', function() {

        /* It tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* It loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
        });


        /* It loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has a name defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /* This suite is about the menu  */
    describe('The menu', function() {

      /* It ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('has hidden menu element by default', function() {
         expect(document.body.classList).toContain('menu-hidden');
       });

       /* TIt ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes the menu when clicked', function() {
          document.querySelector('.menu-icon-link').click();
          expect(document.body.classList).not.toContain('menu-hidden');

          document.querySelector('.menu-icon-link').click();
          expect(document.body.classList).toContain('menu-hidden');
        });
    });



    describe('Initial Entries', function() {

      beforeEach(function(done) {  //Asycn test requirement
        loadFeed(0, function() {
          done();
        });
      });

      /* It ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.*/
      it('has at least one ".entry" element within the ".feed" container', function() {
        expect($('.feed .entry').length).toBeGreaterThan(0);
      });

    });

    describe('New Feed Selection', function() {

      var firstSelect;

      beforeEach(function(done) {  //Asycn test requirement
        loadFeed(0, function() {
          firstSelect = document.querySelector(".feed").innerHTML;
          loadFeed(1, function() {  //Initial Feed after loading
            done();
          });
        });
      });

      /* It ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.*/
      it('changes the content when a new feed is laoded', function(done) {
        var newSelect = document.querySelector(".feed").innerHTML;
        expect(firstSelect).not.toBe(newSelect);
        done();
      });
  });


}());
