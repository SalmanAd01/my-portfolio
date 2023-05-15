import jQuery from "jquery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    const defaults = {
      duration: 1.2,
      ease: 'power4.out',
      animation: 'fade_from_bottom',
      once: false,
    };

    const scrollAnimations = () => {
      gsap.utils.toArray('.scroll-animation').forEach((box:any) => {
        const gsap_obj = {};
        const settings = {
          duration: box.dataset.animationDuration || defaults.duration,
        };
        const animations:any = {
          fade_from_bottom: {
            y: 180,
            opacity: 0,
          },
          fade_from_top: {
            y: -180,
            opacity: 0,
          },
          fade_from_left: {
            x: -180,
            opacity: 0,
          },
          fade_from_right: {
            x: 180,
            opacity: 0,
          },
          fade_in: {
            opacity: 0,
          },
          rotate_up: {
            y: 180,
            rotation: 10,
            opacity: 0,
          },
        };
        const scroll_trigger = {
          scrollTrigger: {
            trigger: box,
            once: defaults.once,
            start: 'top bottom+=20%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        };
        Object.assign(gsap_obj, settings);
        Object.assign(gsap_obj, animations[box.dataset.animation || defaults.animation]);
        Object.assign(gsap_obj, scroll_trigger);
        gsap.from(box, gsap_obj);
      });
    };

    gsap.registerPlugin(ScrollTrigger);

    scrollAnimations();

    window.addEventListener('resize', ScrollTrigger.refresh as any);
    window.addEventListener('load', ScrollTrigger.refresh as any);

    return () => {
      window.removeEventListener('resize', ScrollTrigger.refresh as any);
      window.removeEventListener('load', ScrollTrigger.refresh as any);
    };
  }, []);

  return (
    <section
    className="resume-area page-section scroll-to-page"
    id="resume"
  >
    <div className="custom-container">
      <div className="resume-content content-width">
        <div className="section-header">
          <h4
            className="subtitle scroll-animation"
            data-animation="fade_from_bottom"
          >
            <i className="las la-briefcase"></i> Resume
          </h4>
          <h1
            className="scroll-animation"
            data-animation="fade_from_bottom"
          >
            Education &<span>Experience</span>
          </h1>
        </div>

        <div className="resume-timeline">
          <div
            className="item scroll-animation"
            data-animation="fade_from_right"
          >
            <span className="date">2021 - Present</span>
            <h2>Third year B.E IT</h2>
            <p>Average cgpa: 9.6</p>
          </div>
          <div
            className="item scroll-animation"
            data-animation="fade_from_right"
          >
            <span className="date">2018 - 2020</span>
            <h2>12th Maharashtra Board</h2>
            <p>87%</p>
            <h2>MH-CET</h2>
            <p>93.92%</p>
          </div>
          <div
            className="item scroll-animation"
            data-animation="fade_from_right"
          >
            <span className="date">2018</span>
            <h2>10th Maharashtra Board</h2>
            <p>86%</p>
            <h2>MH-CIT</h2>
            <p>95%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Index