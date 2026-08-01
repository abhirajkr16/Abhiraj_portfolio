// Hero

$(function () {

  // Hero Image Tilt

  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 8,
    speed: 500,
    glare: true,
    "max-glare": 0.15,
    scale: 1.03
  });

});


// Typing Animation

new Typed(".typing-text", {

  strings: [
    "Backend Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Computer Science Student"
  ],

  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 1800,

  loop: true,

  smartBackspace: true,

  showCursor: true,

  cursorChar: "|"

});


// Particles

particlesJS("particles-js", {

  particles: {

    number: {
      value: 55,
      density: {
        enable: true,
        value_area: 900
      }
    },

    color: {
      value: "#6eff83"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.18,
      random: true
    },

    size: {
      value: 3,
      random: true
    },

    line_linked: {

      enable: true,

      distance: 160,

      color: "#6eff83",

      opacity: 0.08,

      width: 1

    },

    move: {

      enable: true,

      speed: 1.4,

      direction: "none",

      random: false,

      straight: false,

      out_mode: "out"

    }

  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {

        enable: true,

        mode: "grab"

      },

      onclick: {

        enable: true,

        mode: "push"

      },

      resize: true

    },

    modes: {

      grab: {

        distance: 180,

        line_linked: {

          opacity: 0.35

        }

      },

      push: {

        particles_nb: 3

      }

    }

  },

  retina_detect: true

});