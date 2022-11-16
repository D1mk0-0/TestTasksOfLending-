// jQuery("document").ready(function ($) {
//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 500) {
//           $(".header__slick").css({
//               'position': 'fixed',
//               'background': '#000000'
//           });
//       } else {
//           $(".header__slick").css({
//               'position': 'relative',
//               'background': 'transparent'
//           });
//       }

//   })
// });

 jQuery("document").ready(function ($) {
   $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
        $("header").addClass("slick");
       } else {
        $("header").removeClass("slick");
          }
   })
 });

