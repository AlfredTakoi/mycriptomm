$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= 50) {
      $('.navbar').removeClass("bg-transparent")
      $('.navbar').addClass("bg-dark")
    } else {
      $('.navbar').addClass("bg-transparent")
      $('.navbar').removeClass("bg-dark")
    }
  })
  $(".about-us-column:not(.active)").click(function() {
    $(".about-us-column").removeClass("expanded")
    $(this).addClass("expanded")
  })

  $(".faq-item-btn").click(function() {
    $(".faq-item").addClass("border border-semidark")
    $(this).closest(".faq-item").removeClass("border border-semidark");
    $(".faq-item-arrow").removeClass("active bg-purple");
    $(this).closest(".faq-item").find(".faq-item-arrow").toggleClass("bg-purple active");
    if($(this).hasClass("collapsed")) {
      $(this).closest(".faq-item").addClass("border border-semidark");
      $(this).closest(".faq-item").find(".faq-item-arrow").toggleClass("bg-purple active");
    }
  })
})