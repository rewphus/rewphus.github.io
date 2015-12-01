(function($) {
  var wh = window.innerHeight,
  $signup = $('.landing-sign-up'),
  $monitor = $('.monitor'),
  $innerS1 = $('.innerS1'),
  $innerS2 = $('.innerS2'),
  $innerS3 = $('.innerS3'),
  $manBack = $('.manBack'),
  $manFront = $('.manFront'),
  $controller = $('.controller');
  $macbook = $('.macbook');
  $gamegif = $('.gameGif');
  $lifebar = $('.lifebar-container');
  $avatar = $('.lifebar-account .material-icons');
  $manAvatar = $('.manAvatar');
  $graphs = $('.landingGraphs');
  $activity = $('.landingActivity');
  $notifications = $('.landingNotifications');
  $mask = $('.landingMask');

  // init
  var ctrl = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: 'onLeave'
      }
  });

  // Create scene
  $("section").each(function() {

    new ScrollMagic.Scene({
      triggerElement: this,
      duration: '50%'
    })
    .setPin(this)
    .addTo(ctrl);

  });

  // monitor intro animation Timeline
  var monitorIntroTl = new TimelineMax();
  monitorIntroTl
    .to($avatar, 1, {autoAlpha: .5},'1')
    .from($monitor, 1, {yPercent: 200,xPercent: 100, ease: Power4.easeInOut})
    .to($signup, 1, {yPercent: 180, xPercent: 180}, '1');

  // monitor back to stylesheet position
  new ScrollMagic.Scene({
    duration: '70%'
  })
  .setTween(monitorIntroTl)
  .triggerElement($('body')[0])
  .addTo(ctrl);

  // Animate watcher, letter A in and fade in content of section 2
  var monitorContentMan = new TimelineMax();
  monitorContentMan
    .fromTo($manBack, 1, {yPercent: 80, autoAlpha: 1, scale: 0.8}, {yPercent: -10, xPercent: -10, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    .fromTo($controller, 1, {yPercent: 40, autoAlpha: 0, scale: 0}, {yPercent: 30, xPercent: -20, autoAlpha: 1, scale: .5, ease: Power4.easeOut}, '.3')
    .fromTo($innerS1, 1, {yPercent: 220, autoAlpha: 0}, {yPercent: 20, autoAlpha: 1, ease: Power4.easeOut}, '0');

  new ScrollMagic.Scene({
    offset: wh*0.6,
    triggerElement: $('body')[0],
    duration: '80%'
  })
  .setTween(monitorContentMan)
  .addTo(ctrl);

  // Animate letter A out, letter B in and fade in content of section 3
  var monitorContentFront = new TimelineMax();
  monitorContentFront

    .to($monitor, 1, {yPercent: -50, xPercent: -10, scale: .5, autoAlpha: 0, ease: Power4.easeInOut}, '0')
    .to($mask, 1, {yPercent: -62, xPercent: -26, scale: 1.5},'0')
    .fromTo($macbook, 1, {yPercent: -60, xPercent: -40, autoAlpha: 0, scale: .5}, {yPercent: -51, xPercent: -39, autoAlpha: 1, scale: .98, ease: Power4.easeOut}, '.5')

    .to($manBack, 3, {yPercent: -30, xPercent: 10, autoAlpha: 0, scale: .2, ease: Power4.easeOut}, '.5')
    .to($controller, .1, {yPercent: 20, xPercent: -15, autoAlpha: 0, scale: .2, ease: Power4.easeOut}, '.6')
    .fromTo($manFront, 3, {yPercent: -10, xPercent: -10, autoAlpha: 0, scale: 1}, {yPercent: -30, xPercent: 10, autoAlpha: 1, scale: .2, ease: Power4.easeOut}, '.5')
    .fromTo($gamegif, 1, {yPercent: -10, xPercent: -10, autoAlpha: 0, scale: 1}, {yPercent: -58, xPercent: -40, autoAlpha: 1, scale: 1.35, ease: Power4.easeOut}, '.5')
    .to($innerS2, 1, {yPercent: 0, ease: Power4.easeInOut});



  new ScrollMagic.Scene({
    triggerElement: $('.innerS1 h2')[0],
    duration: '80%'
  })
  .setTween(monitorContentFront)
  .addTo(ctrl);

  // Animate letter A out, letter B in and fade in content of section 3
  var monitorComputer = new TimelineMax();
  monitorComputer
      .to($gamegif, 3, {scale: 0}, '0')
      .to($avatar, 1, {autoAlpha: 0},'0')
      .to($manFront, 3, {yPercent: -110, xPercent: -60, autoAlpha: 0, scale: .075}, '0')
      .fromTo($manAvatar, 1, {yPercent: -57, xPercent: -34, autoAlpha: 0, scale: .075}, {yPercent: -57, xPercent: -34, autoAlpha: 1, scale: .075},'2')
      .fromTo($graphs, 2, {yPercent: -57, xPercent: -34, autoAlpha: 0, scale: 0}, {yPercent: -57, xPercent: -34, autoAlpha: 1, scale: .75},'2');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    duration: '20%'
  })
  .setTween(monitorComputer)
  .addTo(ctrl);

  // Animate letter A out, letter B in and fade in content of section 3
  var monitorComputer2 = new TimelineMax();
  monitorComputer2
      .to($graphs, 1,{autoAlpha: 0},'0')
      .fromTo($activity, 3, {yPercent: 100, autoAlpha: 1}, {yPercent: -10, autoAlpha: 1}, '0')
      .to($lifebar, 1, {xPercent: -800, autoAlpha: 0, scale: .9}, '0');

new ScrollMagic.Scene({
  triggerElement: $('.innerS3 h2')[0],
  duration: '120%'
})
.setTween(monitorComputer2)
.addTo(ctrl);

// Animate letter A out, letter B in and fade in content of section 3
var monitorComputer3 = new TimelineMax();
monitorComputer3

    .fromTo($notifications, 1, {yPercent: 100, scale: .9}, {yPercent: -120, scale: .9}, '0')
    .to($activity, 1, {yPercent: -60}, '0');

new ScrollMagic.Scene({
triggerElement: $('.innerS4 h2')[0],
duration: '100%'
})
.setTween(monitorComputer3)
.addTo(ctrl);

// Animate letter A out, letter B in and fade in content of section 3
var monitorComputer4 = new TimelineMax();
monitorComputer4
    .to($activity, .1, {autoAlpha: 0}, '0')
    .to($notifications, 1, {yPercent: -600, autoAlpha:0}, '0')
    .to($macbook, 1, {yPercent: -160}, '0')
    .to($signup, 1, {autoAlpha: 0}, '0');

new ScrollMagic.Scene({
triggerElement: $('.innerS5 h2')[0],
duration: '20%'
})
.setTween(monitorComputer4)
.addTo(ctrl);

})(jQuery);
