"use client"
import { useEffect, useRef } from "react";

const Index = () => {
  const myAge = useRef(this);
  useEffect(() => {
    const myBirthDate = new Date("2003-01-08");
    const myAgeInMilliseconds = Date.now() - myBirthDate.getTime();
    const myAgeDate = new Date(myAgeInMilliseconds);
    const myAgeVal = Math.abs(myAgeDate.getUTCFullYear() - 1970);
    myAge.current.innerHTML = myAgeVal;
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Versatile Software Developer with Diverse Skill Set and Passion
              for<span> Learning</span>
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Hello, I&lsquo;m Salman Adhikari, a{" "}
            <span id="my-age" ref={myAge}>
              20
            </span>
            -year-old self-taught software developer based in Navi Mumbai,
            India. I have worked with many technologies, including machine
            learning, deep learning, full-stack web development, Flutter, and
            DevOps.
            <br />
            <br />
            One thing I enjoy about programming is collaborating with others,
            especially those I have worked with in the past. I find that working
            with familiar faces can lead to better communication, productivity,
            and more innovative solutions to complex problems. I&lsquo;m always
            eager to learn from each project I work on and continuously strive
            to improve my skills and knowledge.
            <br />
            <br />
            My passion for software development began at a young age, and I have
            since gained experience through various personal projects and
            internships. I am always looking for new opportunities to challenge
            myself and expand my skill set.
            <br />
            <br />
            Overall, I&lsquo;m a dedicated and driven individual who is
            committed to delivering high-quality work. I&lsquo;m excited to
            continue growing my skills as a software developer and making a
            positive impact in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
