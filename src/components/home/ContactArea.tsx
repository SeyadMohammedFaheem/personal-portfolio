import { useState } from 'react'

export default function ContactArea() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwEntJNjNJiJOkShebDIQc6JL2v_60TXP6DzaLn-S6cYpN67HUX50newHfpVKN4GAEA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Left side info */}
            <div className="col-lg-4">
              <div className="contact-content-part wow fadeInUp delay-0-2s">
                <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                  <span className="circle-btn"><i className="ri-map-pin-line"></i></span>
                  <h2>My Location:</h2>
                  <p>Bengaluru, Karnataka, India<br></br>
                  Riyadh, Saudi Arabia </p>
                </div>
                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                  <span className="circle-btn"><i className="ri-headphone-line"></i></span>
                  <h2>Contact Number:</h2>
                  <p>India +91 6379439162 <br></br>
                    Saudi +966 539630501
                  </p>
                </div>
                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <span className="circle-btn"><i className="ri-mail-line"></i></span>
                  <h2>Email Me:</h2>
                  <p>faheemseyadmd@gmail.com</p>
                </div>
                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <h2>Socials</h2>
                  <div className="about-social">
                   <ul className="flex items-center gap-4">
  <li>
    <a
      href="https://www.behance.net/faheemseyadmd"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Behance"
      className="hover:text-[#1769FF] transition-colors"
    >
      <i className="ri-behance-fill text-xl"></i>
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/in/seyad-mohammed-faheem/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-[#0A66C2] transition-colors"
    >
      <i className="ri-linkedin-fill text-xl"></i>
    </a>
  </li>
  <li>
    <a
      href="https://dribbble.com/faheemmeehaf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dribbble"
      className="hover:text-[#EA4C89] transition-colors"
    >
      <i className="ri-dribbble-fill text-xl"></i>
    </a>
  </li>
</ul>

                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Steve Milner"
                          required
                        />
                        <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="hello@websitename.com"
                          required
                        />
                        <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Your Subject"
                          required
                        />
                        <label htmlFor="subject" className="for-icon"><i className="far fa-user"></i></label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write Your message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn" disabled={loading}>
                          {loading ? "Sending..." : "Send Me Message"} <i className="ri-mail-line"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 text-center mt-3">
                      {success && <p className="input-success">✅ Message sent successfully!</p>}
                      {error && <p className="input-error">❌ Something went wrong. Please try again.</p>}
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
