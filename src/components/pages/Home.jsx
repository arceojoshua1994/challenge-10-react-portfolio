export default function Home() {
  return (
    <div className="container-fluid bg-primary d-flex align-items-center py-5 gradient-header" id="home" style={{ minHeight: '100vh' }}>
      <div className="container mb-5"> {/* Added bottom margin to the container */}
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0 mb-4"> {/* Added bottom margin to the image column */}
            <img className="img-fluid w-100 rounded-circle shadow-sm mb-3" src="assets/images/IMG_1973.JPG" alt="Joshua Arceo" /> {/* Added bottom margin to the image */}
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">I'm</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>Joshua Arceo</h1>
            <h2 className="text-white font-weight-normal mb-4">Full-Stack Developer, Creative Director, Musician</h2>
            <div className="d-flex align-items-center justify-content-center pt-5">
  <a href="path-to-your-resume.pdf" className="btn btn-outline-light" download>Download Resume</a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
