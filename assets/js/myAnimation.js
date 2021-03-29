import { gsap } from "gsap";
/**
 * Gsap plugins
 *
 * Use 'process.client' to avoid 'Window is not defined' errors
 * This is due to the 'server-side' rendering.
 */
if (process.client) {
      const { ScrollTrigger } = require("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
}

const animation = {
      animation() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray(".animation_scroll").forEach(function (elem) {
                  animation.hide(elem);
                  ScrollTrigger.create({
                        trigger: elem,
                        start: '2px 95%',
                        end: '100% 0px',
                        toggleActions: 'restart pause reverse pause',
                        onEnter: function () {
                              animation.animateForm(elem, -1);
                        },
                        onEnterBack: function () {
                              animation.animateForm(elem, 1);
                        },
                        onLeave: function () {
                              animation.hide(elem);
                        },
                        // markers: true,
                  });
                  
            });
      },
      hide(elem) {
            gsap.to(elem, { opacity: 0 });
      },
      animateForm(elem, direction) {
            direction = direction | 1;
            let params = {
                  x: 30,
                  y: 0,
                  order: null,
                  decalage: 0.3,
                  duration: 0.7,
                  opacity: 1,
            }
            if (elem.classList.contains("direction_y")) {
                  params.y = direction * 10;
                  params.x = 0;
            } else if (elem.classList.contains("direction_y_renverse")){
                  params.y = -1 * (direction * 10);
                  params.x = 0;
            } else if (elem.classList.contains("direction_right")) {
                  params.y = 0;
            } else if (elem.classList.contains("direction_left")) {
                  params.x = - params.x;
            } else {
                  params.x = 0;
                  params.y = 0;
                  params.opacity = 0;
                  params.decalage = 0;
                  params.duration = 0;
            }
            if (params.decalage >= 0 ){
                  for (let i = 0; i <= 10; i++) {
                        if (elem.classList.contains("order" + i) && ( params.x != 0 || params.y != 0)) {
                              params.order = (i * params.decalage) + 0.1; // decalage time
                        }
                  }
            } else if (params.decalage< 0) {
                  for (let i = 10; i >= 0; i--) {
                        if (elem.classList.contains("order" + i) && (params.x != 0 || params.y != 0 || params.decalage != 0)) {
                              params.order = (i * params.decalage) + 0.1; // decalage time
                        }
                  }
            }
            let timelineAnimation = gsap.timeline();
            timelineAnimation.fromTo(
                  elem,
                  { opacity: 0, y: params.y, x: params.x },
                  { opacity: params.opacity, y: 0, x: 0, ease: Power2.easeOut, duration: params.duration},
                  params.order
            )
      },
}

export default animation;
