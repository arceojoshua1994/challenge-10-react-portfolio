export default function Contact() {

  useEffect(() => {
    // Function to check if an input field is empty
    const handleBlur = (event) => {
      if (!event.target.value) {
        event.target.classList.add('is-invalid');
      } else {
        event.target.classList.remove('is-invalid');
      }
    };

    // Function to validate email
    const validateEmail = (event) => {
      const email = event.target.value;
      const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email.toLowerCase())) {
        event.target.classList.add('is-invalid');
      } else {
        event.target.classList.remove('is-invalid');
      }
    };

    // Add event listeners
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    nameInput.addEventListener('blur', handleBlur);
    emailInput.addEventListener('blur', handleBlur);
    emailInput.addEventListener('input', validateEmail);
    subjectInput.addEventListener('blur', handleBlur);
    messageInput.addEventListener('blur', handleBlur);

    // Clean up function
    return () => {
      nameInput.removeEventListener('blur', handleBlur);
      emailInput.removeEventListener('blur', handleBlur);
      emailInput.removeEventListener('input', validateEmail);
      subjectInput.removeEventListener('blur', handleBlur);
      messageInput.removeEventListener('blur', handleBlur);
    };
  }, []);


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
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="control-group mb-3">
                      <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="control-group mb-3">
                      <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="control-group mb-3">
                      <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="control-group mb-3">
                      <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message" required></textarea>
                    </div>
                    <button className="btn btn-outline-color" type="submit" id="sendMessageButton">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
