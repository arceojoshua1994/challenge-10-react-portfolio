export default function About() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container text-center">

        {/* About Section */}
        <div id="about" className="mb-5">
          <div className="position-relative d-flex align-items-center justify-content-center mb-3">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>About</h1>
            <h1 className="position-absolute text-uppercase title-color">About Me</h1>
          </div>
          <h3 className="mb-4">UI/UX Designer & Web Developer</h3>
          <p>My name is Joshua Arceo. Born and raised in Miami, I'm passionate about creating and have a very artistic vision.
            I'm talented with front-end development and marketing. In my free time, I like to play video games, produce, and write music.
            I'm also a self-taught musician, with skills in singing and playing instruments like the guitar and piano.</p>
        </div>


        {/* Experience Section */}
        <div id="qualification" className="mb-5">
          <div className="position-relative d-flex align-items-center justify-content-center mb-3">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Quality</h1>
            <h1 className="position-absolute text-uppercase title-color">Experience</h1>
          </div>
          <div className="row justify-content-center">
            {/* First Job */}
            <div className="col-lg-6">
              <h3 className="mb-4">Retention Team Supervisor at Chewy</h3>
              <h5>(2015-2020)</h5>
              <ul>
                <li>Supervised a team of 25-100 agents, providing leadership, guidance, and coaching.</li>
                <li>Managed a group of 10-20 Leads, overseeing escalated calls and resolving customer concerns.</li>
                <li>Successfully de-escalated high-stress situations and managed customer expectations.</li>
                <li>Conducted team meetings to discuss performance and collaborate on improvements.</li>
                <li>Tracked call and resolution statistics, generating reports to monitor team performance.</li>
                <li>Presented team performance metrics and proposed ideas for future developments to management.</li>
                <li>Facilitated onboarding, training, and development of new hires.</li>
              </ul>
            </div>

            {/* Second Job */}
            <div className="col-lg-6">
              <h3 className="mb-4">Telehealth Medical Assistant at Pediatric Associates</h3>
              <h5>(2020-Present)</h5>
              <ul>
                <li>Managed virtual waiting room, checking in and triaging patients efficiently.</li>
                <li>Assisted patients with signing into the telehealth application and provided technical support.</li>
                <li>Scheduled office visits and coordinated patient appointments with clinicians.</li>
                <li>Handled tasks and requests from clinicians, ensuring seamless communication and patient care.</li>
                <li>Collaborated with medical staff to ensure the smooth operation of virtual patient care services.</li>
                <li>Facilitated onboarding, training, and development of new hires.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skill Start */}
        <div className="container-fluid py-5" id="skill">
          <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Skills</h1>
              <h1 className="position-absolute text-uppercase title-color">My Skills</h1>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">HTML</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '95%' }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">CSS</h6>
                    <h6 className="font-weight-bold">100%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">React</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Javascript</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">MySQL</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '95%' }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">MongoDB</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '85%' }} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill End */}



        {/* Qualification Section */}
        <div id="qualification" className="mb-5">
          <div className="position-relative d-flex align-items-center justify-content-center mb-3">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Qualification</h1>
            <h1 className="position-absolute text-uppercase title-color">Education</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3 className="mb-4">University of Miami</h3>
              <p>Full Stack Coding Bootcamp (2023)</p>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">Broward College</h3>
              <p>Web/Software Development (Ongoing)</p>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
}
