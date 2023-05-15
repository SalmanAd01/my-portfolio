const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h1 className="logo">Salman</h1>
        <span className="designation">Third Year Student | B.E IT</span>
      </div>
      <img className="me" src="/images/me.jpg" alt="Me" />
      <h2 className="email">salmanadhikari415@gmail.com</h2>
      <h2 className="address">Navi Mumbai, India</h2>

      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://twitter.com/AdhikariSalman?t=RxCEcOAXyNev9pp2-HWnxQ&s=09"
            target="_blank"
          >
            <i className="lab la-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/salman-adhikari-a938911bb/"
            target="_blank"
          >
            <i className="lab la-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/SalmanAd01/" target="_blank">
            <i className="las la-code"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/SalmanAd01" target="_blank">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href="" className="theme-btn">
        <i className="las la-envelope"></i> Contact Me!
      </a>
    </div>
  );
};

export default LeftSideBar;
