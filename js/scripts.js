(function () {
  "use strict";
  /*jshint validthis:true, jquery:true */

  /* Show annotation on click ============================================== */
  $('.trigger').on('click', function() {
    $(this).parent().toggleClass('visible');
    return false;
  });
}());