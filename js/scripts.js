$('.trigger').on('click', function() {
  $(this).parent().toggleClass('visible');
  return false;
});