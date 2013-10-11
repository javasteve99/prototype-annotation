(function () {
  "use strict";
  /*jshint validthis:true, jquery:true */

  /* Remove elements from end of file and place in proper parents ========== */
  $('#annotations .annotation').each(function() {
    var annotationNumber = $(this).attr('id').split('-')[1];
    $('[data-annotation="' + annotationNumber + '"]').css('position', 'relative').append($('#annotation-' + annotationNumber));
  });

  /* Show annotation on click ============================================== */
  $('.trigger').on('click', function() {
    $(this).parent().toggleClass('visible');
    return false;
  });
}());