//ADVERTISEMENT FIXED SCROLL

  $(document).ready(function() {
    if($(window).width() > 1000){
      var $window = $(window),
      $adds = $("#adds");

      $window.scroll(function() {
        if (!$adds.hasClass("fixed") && ($window.scrollTop() > $adds.offset().top)) {
            $adds.addClass("fixed").data("top", $adds.offset().top);
        }
          else if ($adds.hasClass("fixed") && ($window.scrollTop() < $adds.data("top"))) {
            $adds.removeClass("fixed");
          }
      });
    };



    slider.intialize(); 



  });

$("#articleCycle li:nth-child(4n)").addClass("lastArticle");

var slider = {

  panels: 0,
  currentPanel: 1,

  intialize: function() {
    $('.right-arrow').bind('click', $.proxy(this.rightSlide, this));
    $('.left-arrow').bind('click', $.proxy(this.leftSlide, this));


    $articleItems = $('#articleCycle li');

    this.panels = Math.ceil($articleItems.length / 4);

    if (this.panels > 1) {
      $('.right-arrow').addClass('active');
    }
  },

  rightSlide: function() {
    this.currentPanel += 1;
    $('.left-arrow').addClass('active');


    if (this.currentPanel >= this.panels) {
                $('.right-arrow').removeClass('active');
            }

    $('#articleCycle').animate({left: '-=786'});
    
    // update currentPanel
    // show opposite

    // check panel position and hide if necessary

    // animate

  },

  leftSlide: function(){
    this.currentPanel -= 1;
    $('.right-arrow').addClass('active');

    if (this.currentPanel <= 1) {
                $('.left-arrow').removeClass('active');
            }

    $('#articleCycle').animate({left: '+=786'});

  }

};