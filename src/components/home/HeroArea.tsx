import RegisterCard3D from "./RegisterCard3D";
export default function HeroArea() {
  
  return (
    <>
  <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s" style={{ paddingBottom: "20px" }}>
                <h2>UI/UX Designer</h2></div>
</div>
          </div>
          <div className="row w-100 d-flex justify-content-between">
  {/* Left side */}
  <div className="col-auto pt-10">
    <div
  className="hero-content wow fadeInUp delay-0-4s"
  style={{ maxWidth: "300px" }}
>
  <p>
    Hi, I’m Faheem, passionate in creating
    user-friendly digital experiences.
  </p>
  <a
  className="theme-btn-firstfold"
  href="/assets/Resume - Faheem Product Designer.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View Resume
</a>
</div>

  </div>

  {/* Right side */}
  <div className="col-auto pt-10">
    <div
      className="hero-content wow fadeInUp delay-0-4s"
      style={{ textAlign: "right" }}
    >
      <p>As a Designer, I specialise in:</p>
      <ul style={{ color: "black" }}>
        <li>UI/UX Design & Product Design</li>
        <li>User Research & Analysis</li>
        <li>Design Systems & Design Tokens</li>
        <li>Graphic Design & Branding</li>
        <li>Illustration & Interaction Design</li>
      </ul>
    </div>
  </div>
</div>

        </div>
        {/* Overlay 3D Register Card centered in hero area */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 10,
        }}>
          <RegisterCard3D />
        </div>
      </section>
    </>
  )
}
