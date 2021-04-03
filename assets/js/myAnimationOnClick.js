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

const animationOnClick = {
      
      animationOnClick() {
            // let timelineAnimation = gsap.timeline();
            gsap.fromTo(
                  '.animeOnClick',
                  { opacity: 0, y: -10, x:0 },
                  { opacity: 1, y: 0, x: 0, ease: Power2.easeOut, duration: 1 ,stagger: 0.3},
                  1
            )
      }
      
}

export default animationOnClick;
