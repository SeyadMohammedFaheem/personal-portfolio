import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";
import { Link } from "react-router-dom";
import { portfolio_data } from "../../data/portfolioData";



export default function PortfolioArea() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<"grid" | "case">("case");



  const image = portfolio_data.slice(0, 5).map((item) => item.image);

  return (
    <>
      <div className="projects-area container" id="portfolio">
        <div className="d-flex flex-row align-items-start justify-content-between mb-4">
          <div className="section-title wow fadeInUp delay-0-2s">
            <h2>Selected Works</h2>
          </div>
          <div className="portfolio-layout-toggle">
            <button
              onClick={() => setLayout("case")}
              className={`toggle-btn ${layout === "case" ? "active" : ""}`}
            >
              List
            </button>
            <button
              onClick={() => setLayout("grid")}
              className={`toggle-btn ${layout === "grid" ? "active" : ""}`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* GRID LAYOUT */}
        {layout === "grid" && (
          <div className="container-fluid">
            <div className="row g-4 portfolio-grid">
              {portfolio_data.map((item, i) => (
                <div
                  key={i}
                  className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
                >
                  <Link
                    to={`/projects/${item.id}`}
                    className="work-popup"
                  >
                    <div className="portfolio-box">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ height: "auto" }}
                        data-rjs="2"
                      />
                      <span className="portfolio-category">
                        {item.category}
                      </span>
                      <div className="portfolio-caption">
                        <h1
                          className="case-title"
                          style={{ textTransform: "uppercase" }}
                        >
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASE LAYOUT */}
        {layout === "case" && (
          <div className="case-list">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className="row blog-post-box align-items-center mb-4"
              >
                {/* LEFT IMAGE */}
                <div className="col-lg-6">
                  <div className="blog-post-img">
                    <Link to={`/projects/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <div className="blog-post-category">
                      <Link to={`/projects/${item.id}`}>
                        {item.category}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-lg-6">
                  <div className="blog-post-caption">
                    <h3>{item.year ? `Posted on ${item.year}` : ""}</h3>
                    <h2>
                      <Link
                        className="link-decoration"
                        to={`/projects/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </h2>
                    <p className="case-desc">{item.description}</p>

                    {/* Metrics Section */}
                    {/* {item.metrics && (
                      <div className="d-flex flex-wrap gap-4 my-3">
                        {item.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <h4 className="fw-bold mb-0">{metric.value}</h4>
                            <small className="text-muted">
                              {metric.label}
                            </small>
                          </div>
                        ))}
                      </div>
                    )} */}

                    {/* Button */}
                    <Link
                      className="theme-btn theme-btn-two"
                      to={`/projects/${item.id}`}
                    >
                      Read Case study <i className="ri-arrow-right-line"></i>
                    </Link>
                    {item.live && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-3 theme-btn theme-btn-two"
                        style={{
                          background: "transparent",
                          color: "var(--primary-color)",
                          border: "none",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                      >
                        View Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
}
