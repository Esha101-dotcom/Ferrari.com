
// hero content=============
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".hero-small", {
//     opacity: 0,
//     x: 400,
//     duration: 1.5,
//     ease: "power.out",

//     scrollTrigger: {
//         trigger: ".hero-small",
//         start: "top 80%",
//         toggleActions: "restart none restart none"
//     }
// });

// gsap.from(".hero-container h1", {
//     opacity: 0,
//     x: -250,
//     duration: 2,
//     ease: "power3.out",

//     scrollTrigger: {
//         trigger: ".hero-container h1",
//         start: "top 80%",
//         toggleActions: "restart none restart none"
//     }
// });

// gsap.from(".hero-btn", {
//     opacity: 0,
//     y: -40,
//     scale: 1.5,
//     duration: 1,
//     ease: "back.out(1.7)",

//     scrollTrigger: {
//         trigger: ".hero-btn",
//         start: "top 80%",
//         toggleActions: "restart none restart none"
//     }
// });

// hero content =============
gsap.registerPlugin(ScrollTrigger);

// Small text
gsap.from(".hero-small", {
  opacity: 0,
  x: 400,
  duration: 1.5,
  ease: "power3.out",          // fix: "power.out" galat tha
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

// Heading
gsap.from(".hero-container h1", {
  opacity: 0,
  x: -250,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

// Button
gsap.from(".hero-btn", {
  opacity: 0,
  y: -40,
  scale: 1.5,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

// Specs (naya add kiya)
gsap.from(".hero-specs li", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.2,                // ek ke baad ek aayenge
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

// design section==============

gsap.registerPlugin(ScrollTrigger);

gsap.from(".design-header .section-number", {
    opacity: 0,
    y: -50,
    duration: 2,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".design-header",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});

gsap.from(".design-header h2", {
    opacity: 0,
    x: -150,
    duration: 1.5,
ease: "sine.out",
    scrollTrigger: {
        trigger: ".design-header h2",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});

gsap.from(".design-info", {
    opacity: 0,
    x: -200,
    duration: 1.3,
ease: "sine.out",

    scrollTrigger: {
        trigger: ".design-info",
        start: "top 85%",
        toggleActions: "restart none restart none"
    }
});
gsap.from(".design-intro", {
    opacity: 0,
    x: 200,
    duration: 1.3,
ease: "sine.out",

    scrollTrigger: {
        trigger: ".design-intro",
        start: "top 85%",
        toggleActions: "restart none restart none"
    }
});

// ==========================
//     section 3 performance
//     ======================== 

gsap.registerPlugin(ScrollTrigger);

gsap.from(".performance-header .section-number", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    // ease: "power3.out",

    scrollTrigger: {
        trigger: ".performance-header",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});

gsap.from(".performance-header h2", {
    opacity: 0,
    x: -150,
    duration: 1.5,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".performance-header",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});
gsap.from(".performance-header .performance-intro", {
    opacity: 0,
    x: 150,
    duration: 1.5,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".performance-header .performance-intro",
        start: "top 75%",
        toggleActions: "restart none restart none"
    }
});

// =============================
//  SECTION 4 — THE V8 
//  ================================

gsap.registerPlugin(ScrollTrigger);

const carParts = [
    {
        title : "Front Design",
          description: "Sculpted lines and distinctive headlights define the front of the Ferrari F8 Tributo.",
        image: "images/ferrarifront.jpg",
    },
    {
        title: "Side Profile",
        description: "Flowing body lines are shaped to support airflow and the car's aerodynamic design.",
        image: "images/ferrariside.jpg"
    },
    {
        title: "Wheels & Tires",
        description: "Performance tires and carefully designed wheels help deliver grip and precise handling.",
        image: "images/Wheels & Tires.jpg"
    },
    {
        title: "Rear Design",
        description: "The rear diffuser, exhaust outlets and rear styling reflect the car's performance focus.",
        image: "images/rear-ferrari.jpg"
    },
    {
        title: "Interior & Cockpit",
        description: "The driver-focused cockpit brings controls, steering and displays within easy reach.",
        image: "images/Interior & Cockpit.jpg"
    },
    {
        title: "V8 Powertrain",
        description: "The 3.9-litre twin-turbo V8 is at the heart of the Ferrari F8 Tributo's performance.",
        image: "images/v8.jpg"
    }
];

const partsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".car-parts-section",
        start: "top top",
        end: "+=7000",
        scrub: 1.5,
        pin: true
    }
});

carParts.forEach((part, index) => {

    if (index === 0) return;

    partsTimeline.to(
        [partImage, partTitle, partDescription],
        {
            opacity: 0,
            duration: 0.8,
            ease: "power1.inOut"
        }
    );

    partsTimeline.call(() => {
        partImage.src = part.image;
        partTitle.textContent = part.title;
        partDescription.textContent = part.description;
        partNumber.textContent =
            String(index + 1).padStart(2, "0") + " / 06";
    });

    partsTimeline.to(
        [partImage, partTitle, partDescription],
        {
            opacity: 1,
            duration: 1.2,
            ease: "power1.inOut"
        }
    );

});

// Progress line
partsTimeline.to(partsProgressBar, {
    width: "100%",
    duration: 10,
    ease: "none"
}, 0);

// Animation
gsap.from(".parts-heading p", {
    opacity: 0,
x: 150,
    duration: 1.5,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".parts-heading p ",
        start: "top 75%",
        toggleActions: "restart none restart none"
    }
});
gsap.from(".parts-heading h2", {
    opacity: 0,
x: -180,
    duration: 1.5,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".parts-heading h2",
        start: "top 75%",
        toggleActions: "restart none restart none"
    }
});



// ===== SECTION 05: THE COCKPIT ANIMATION =====

// 1. Heading reveal
gsap.fromTo(
    ".cockpit-heading",
    {
        opacity: 0,
        y: 70
    },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".cockpit-header",
            start: "top 80%",
        toggleActions: "restart none restart none"
        }
    }
);

// 2. Intro text reveal
gsap.fromTo(
    ".cockpit-intro",
    {
        opacity: 0,
        y: 25
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".cockpit-header",
            start: "top 75%",
        toggleActions: "restart none restart none"
        }
    }
);

