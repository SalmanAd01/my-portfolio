const Index = () => {
  return (
    <section
    className="resume-area page-section scroll-to-page"
    id="resume"
  >
    <div className="custom-container">
      <div className="resume-content content-width">
        <div className="section-header">
          <h4
            className="subtitle scroll-animation"
            data-animation="fade_from_bottom"
          >
            <i className="las la-briefcase"></i> Resume
          </h4>
          <h1
            className="scroll-animation"
            data-animation="fade_from_bottom"
          >
            Education &<span>Experience</span>
          </h1>
        </div>

        <div className="resume-timeline">
          <div
            className="item scroll-animation"
            data-animation="fade_from_right"
          >
            <span className="date">2021 - Present</span>
            <h2>Third year B.E IT</h2>
            <p>Average cgpa: 9.6</p>
          </div>
          <div
            className="item scroll-animation"
            data-animation="fade_from_right"
          >
            <span className="date">2018 - 2020</span>
            <h2>12th Maharashtra Board</h2>
            <p>87%</p>
            <h2>MH-CET</h2>
            <p>93.92%</p>
          </div>
          <div
            className="item scroll-animation"
            data-animation="fade_from_right"
          >
            <span className="date">2018</span>
            <h2>10th Maharashtra Board</h2>
            <p>86%</p>
            <h2>MH-CIT</h2>
            <p>95%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Index