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
import Loading from '../components/Loading/Index'
import { useEffect, useRef, useState } from "react";

export default function Home(this: any) {
  const [active, setActive] = useState(false);

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



  return (
    <>

      <Loading />
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
    </>
  );
}
