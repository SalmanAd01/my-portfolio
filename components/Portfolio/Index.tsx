import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import PortfolioData from "./data";

const Index = () => {
  const [indexImage, setIndexImage] = useState(-1);

  const slides = PortfolioData.map((item) => ({
    src: item.image,
    width: 1000,
    height: 1000,
  }));

  return (
    <>
      <section
        className="portfolio-area page-section scroll-to-page"
        id="portfolio"
      >
        <div className="custom-container">
          <div className="portfolio-content content-width">
            <div className="section-header">
              <h4
                className="subtitle scroll-animation"
                data-animation="fade_from_bottom"
              >
                <i className="las la-grip-vertical"></i> portfolio
              </h4>
              <h1
                className="scroll-animation"
                data-animation="fade_from_bottom"
              >
                Featured <span>Projects</span>
              </h1>
            </div>
            <div className="row portfolio-items">
              {PortfolioData.map((item, index) => (
                <div
                  key={index}
                  className={`col-md-${item.col} scroll-animation`}
                  data-animation="fade_from_bottom"
                >
                  <div className="portfolio-item portfolio-full">
                    <div className="portfolio-item-inner">
                      <Image
                        src={item.image}
                        alt="Portfolio"
                        onClick={() => {
                          setIndexImage(index);
                        }}
                        width={1000}
                        height={1000}
                      />

                      <ul className="portfolio-categories">
                        {item.languages.map((language, id) => (
                          <li key={id}>
                            <p
                              onClick={() => {
                                setIndexImage(index);
                              }}
                            >
                              {language}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h2>
                      <a href={item.projectUrl} target="_blank">
                        {item.title}
                      </a>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {indexImage > -1 && (
        <Lightbox
          slides={slides}
          index={indexImage}
          open={true}
          close={() => setIndexImage(-1)}
          on={{
            click: (slide: any) => {
              window.open(PortfolioData[slide.index].projectUrl, "_blank");
            },
          }}
          styles={{
            slide: {
              cursor: "pointer",
            },
          }}
        />
      )}
    </>
  );
};

export default Index;
