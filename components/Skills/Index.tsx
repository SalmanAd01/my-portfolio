import Image from "next/image"
import { classNameAnimation, skills } from "./data"
const Index = () => {
  return (
    <section
    className="skills-area page-section scroll-to-page"
    id="skills"
  >
    <div className="custom-container">
      <div className="skills-content content-width">
        <div className="section-header">
          <h4
            className="subtitle scroll-animation"
            data-animation="fade_from_bottom"
          >
            <i className="las la-shapes"></i> my skills
          </h4>
          <h1
            className="scroll-animation"
            data-animation="fade_from_bottom"
          >
            My
            <span>Tech Stack</span>
          </h1>
        </div>

        <div className="row skills text-center">
          {
            skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-md-3 scroll-animation"
                  data-animation={classNameAnimation[index%classNameAnimation.length]}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="name">{item.name}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </section>
  )
}

export default Index