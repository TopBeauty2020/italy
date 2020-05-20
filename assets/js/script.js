// !(function($, window, document, undefined) {
//
//     "use strict";
//
//     var b6 = true;
//
//     $(window).on("scroll", function() {
//         if ($(window).scrollTop() > $('.container__form').offset().top) {
//             if (b6 == true) {
//                 $('.b6').fadeIn('slow');
//
//                 function ExpiryTime() {
//                     $('.b6_counter').hide();
//                     $('.b6_counter_end').show();
//                 }
//
//
//
//                 setTimeout(function() {
//                     $('.b6').fadeOut('slow');
//                     $('.b7').fadeIn('slow');
//                 }, 180000);
//                 b6 = false;
//             }
//         }
//
//         if ($(window).scrollTop() > $('.container__form').offset().top - 100) {
//             $('.cta_fly').hide();
//         } else {
//             $('.cta_fly').show();
//         }
//     });
//
//     var pluginName = "ctaFly";
//
//     function CtaFly(element, options) {
//         this.element = element;
//         this.container = null;
//
//         this._name = pluginName;
//         this.init();
//     }
//
//     $.extend(CtaFly.prototype, {
//         init: function() {
//             var elem = this.element;
//             this.container = $(this.element);
//             this.container.click(this.scroll);
//         },
//         scroll: function(elem) {
//             $('html, body').animate({
//                 scrollTop: $(".container__form").offset().top - 80
//             }, 1000);
//         }
//     });
//
//     $.fn.ctaFly = function(options) {
//         return this.each(function() {
//             if (!$.data(this, "plugin_" + pluginName)) {
//                 $.data(this, "plugin_" +
//                     pluginName, new CtaFly(this, options));
//             }
//         });
//     };
//
// })(jQuery, window, document);
//
// !(function($, window, document, undefined) {
//     "use strict";
//
//     var b5 = true;
//
//     $(window).on("scroll", function() {
//         if ($(window).scrollTop() > $('.sticky_bar5-on').offset().top) {
//             if (b5 == true) {
//                 setTimeout(function() {
//                     $('.b5').fadeIn('slow');
//                 }, 1000);
//                 setTimeout(function() {
//                     $('.b5').fadeOut('slow');
//                 }, 5000);
//                 b5 = false;
//             }
//         }
//     });
//
// })(jQuery, window, document);
//
// !(function($, window, document, undefined) {
//     "use strict";
//
//     var b3 = true;
//
//     $(window).on("scroll", function() {
//         if ($(window).scrollTop() > $('.sticky_bar3-on').offset().top) {
//             if (b3 == true) {
//                 setTimeout(function() {
//                     $('.sticky_bar .fly-box').hide();
//                     $('.b3').fadeIn('slow');
//                 }, 1000);
//                 setTimeout(function() {
//                     $('.b3').fadeOut('slow');
//                 }, 5000);
//                 b3 = false;
//             }
//         }
//     });
//
// })(jQuery, window, document);
//
// !(function($, window, document, undefined) {
//     "use strict";
//
//     setTimeout(function() {
//         $('.b1').fadeIn('slow');
//     }, 1000);
//
//     $(window).on("scroll", function() {
//         if ($(window).scrollTop() > 0) {
//             setTimeout(function() {
//                 $('.b1').fadeOut('slow');
//             }, 5000);
//         }
//     });
//
// })(jQuery, window, document);
//
// $(document).ready(function() {
//     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//
//     var arr = ['#email', '#name', '#surname', '#email', '#address', '#city', '#pcode', '#note2'];
//
//     $('#cod').parent().addClass('cod_box');
//
//     function step1() {
//         $('.steps').addClass('step1');
//         $('#email, #save').parent().addClass('show');
//         $('.next_step1').css('display', 'block');
//     }
//
//     function step2() {
//         $('.container__header, .container__wrapper, .container__offer, .container__footer').hide();
//         $('.hermes .container .container__form').css({
//             'margin': '20px auto',
//             'border': 'none'
//         });
//         $('.hermes, .container').css('background-color', '#dddee3');
//         $('.steps').addClass('step2');
//         $('#email').parent().removeClass('show');
//         $('#name, #surname, #phone').parent().addClass('show');
//         $('.next_step1').css('display', 'none');
//         $('.next_step2').css('display', 'block');
//         $('.button_steps1').hide();
//         $('.button_steps2').show();
//     }
//
//     function step3() {
//         $('.steps').addClass('step3');
//         $('form div div').addClass('show');
//         $('#email').parent().removeClass('show');
//         $('#name, #surname, #phone').parent().removeClass('show');
//         $('.next_step1').css('display', 'none');
//         $('.next_step2').css('display', 'none');
//         $('.button_steps2').hide();
//         $('form #save').parent().addClass('show');
//     };
//
//     if (isMobile) {
//
//         $('.container__form').addClass('container__formMobile');
//
//         for (var i = 0, l = arr.length; i < l; i++) {
//             if ($(arr[i]).val()) {
//                 $(arr[i]).siblings('label').addClass('active');
//             }
//         }
//
//         if ($('#phone').val()) {
//             $('#phone').siblings('label').addClass('active');
//         }
//
//         $('form input, form textarea').on('focus', function() {
//             $(this).siblings('label').addClass('active');
//         });
//
//         $('form input, form textarea').on('click', function() {
//             $(this).siblings('label').addClass('active');
//         });
//
//         $('form input, form textarea').on('focusout', function() {
//             if (!$(this).val()) {
//                 $(this).siblings('label').removeClass('active');
//             }
//         });
//
//         step1();
//
//         if ($('#email').val() && !$('#email').siblings('ul').length > 0) {
//             step2();
//         }
//
//         if ($('#name').val() && $('#surname').val() && $('#phone').val() && !$('#name').siblings('ul').length > 0 && !$('#surname').siblings('ul').length > 0 && !$('#phone').siblings('ul').length > 0) {
//             step3();
//         }
//
//         $('#country').siblings('label').hide();
//
//     } else {
//         for (var i = 0, l = arr.length; i < l; i++) {
//             $(arr[i]).parent().addClass('show');
//         }
//         $('#phone').parent().addClass('show');
//         $('#country').parent().addClass('show');
//         $('#cod').parent().addClass('show');
//         $('form #save').parent().addClass('show');
//         $('.show').children('ul').hide();
//         $('.steps').css('display', 'none');
//     }
//
// });
//
// !(function($, window, document, undefined) {
//     "use strict";
//
//     var b2 = true;
//
//     $(window).on("scroll", function() {
//         if ($(window).scrollTop() > $('.sticky_bar2-on').offset().top) {
//             if (b2 == true) {
//                 setTimeout(function() {
//                     $('.sticky_bar .fly-box').hide();
//                     $('.b2').fadeIn('slow');
//                 }, 1000);
//                 setTimeout(function() {
//                     $('.b2').fadeOut('slow');
//                 }, 5000);
//                 b2 = false;
//             }
//         }
//     });
//
// })(jQuery, window, document);
//
// !(function($, window, document, undefined) {
//     "use strict";
//
//     var b4 = true;
//
//     $(window).on("scroll", function() {
//         if ($(window).scrollTop() > $('.sticky_bar4-on').offset().top) {
//             if (b4 == true) {
//                 setTimeout(function() {
//                     $('.sticky_bar .fly-box').hide();
//                     $('.b4').fadeIn('slow');
//                 }, 1000);
//                 setTimeout(function() {
//                     $('.b4').fadeOut('slow');
//                 }, 5000);
//                 b4 = false;
//             }
//         }
//     });
//
// })(jQuery, window, document);