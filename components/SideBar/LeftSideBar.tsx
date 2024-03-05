import { SocialMedia } from "./data";
import Image from "next/image";
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h1 className="logo">Salman</h1>
        <span className="designation">Third Year Student | B.E IT</span>
      </div>
      <Image 
      className="me" 
      src="/images/me.jpg" 
      alt="Me"
      width={350}
      height={300}
      />

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
      <a href="mailto: salmanadhikari415@gmail.com" className="theme-btn">
        <i className="las la-envelope"></i> Contact Me!
      </a>
    </div>
  );
};

export default LeftSideBar;
