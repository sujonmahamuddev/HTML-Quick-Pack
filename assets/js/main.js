;(function($){

     $(document).ready(function(){

       jQuery('.stellarnav').stellarNav({
          theme: 'plain',
          breakpoint: 768,
          menuLabel: '',
          sticky: false,
          position: 'static',
          openingSpeed: 250,
          closingDelay: 250,
          showArrows: true,
          phoneBtn: '',
          phoneLabel: 'Call Us',
          locationBtn: '',
          locationLabel: 'Location',
          closeBtn: false,
          closeLabel: 'Close',
          mobileMode: false,
          scrollbarFix: false
          });
     });


     $(window).on('load', function(event) {


      });


})(jQuery);
