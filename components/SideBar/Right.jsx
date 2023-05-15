import NavBar from "../NavBar/Index";
import {SideBarMenueList,SideBarSocial,SocialMedia} from "./data";
const Right = ({ active, setActive }) => {
  return (
    <>
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
      <NavBar />
      <div className="left-sidebar">
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <h1 className="logo">Salman</h1>
          <span className="designation">Third Year Student | B.E IT</span>
        </div>
        <img className="me" src="images/me.jpg" alt="Me" />
        <h2 className="email">salmanadhikari415@gmail.com</h2>
        <h2 className="address">Navi Mumbai, India</h2>

        <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
          {SocialMedia.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href} target="_blank">
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <a href="" className="theme-btn">
          <i className="las la-envelope"></i> Contact Me!
        </a>
      </div>
    </>
  );
};

export default Right;
