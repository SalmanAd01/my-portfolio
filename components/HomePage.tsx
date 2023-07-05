import SideBar from "./SideBar/Index";
import LeftSideBar from "./SideBar/LeftSideBar";
import Hero from "./Hero/Index";
import About from "./About/Index";
import Resume from "./Resume/Index";
import Skills from "./Skills/Index";
import Loading from "./Loading/Index";
import Portfolio from "./Portfolio/Index";
const HomePage = () => {
  return (
    <>
      <Loading />
      <SideBar />

      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <LeftSideBar />
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Portfolio />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
