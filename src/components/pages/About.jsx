export default function About() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
    <div className="container text-center">

      {/* About Section */}
      <div id="about" className="mb-5">
        <div className="position-relative d-flex align-items-center justify-content-center mb-3">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>About</h1>
          <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
        </div>
        <h3 className="mb-4">UI/UX Designer & Web Developer</h3>
        <p>My name is Joshua Arceo. Born and raised in Miami, I'm passionate about creating and have a very artistic vision. 
           I'm talented with front-end development and marketing. In my free time, I like to play video games, produce, and write music. 
           I'm also a self-taught musician, with skills in singing and playing instruments like the guitar and piano.</p>
      </div>

      {/* Qualification Section */}
      <div id="qualification" className="mb-5">
        <div className="position-relative d-flex align-items-center justify-content-center mb-3">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Quality</h1>
          <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {/* Education & Experience Lists */}
            {/* Content will be similar for Education and Experience, so replicate this structure for both */}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skill" className="mb-5">
        <div className="position-relative d-flex align-items-center justify-content-center mb-3">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Skills</h1>
          <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Skills Progress Bars */}
            {/* Repeat the structure for each skill */}
          </div>
        </div>
      </div>

    </div>
  </div>

    
  );
}
