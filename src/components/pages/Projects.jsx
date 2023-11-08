function Projects() {
  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Gallery</h1>
          <h1 className="position-absolute text-uppercase title-color">My Portfolio</h1>
        </div>
        
        <div className="row portfolio-container">
       

          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid rounded w-100" src="/assets/images/project-1.jpg" alt="Portfolio Description" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="/assets/images/project-1.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: '60px' }}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid rounded w-100" src="/assets/images/project-2.jpg" alt="Portfolio Description" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="/assets/images/project-2.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: '60px' }}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <img className="img-fluid rounded w-100" src="/assets/images/project-3.jpg" alt="Portfolio Description" />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="/assets/images/project-3.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white" style={{ fontSize: '60px' }}></i>
                </a>
              </div>
            </div>
          </div>
      



        </div>
      </div>
    </div>
  );
}

export default Projects;
