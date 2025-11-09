"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Index = () => {
  const typeText = useRef<HTMLParagraphElement>(null);
  const cursor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textArray = [
      "Software Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Devops Engineer",
    ];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 500; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.current!.classList.contains("typing"))
          cursor.current!.classList.add("typing");
        typeText.current!.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursor.current!.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursor.current!.classList.contains("typing"))
          cursor.current!.classList.add("typing");
        typeText.current!.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursor.current!.classList.remove("typing");
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
              Hi I&rsquo;m <span>Salman Adhikari</span>
              <span className="typed-text" ref={typeText} style={{display:"block"}}></span>
              <span className="cursor" ref={cursor}>
                &nbsp;
              </span>
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Passionate about Software Development, Backend Development, Full Stack Development, and DevOps.
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
            <Image
              src="https://res.cloudinary.com/dvdi2oaso/image/upload/v1721501848/Portfolio%20Assets/Assets/round-text_hqoe5z.png"
              alt=""
              width={150}
              height={150}
            />
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
