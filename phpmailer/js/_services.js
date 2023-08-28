const mediaQueryDesc = window.matchMedia('(min-width: 768px)')
if (mediaQueryDesc.matches) {
 
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

gsap.to(".titles__titles", {
  y: -388,
  fontSize: 60,
  color: "#DAE6F0",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "3% 20%",
    end: "25% 70%"
  }
});

gsap.to(".scroll-element", {
   opacity: 0,
   scrollTrigger: {
      trigger:".scroll-element",
    scrub: 1,
    start: "15% 20%",
    end: "100% -20%"
   }
});

gsap.to(".scroll-element-right", {
  opacity: 0,
  scrollTrigger: {
     trigger:".scroll-element-right",
   scrub: 1,
   start: "10% -40%",
   end: "0% -90%"
  }
});

gsap.to(".services", {
  y: -448,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "3% 10%",
    end: "25% 70%"
  }
});

gsap.to(".services__line-acid", {
  width: 5201,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "15% 20%",
    end: "90% 70%",
  }
});

var rule = CSSRulePlugin.getRule(".services__item-1:after");

gsap.to(rule, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "21.3% 20%",
    end: "21.3% 20%"
  }
});

gsap.to(".services__item-1", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "21.3% 20%",
    end: "21.3% 20%"
  }
});

var rule1 = CSSRulePlugin.getRule(".services__item-2:after");

gsap.to(rule1, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "27% 20%",
    end: "27% 20%"
  }
});

gsap.to(".services__item-2", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "27% 20%",
    end: "27% 20%",
  }
});

gsap.to(".services", {
  x: -3500,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "26% 20%",
    end: "70% 20%",
  }
});

var rule2 = CSSRulePlugin.getRule(".services__item-3:after");

gsap.to(rule2, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "32.5% 20%",
    end: "32.5% 20%"
  }
});

gsap.to(".services__item-3", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "32.5% 20%",
    end: "32.5% 20%",
  }
});
/*
gsap.to(".services__text-1", {
   height: "0%",
   padding: 0,
   duration: 2,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-1", {
  height: "25%",
  padding: "10px 0",
  duration: 2,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "29.9% 20%",
    end: "29.9% 20%",
  }
});
*/
var rule3 = CSSRulePlugin.getRule(".services__item-4:after");

gsap.to(rule3, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "40.9% 20%",
    end: "40.9% 20%"
  }
});

gsap.to(".services__item-4", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "40.9% 20%",
    end: "40.9% 20%",
  }
});
/*
gsap.to(".services__text-2", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-2", {
  height: "20%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "38.9% 20%",
    end: "38.9% 20%",
  }
});
*/
var rule4 = CSSRulePlugin.getRule(".services__item-5:after");

gsap.to(rule4, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "52.5% 20%",
    end: "52.5% 20%"
  }
});

gsap.to(".services__item-5", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "52.5% 20%",
    end: "52.5% 20%",
  }
});

/*gsap.to(".services__text-3", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-3", {
  height: "15%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "50.5% 20%",
    end: "50.5% 20%",
  }
});

gsap.to(".services__text-3", {
  height: 0,
  duration: 1,
  padding: 0,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%",
  }
});

gsap.to(".services__text-4", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-4", {
  height: "38%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "53% 20%",
    end: "53% 20%",
  }
});

gsap.to(".services__text-4", {
  height: "0%",
  duration: 1,
  padding: 0,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%",
  }
});

gsap.to(".services__text-5", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-5", {
  height: "20%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "57% 20%",
    end: "57% 20%",
  }
});

gsap.to(".services__text-5", {
  height: "0%",
  duration: 1,
  padding: 0,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%",
  }
});

gsap.to(".services__text-6", {
   height: "0%",
   padding: "0",
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-6", {
  height: "33%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "60% 20%",
    end: "60% 20%",
  }
});
*/
var rule5 = CSSRulePlugin.getRule(".services__item-6:after");

gsap.to(rule5, {
  backgroundColor: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67% 20%",
    end: "67% 20%"
  }
});

gsap.to(".services__item-6", {
  color: "#C7FF00",
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67% 20%",
    end: "67% 20%",
  }
});
}
/*gsap.to(".services__text-7", {
   height: "0%",
   padding: 0,
   duration: 1,
   scrollTrigger: {
     trigger:".page__body",
     scrub: 1,
     start: "0% 20%",
     end: "0% 20%",
   }
 });

gsap.to(".services__text-7", {
  height: "43%",
  padding: "10px 0",
  duration: 1,
  scrollTrigger: {
    trigger:".page__body",
    scrub: 1,
    start: "67% 20%",
    end: "67% 20%",
  }
});*/


const mediaQueryMob = window.matchMedia('(max-width: 768px)')
if (mediaQueryMob.matches) {
 
  gsap.to(".services", {
    x: 0,
    scrollTrigger: ".page__body",
  });
  gsap.to(".services", {
    y: -0,
    scrollTrigger: {
      trigger:".page__body",
      scrub: 1,
      start: "0% 10%",
      end: "25% 70%"
    }
  });
  document.addEventListener('scroll', function() {
    //  Line
    let el    = document.querySelector('.services-mob .services__items'),
        rect  = el.getBoundingClientRect().top
    rect = rect - window.innerHeight / 2
    rect = rect * -1
    if(rect > 0)
      el.style.setProperty('--offset', `${rect}px`)
    else 
      el.style.setProperty('--offset', 0)
    
    // Circles
    document.querySelectorAll('.services-mob .services__title-mob').forEach(function(el) {
      rect = el.getBoundingClientRect().top
      rect = rect - window.innerHeight / 2
      rect = rect * -1
      if(rect > 0)
        el.classList.add('active')
      else
        el.classList.remove('active')
    })
  })

}