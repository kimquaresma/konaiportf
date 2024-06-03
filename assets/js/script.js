const topSwiper = new Swiper('.sc-media .swiper',{
  slidesPerView:"auto",
  spaceBetween: 35,
})

$(function(){
  let lastScroll = 0;
  $(window).scroll(function(){
    current = $(this).scrollTop()
    target = $('.main .sc-history').offset().top;
    if (current > target){
      $('.header').addClass('hide');
      $('.gotop').addClass('show');
    } else {
      $('.header').removeClass('hide');
      $('.gotop').removeClass('show');
    }
    lastScroll = current
  })



var lastScrollTop = 0;
var delta = 1;
var headerHeight = $('.header').outerHeight();
var historyOffset = $('.sc-history').offset().top;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > headerHeight){
        // Scroll Down
        if (st > historyOffset) {
          $('header').removeClass('show');
          $('header').css('background-color','#fff')
          $('#gnb .gnb-item > a').css('color', '#000')
        }
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if(st + $(window).height() < $(document).height()) {
          $('header').addClass('show');
        }
    }
    if (st < 500 ){
      $('header').css('background-color', 'transparent');
      $('#gnb .gnb-item > a').css('color', '#fff')
    }
    
    lastScrollTop = st;
});


$('.gnb-item').hover(function(){
  $('header').css('background-color','#fff')
  $('#gnb .gnb-item > a').css('color', '#000')
},function(){
  $('header').css('background-color', 'transparent');
  $('#gnb .gnb-item > a').css('color', '#fff')
})


  $('.gotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
  })

  $('#gnb .gnb-item').hover(function(){

    $('#header').addClass('on')

    $('.sub-list').removeClass('on')
    $(this).find('.sub-list').addClass('on');


  })

  $('#gnb .gnb-list').mouseleave(function(){
    $('#header').removeClass('on')
    $('.sub-list').removeClass('on')
  })


  ScrollTrigger.create({
    trigger:".sc-history .image",
    start:"0% 60%",
    end:"100% 60%",
    // markers:true,
    // toggleClass:"active"
    onEnter:function(){
      $('.sc-history .image').addClass('active');
    },
    onLeave:function(){

    },
    onEnterBack:function(){

    },
    onLeaveBack:function(){
      $('.sc-history .image').removeClass('active');
    }
  })



   textMotion1 = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-intro .desc",
      start:"0% 60%",
      end:"100% 60%",
      // markers:true,
      toggleActions:"play none none reverse"
    }
  })
  textMotion1.from('.sc-intro [data-motion="text"]',{ 
    y:20,
    opacity:0,
    stagger:0.1 
  })


  gsap.to('.sc-first .con2',{
    scrollTrigger:{
      trigger:".sc-first",
      start:"25% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:0,
    },
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  })





  faith = gsap.timeline({
      scrollTrigger:{
      trigger:".sc-value .sticky-wrapper",
      start:"0% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:0,
    },

  })
  faith.to('.sc-faith p',{
    opacity:0
  })
  faith.to('.sc-borderless',{
    autoAlpha:1
  })





  ScrollTrigger.create({
    trigger:".sc-core",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    onUpdate:function(self){

      if (self.progress >= 0.75) {
        console.log('마지막');
        $('.core-right a:nth-child(4)').addClass('active').siblings().removeClass('active');
        $('.sc-core .bg4').addClass('on').siblings().removeClass('on')
      } else if(self.progress >= 0.5){
        console.log('셋');
        $('.core-right a:nth-child(3').addClass('active').siblings().removeClass('active');
        $('.sc-core .bg3').addClass('on').siblings().removeClass('on')
      }else if(self.progress >= 0.25){
        console.log('둘');
        $('.core-right a:nth-child(2)').addClass('active').siblings().removeClass('active');
        $('.sc-core .bg2').addClass('on').siblings().removeClass('on')
      }else{
        console.log('첫');
        $('.core-right a:nth-child(1)').addClass('active').siblings().removeClass('active');
        $('.sc-core .bg1').addClass('on').siblings().removeClass('on')
      }
    }
  })



  $('.sc-partner .partner-wrap ul li').each(function(i,element){
    gsap.from($(this),{
      scrollTrigger:{
        trigger:$(this),
        start:"0% 70%",
        end:"100% 100%",
        // markers:true,
        toggleActions:"play none none reverse"
      },
      opacity:0,
      yPercent:10
    })

  })



})