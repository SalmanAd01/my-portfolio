"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./responsive.css";
import SideBar from "../components/SideBar/Index";
import LeftSideBar from "../components/SideBar/LeftSideBar";
import Hero from "../components/Hero/Index";
import About from "../components/About/Index";
import Resume from "../components/Resume/Index";
import Skills from "../components/Skills/Index";
import { useEffect, useRef, useState } from "react";
import jQuery from "jquery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function Home(this: any) {
  const [active, setActive] = useState(false);
  const pageLoaderRef = useRef(null);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
    const loader = pageLoaderRef.current! as any;
    const delay = 500;
    const fadeOutDuration = 1000;
  
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
      }, fadeOutDuration);
    }, delay);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const windscroll = document.documentElement.scrollTop;

      if (windscroll >= 0) {
        const scrollToPage = document.querySelectorAll(".scroll-to-page");
        scrollToPage.forEach((el: any, i) => {
          const wscrolldecress = windscroll + 1;

          if (el.offsetTop <= wscrolldecress - 0) {
            const scrollNav = document.querySelectorAll(
              ".scroll-nav .scroll-to"
            );
            scrollNav.forEach((el) => el.classList.remove("active"));
            scrollNav[i].classList.add("active");

            const scrollNavResponsive = document.querySelectorAll(
              ".scroll-nav-responsive a"
            );
            scrollNavResponsive.forEach((el) => el.classList.remove("active"));
            scrollNavResponsive[i].classList.add("active");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <div className="page-loader"  ref={pageLoaderRef}>
        <div className="bounceball"></div>
      </div>

      <span
        className="icon-menu"
        onClick={() => {
          setActive(!active);
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
      </span>

      <SideBar active={active} setActive={setActive} />

      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <LeftSideBar />
            <Hero />
            <About />
            <Resume />
            <Skills />
          </div>
        </div>
      </main>
      {/* <script src="./assets/js/script.js"></script> */}
    </>
  );
}
