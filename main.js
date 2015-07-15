$(document).ready(function() {
  // $('#toggle-menu').on('click', function() {
  //   $('#nav-menu').toggle();
  // });

  $(function() {
    var pull    = $('#pull');
      menu    = $('nav ul');
      menuHeight  = menu.height();

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });

    $(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
      };
    });
  });

  $('img').hover(function() {
    $(this).fadeOut(500);
    $(this).fadeIn(500);
  });
});