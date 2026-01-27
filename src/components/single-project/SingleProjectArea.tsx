import { useState, useEffect } from "react";
import ImagePopup from "../../modals/ImagePopup";
import { useParams, Link } from "react-router-dom";
import { portfolio_data, DataType } from "../../data/portfolioData";

export default function SingleProjectArea() {
  const { id } = useParams();
  const [project, setProject] = useState<DataType | null>(null);

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProject = portfolio_data.find((item) => item.id === Number(id));
      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [id]);

  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  // Prepare images for lightbox (using the main image for now)
  const images = project ? [project.image] : [];

  if (!project) {
    return (
      <section className="postbox__area grey-bg-4 pt-120 pb-120">
        <div className="container">
          <div className="text-center">
            <h2 className="postbox__details-title mb-30">Project Not Found</h2>
            <p className="mb-40">Sorry, we couldn't find the project you're looking for.</p>
            <Link to="/" className="theme-btn theme-btn-two">
              <i className="ri-arrow-left-line"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="postbox__area grey-bg-4 pt-60 pb-60">
        <div className="container">
          {/* Project Header */}
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="text-center">
                <span className="postbox__meta mb-20" style={{ display: "inline-block" }}>
                  <i className="fa-light fa-tag"></i> {project.category}
                </span>
                <h1 className="postbox__details-title mb-20" style={{ fontSize: "48px" }}>
                  {project.title}
                </h1>
                <p className="mb-30" style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Project Meta Info */}
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="d-flex flex-wrap justify-content-center gap-5">
                {project.role && (
                  <div className="text-center">
                    <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>ROLE</p>
                    <h5 className="mb-0">{project.role}</h5>
                  </div>
                )}
                {project.duration && (
                  <div className="text-center">
                    <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>DURATION</p>
                    <h5 className="mb-0">{project.duration}</h5>
                  </div>
                )}
                {project.year && (
                  <div className="text-center">
                    <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>YEAR</p>
                    <h5 className="mb-0">{project.year}</h5>
                  </div>
                )}
                {project.tools && project.tools.length > 0 && (
                  <div className="text-center">
                    <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>TOOLS</p>
                    <h5 className="mb-0">{project.tools.join(", ")}</h5>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="row">
            <div className="col-lg-12">
              <div className="postbox__thumb w-img mb-60">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(0)}
                >
                  <img src={project.image} alt={project.title} style={{ borderRadius: "12px" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="postbox__main-wrapper">

                {/* Problem Section */}
                {project.problem && (
                  <div className="mb-60">
                    <h2 className="postbox__details-title mb-30">
                      <span style={{ color: "var(--primary-color)", fontSize: "18px", display: "block", marginBottom: "10px" }}>01.</span>
                      The Problem
                    </h2>
                    <p style={{ fontSize: "16px", lineHeight: "1.8" }}>{project.problem}</p>
                  </div>
                )}

                {/* Solution Section */}
                {project.solution && (
                  <div className="mb-60">
                    <h2 className="postbox__details-title mb-30">
                      <span style={{ color: "var(--primary-color)", fontSize: "18px", display: "block", marginBottom: "10px" }}>02.</span>
                      The Solution
                    </h2>
                    <p style={{ fontSize: "16px", lineHeight: "1.8" }}>{project.solution}</p>
                  </div>
                )}

                {/* Challenges Section */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="mb-60">
                    <h2 className="postbox__details-title mb-40">
                      <span style={{ color: "var(--primary-color)", fontSize: "18px", display: "block", marginBottom: "10px" }}>03.</span>
                      Key Challenges & Solutions
                    </h2>
                    <div className="postbox__features">
                      {project.challenges.map((challenge, idx) => (
                        <div key={idx} className="mb-40" style={{
                          padding: "30px",
                          background: "rgba(255,255,255,0.5)",
                          borderRadius: "8px",
                          borderLeft: "4px solid var(--primary-color)"
                        }}>
                          <h4 className="postbox__features-title mb-20" style={{ fontSize: "20px" }}>
                            {challenge.title}
                          </h4>
                          <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "0" }}>
                            {challenge.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Results/Metrics Section */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-60">
                    <h2 className="postbox__details-title mb-40">
                      <span style={{ color: "var(--primary-color)", fontSize: "18px", display: "block", marginBottom: "10px" }}>04.</span>
                      Key Results
                    </h2>
                    <div className="row">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="col-md-6 mb-30">
                          <div className="text-center" style={{
                            padding: "40px 20px",
                            background: "rgba(255,255,255,0.7)",
                            borderRadius: "8px"
                          }}>
                            <h1 className="mb-10" style={{
                              fontSize: "48px",
                              color: "var(--primary-color)",
                              fontWeight: "700"
                            }}>
                              {metric.value}
                            </h1>
                            <p className="mb-0" style={{ fontSize: "16px", color: "#666" }}>
                              {metric.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outcome Section */}
                {project.outcome && (
                  <div className="mb-60">
                    <h2 className="postbox__details-title mb-30">
                      <span style={{ color: "var(--primary-color)", fontSize: "18px", display: "block", marginBottom: "10px" }}>05.</span>
                      Outcome & Impact
                    </h2>
                    <div className="postbox__quote">
                      <blockquote>
                        <p style={{ fontSize: "18px", lineHeight: "1.8", fontStyle: "italic" }}>
                          {project.outcome}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="postbox__share-wrapper mb-60">
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="theme-btn theme-btn-two"
                      >
                        View Full Case Study <i className="ri-arrow-right-line"></i>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="theme-btn"
                      >
                        Visit Live Site <i className="ri-external-link-line"></i>
                      </a>
                    )}
                  </div>
                </div>

                {/* Navigation to other projects */}
                <div className="postbox__share-wrapper" style={{ borderTop: "1px solid #e0e0e0", paddingTop: "40px" }}>
                  <h3 className="mb-30 text-center">More Projects</h3>
                  <div className="row">
                    {portfolio_data
                      .filter((item) => item.id !== project.id)
                      .slice(0, 3)
                      .map((item, idx) => (
                        <div key={idx} className="col-md-4 mb-20">
                          <Link to={`/projects/${item.id}`} style={{ textDecoration: "none" }}>
                            <div style={{
                              borderRadius: "8px",
                              overflow: "hidden",
                              transition: "transform 0.3s ease"
                            }}
                              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                  width: "100%",
                                  height: "200px",
                                  objectFit: "cover",
                                }}
                              />
                              <div style={{ padding: "15px", background: "rgba(255,255,255,0.9)" }}>
                                <p className="mb-1" style={{ fontSize: "12px", color: "#999", textTransform: "uppercase" }}>
                                  {item.category}
                                </p>
                                <h5 style={{ fontSize: "16px", marginBottom: "0" }}>
                                  {item.title}
                                </h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>

                  <div className="text-center mt-40">
                    <Link to="/" className="theme-btn">
                      <i className="ri-arrow-left-line"></i> Back to Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
}
