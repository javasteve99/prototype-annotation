/*  Prototype Annotation Framework
  Author: Steve Hickey, UX Designer & Front-End Developer | https://twitter.com/stevehickeydsgn | http://stevehickeydesign.com/
  Company: Fresh Tilled Soil | http://www.freshtilledsoil.com/

  Licensed for use under the WTFPL | http://en.wikipedia.org/wiki/WTFPL -- Free for all uses without attribution or credit.
  The author is not liable for anything that doesn't work or breaks. You're on your own, you've been warned.
*/

;(function () {
  "use strict";

  /* Remove elements from end of file and place in proper parents ========== */
  $('#annotations .annotation').each(function() {
    var annotationNumber = $(this).attr('id').split('-')[1];
    $('[data-annotation="' + annotationNumber + '"]').css('position', 'relative').append($('#annotation-' + annotationNumber));
    $(this).prepend('<a href="#" class="trigger">' + annotationNumber + '</a>');
  });

  /* Ditch empty container for annotations ================================= */
  $('#annotations').remove();

  /* Show this annotation text on click ==================================== */
  $('.trigger').on('click', function() {
    $(this).parent().toggleClass('show-this-annotation');
    return false;
  });

  /* Change visibility of all annotations ================================== */
  $(document).on('keyup', function(e) {
    if (e.keyCode === 65 && e.altKey) { // if user presses Option + A (Mac) or Alt + A (PC)
      $('.annotation').toggleClass('hide-all-annotations');
    }
  });

  $(document).on('touchmove', function(e) {
    if (e.originalEvent.touches.length === 2) { // if user drags 2 fingers
      $('.annotation').toggleClass('hide-all-annotations');
      e.preventDefault();
    }
  });

}());