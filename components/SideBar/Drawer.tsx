import { useEffect, useState } from "react";
import {SideBarMenueList,SideBarSocial,SocialMedia} from "./data";
const Drawer = () => {
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
          <span
        className="icon-menu"
        onClick={() => {
          setActive(!active);
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      <div className={"responsive-sidebar-menu " + (active ? "active" : "")}>
        <div
          className="overlay"
          onClick={() => {
            setActive(false);
          }}
        ></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              {SideBarMenueList.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="scroll-to"
                      href={item.href}
                      onClick={() => {
                        setActive(false);
                      }}
                    >
                      <i className={item.icon}></i> <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              {SideBarSocial.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.href} target="_blank">
                      <i className={item.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
