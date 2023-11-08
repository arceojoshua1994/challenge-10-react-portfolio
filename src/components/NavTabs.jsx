function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5"><span className="text-primary">J</span>A</h1>
      </a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
          <a
            href="#home"
            className={`nav-item nav-link ${currentPage === 'Home' ? 'active' : ''}`}
            onClick={() => handlePageChange('Home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-item nav-link ${currentPage === 'About' ? 'active' : ''}`}
            onClick={() => handlePageChange('About')}
          >
            About
          </a>
          {/* Assuming 'Quality' should link to 'Projects' as per your original component */}
          <a
            href="#projects"
            className={`nav-item nav-link ${currentPage === 'Projects' ? 'active' : ''}`}
            onClick={() => handlePageChange('Projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`nav-item nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
            onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
          {/* Add more links as needed */}
        </div>
        <a href="#contact" className="btn btn-outline-primary d-none d-lg-block" onClick={() => handlePageChange('Contact')}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;
