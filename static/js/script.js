$(function() {
  // Parallax
  $.stellar({
    responsive: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    verticalOffset: 0,
    horizontalOffset: 0
  });

  // Scroll spy
  var toggleHeader = function() {
    $('.header-section')
     .toggleClass('floating', $(window).scrollTop() > 80)
     ;
  };
  $(window).on('scroll', toggleHeader);
  toggleHeader();

  // Header navigation
  $('#header-nav').onePageNav({
    scrollSpeed : 1000,
  });

  // Animations
  $('*[data-animation]').each(function(i, el) {
    var el = $(el);
    var animationClass = el.data('animation');

    el
      .addClass(animationClass)
      .addClass('animated')
      .addClass('wait-animation')
      .one('inview', function() {
        el.removeClass('wait-animation');
        el.addClass('done-animation');
      })
      ;
  });

  // Anchor links
  $('body').on('click', 'a.anchor-link', function(e) {
    e.preventDefault();

    var target = $($(this).attr('href'));

    if (target.length < 1) return;

    $('html, body').animate({
      scrollTop: target.offset().top - 10
    }, 1000);
  });
});
