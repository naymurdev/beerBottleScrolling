const timeline = gsap.timeline();
timeline.from(".bgimg", 1, {
  y: innerHeight * 1,
  opacity: 0,
  ease: "elastic.out(1, 1)",
});
timeline.from(".herosec span", 1, {
  y: innerHeight * -1,
  stagger: 0.2,
  ease: "bounce.out",
});
timeline.from(
  ".one ",
  1.5,
  {
    y: -400,
    x: innerWidth * -1,
    rotation: 90,
    scale: 1.6,
    ease: "elastic.out(0.7, 1)",
  },
  "start"
);
timeline.from(
  ".two ",
  1.5,

  {
    y: innerHeight * -1,
    rotation: 180,
    ease: "elastic.out(0.7, 1)",

    scale: 1.2,
  },
  "start"
);
timeline.from(
  ".three ",
  1.5,

  {
    y: innerHeight * -1,
    ease: "elastic.out(0.7, 1)",

    scale: 1.2,
  },
  "start"
);
timeline.from(
  ".four ",
  1.5,

  {
    y: innerHeight * -1,
    rotation: -180,
    ease: "elastic.out(0.7, 1)",

    scale: 1.2,
  },
  "start"
);
timeline.from(
  ".five ",
  1.5,
  {
    y: -400,
    x: innerWidth * 1,
    rotation: 90,
    scale: 1.2,
    ease: "elastic.out(0.7, 1)",
  },
  "start"
);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.6,
    },
  })

  .to(
    ".one",
    1,
    {
      y: -400,
      x: innerWidth * -1,
      rotation: 90,
      ease: "expo.out",
    },
    "start"
  )
  .to(
    ".two",
    1,
    {
      y: innerHeight * -1,
      rotation: 180,
      ease: "expo.out",
    },
    "start"
  )
  .to(
    ".three",
    1,
    {
      rotation: 360,
      scale: 2.3,
      y: innerHeight * 1,
      ease: "expo.out",
    },
    "start"
  )
  .to(
    ".bgimg",
    1,
    {
      x: innerWidth * 1,
      ease: "expo.out",
    },
    "start"
  )
  .to(
    ".four",
    1,
    {
      y: innerHeight * -1,
      rotation: -180,
      ease: "expo.out",
    },
    "start"
  )
  .to(
    ".five",
    1,
    {
      y: -400,
      x: innerWidth * 1,
      rotation: 90,
      ease: "expo.out",
    },
    "start"
  );

gsap.from(".wrapper img", 2, {
  delay: 0.3,
  scale: 0,
  ease: "elastic.out(.5,1)",
  scrollTrigger: {
    trigger: ".wrapper",
    toggleActions: "restart pause none pause",
  },
});
gsap.set(".wrapper h1", {
  x: innerWidth * 1,
});
gsap.to(".wrapper h1 ", 2, {
  delay: 1.5,
  x: innerWidth * -0.2,
  stagger: 0.4,
  ease: "elastic.out(1, 1)",
  scrollTrigger: {
    trigger: ".wrapper",
    toggleActions: "restart pause none pause",
  },
});
