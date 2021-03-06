const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInLeft = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
