$('document').ready(function(){


      // create image array to store data. this is a statement.
      // statement meaning JS will run the entire command

      var images = [
        {
          name: ['NEW YORK', 'NEW YORK CITY', 'NYC'],
          src:  ['images/nyc.jpg'],
        },

        {
          name: ['SAN FRANCISCO', 'SF', 'BAY AREA'],
          src:  ['images/sf.jpg'],
        },

        {
          name: ['LOS ANGELES', 'LA', 'LAX'],
          src:  ['images/sf.jpg'],
        },

        {
          name: ['SYDNEY', 'SYD'],
          src:  ['images/sydney.jpg'],
        },

      ];

      $('form').submit(function(e){ // could either use 'form' or '#submit-btn'
        e.preventDefault();  // prevent form submission

          images.forEach(function(element,index){
            // forEach function giving us each image in the array
            // you can name 'element' anything.
            // the element runs through the images array for its parameters

              console.log (element, index, 'and some text');

              var userinput = $('#city-type').val();
              userinput = userinput.toUpperCase().trim();

              element.name.forEach(function(element2,index2){

                console.log(element2, index2);
                console.log(element.src);

              if (element2 === userinput){
              $("body").css('background-image', 'url(' + element.src + ')');
              }

              // 'url(' + element.src + ')' is the assembly of an entire string

              });


          });



      });




});
