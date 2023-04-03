(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    var prevScrollpos = window.pageYOffset;
    $(window).onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
      }
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

})(jQuery);

//Text changer Image Annotation
function imgAnnChanger(){

  var headersToAnimate = ["Bounding Box", "PolyLine","Raod and Lane","Cuboid","Point and Dot","Pixel Level Semantic Segmentation","3D LIDAR","Video Annotation"];
  var startReversAnimationAfter = 500; //ms
  
  function reverseAnimation(headerIndex){
    var i = headersToAnimate[headerIndex].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("Header").innerHTML = \'' + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateHeaders(headerIndex + 1)}, 100 * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex){
  var i =0;
  if(headerIndex ==  headersToAnimate.length){
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("Header").innerHTML += \'' + string + '\';', 100 * i);
  }
  
  setTimeout(function(){ reverseAnimation(headerIndex)}, 100 * i + startReversAnimationAfter);
}


//Text changer BPO


animateHeaders(0)
// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: true,
        loop: true,
        center: true,
        responsive: {
          0:{
            items:1
          },
          576:{
            items:1
            },
            768:{
              items:2
            },
            992:{
              items:3
            }
          }
    });

  }

  function bpochanger(){

    var headersToAnimateBpo = ["Call Center Services", "Data Entry Services","Chat Support Services","Telemarketing Services","E-Mail Support Services","Technical Support Service"];
    var startReversAnimationAfterBPO = 500; //ms
    
    function reverseAnimationBPO(headerIndexBPO){
      var i = headersToAnimateBpo[headerIndexBPO].length -1, delay = 0;
      for (; i >= 0 ; i--, delay++) {
        let string = headersToAnimateBpo[headerIndexBPO].substr(0, i);
        setTimeout('document.getElementById("HeaderBPO").innerHTML = \'' + string + '\';', 100 * delay);
      }
      
       setTimeout(function(){ animateHeadersBPO(headerIndexBPO + 1)}, 100 * delay + startReversAnimationAfterBPO);
      }
      function animateHeadersBPO(headerIndexBPO){
        var i =0;
        if(headerIndexBPO ==  headersToAnimateBpo.length){
          headerIndexBPO = 0;
        }
      for (; i < headersToAnimateBpo[headerIndexBPO].length; i++) {
        let string = headersToAnimateBpo[headerIndexBPO][i]
        setTimeout('document.getElementById("HeaderBPO").innerHTML += \'' + string + '\';', 100 * i);
      }
      
     setTimeout(function(){ reverseAnimationBPO(headerIndexBPO)}, 100 * i + startReversAnimationAfterBPO);
    }
    animateHeadersBPO(0)
    // Testimonials carousel
$(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: true,
        loop: true,
        center: true,
        responsive: {
          0:{
            items:1
          },
          576:{
            items:1
          },
            768:{
                items:2
              },
            992:{
                items:3
            }
          }
    });

  }
//on scroll hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transitionDuration='0.6s'
  } else {
    document.getElementById("navbar").style.top = "-75px";
    document.getElementById("navbar").style.transitionDuration='0.4s'
  }
  prevScrollpos = currentScrollPos;
}

//career
$("#career-form").submit(function (event) {
  event.preventDefault();
  res_success = $('<div class="alert alert-success alert-message" role="alert">Form Submitted. We will connect you soon <span class="ajax_response"></span></div>');
  formdata={
    Name:$('#name').val(),
    Email:$('#email').val(),
    Phone:$('#phone').val(),
    Role: $('#role').val(),
    Experience: $('#experience').val(),
    ProfileUrl: $('#profileUrl').val(),
    message: $('#message').val()
  } 

  function fadeAlert() {
    window.setTimeout(function() {
        $(".alert-message").fadeTo(1000, 0).slideUp(500, function() {
            $(this).remove();
        });
    }, 2000);
}
$('#career-submit').html("Loading...")
$('#career-submit').attr("disabled",true)
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbwcxHKCcjTL8V7HJfZoqKs6kwO-wNyBdbLNyQ6BxTrJhuNOI1bySGnAWB-3dPQi9H9e/exec",
          data:formdata,
          method:"post",
          success:function (response){
            if(response.result=="success"){
            $('#alert-msg').prepend(res_success);
            $('#career-form').trigger("reset");
            $('#career-submit').removeAttr("disabled")
            $('#career-submit').html("Submit")
              fadeAlert();
            }
          },
          error:function (err){
              alert("Something Error")

          }
      })
})

//contact us

$("#contactUs-form").submit(function (event) {
  event.preventDefault();
  res_success = $('<div class="alert alert-success alert-message" role="alert">Submitted your message. We will connect you soon <span class="ajax_response"></span></div>');
  formdata={
    Name:$('#name').val(),
    Email:$('#email').val(),
    Subject:$('#subject').val(),
    Phone:$('#phone').val(),
    Message: $('#message').val(),
  }
  function fadeAlert() {
    window.setTimeout(function() {
        $(".alert-message").fadeTo(1000, 0).slideUp(500, function() {
            $(this).remove();
        });
    }, 2000);
  }
  $('#contact-submit').html("Loading...")
  $('#contact-submit').attr("disabled",true)

  $.ajax({
    url:"https://script.google.com/macros/s/AKfycbyGN3G0PJqu4Femt-6WBeVEJX6BGIf-3HDkB_-HKG4GZsoCf1JhCIS1ZSRoUX-MFZ34vQ/exec",
    data:formdata,
    method:"post",
    success:function (response){
      if(response.result=="success"){
        $('#alert-msg-contact').prepend(res_success);
        $('#contactUs-form').trigger("reset");
        $('#contact-submit').removeAttr("disabled")
        $('#contact-submit').html("Submit")
      }
      fadeAlert();
    },
    error:function (err){
      alert("Something Error")
      
    }
  })
})