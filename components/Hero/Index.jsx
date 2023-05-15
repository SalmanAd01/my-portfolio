"use client";
import { useEffect, useRef } from "react";

const Index = () => {
  const typeText = useRef();
  const cursor = useRef();

  useEffect(() => {
    const textArray = [
      "Machine Learning App",
      "Full Stack App",
      "Devops",
      "Flutter App",
      "Software Engineer",
    ];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 500; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.current.classList.contains("typing"))
          cursor.current.classList.add("typing");
        typeText.current.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursor.current.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursor.current.classList.contains("typing"))
          cursor.current.classList.add("typing");
        typeText.current.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursor.current.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
      if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-home"></i> Introduce
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Hi I&lsquo;m <span>Salman Adhikari</span>, I design and develope{" "}
              <span className="typed-text" ref={typeText}></span>
              <span className="cursor" ref={cursor}>
                &nbsp;
              </span>
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Passionate about backend development, machine learning, and DevOps,
            I have a knack for designing and coding beautifully simple solutions
            that solve complex problems. Through my expertise in these areas, I
            strive to create elegant designs and cutting-edge technologies that
            not only meet but exceed expectations. Simply put, I absolutely love
            what I do!
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-animation="rotate_up"
          >
            <img src="/images/round-text.png" alt="" />
            <i className="las la-arrow-down"></i>
          </a>

          <div className="facts d-flex">
            <div
              className="left scroll-animation"
              data-animation="fade_from_left"
            >
              <h1>4+</h1>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
            <div
              className="right scroll-animation"
              data-animation="fade_from_right"
            >
              <h1>50+</h1>
              <p>projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
