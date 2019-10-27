$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function() {
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "4") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    } 
  });
});
