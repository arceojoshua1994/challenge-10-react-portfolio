export default function Contact() {
  return (
    <div className="container-fluid py-5 " id="contact">
      <div className="container">
        <div className="position-relative d-flex justify-content-center">
          <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Contact</h1>
          <h1 className="position-absolute text-uppercase title-color">Contact Me</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form text-center">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate="novalidate" className="form-styled">
                <div className="form-row">
                  <div className="control-group col-12 col-md-6 mb-3">
                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="control-group col-12 col-md-6 mb-3">
                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="control-group mb-3">
                  <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required />
                </div>
                <div className="control-group mb-3">
                  <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message" required></textarea>
                </div>
                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