gsap.fromTo(
    ".cockpit-image",
    {
        scale: 1.15
    },
    {
        scale: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".cockpit-image-wrapper",
            start: "top 85%",
            end: "bottom 30%",
            scrub: 1
        }
    }
);

gsap.fromTo(
    ".cockpit-image-text",
    {
        opacity: 0,
        y: 35
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".cockpit-image-wrapper",
            start: "top 65%",
        toggleActions: "restart none restart none"
        }
    }
);

// 5. Detail columns reveal
gsap.fromTo(
    ".cockpit-detail",
    {
        opacity: 0,
        y: 30
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".cockpit-details",
            start: "top 85%",
        toggleActions: "restart none restart none"
        }
    }
);


// Contact section animations
gsap.registerPlugin(ScrollTrigger);

// Small Label
gsap.from(".contact-label", {
    opacity: 0,
    x: 150,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});

// Main Heading
gsap.from(".contact-info h2", {
    opacity: 0,
    x: -200,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});

// Description
gsap.from(".contact-description", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
        toggleActions: "restart none restart none"
    }
});

// Contact Details
gsap.from(".contact-detail", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-info",
        start: "top 75%",
        toggleActions: "restart none restart none"
    }
});

// Contact Form
gsap.from(".contact-form-wrapper", {
    opacity: 0,
    x: 150,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
        toggleActions: "restart none restart none"
    }
});

// Form Heading
gsap.from(".form-heading", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-form-wrapper",
        start: "top 80%",
        toggleActions: "restart none restart none"
    }
});