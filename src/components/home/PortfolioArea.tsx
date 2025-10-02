import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

import portfolio_img_1 from "../../../public/assets/images/projects/work1.jpg";
import portfolio_img_2 from "../../../public/assets/images/projects/work2.jpg";
import portfolio_img_3 from "../../../public/assets/images/projects/work3.jpg";
import portfolio_img_4 from "../../../public/assets/images/projects/work4.jpg";
import portfolio_img_5 from "../../../public/assets/images/projects/work5.jpg";

interface MetricType {
  value: string;
  label: string;
}

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
  description?: string;
  year?: string;
  metrics?: MetricType[];
  link?: string; // ✅ Added link
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "Pickcel Dashboard Redesign",
    category: "Dashboard Design",
    description:
      "Quick UX improvements that increased clarity for first-time users and boosted engagement.",
    year: "2025",
    metrics: [
      { value: "40%", label: "Faster Onboarding" },
      { value: "25%", label: "Higher Engagement" },
    ],
    link: "https://faheem.work/projects/pickcel-dashboard-redesign",
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "Pickcel GO App Design",
    category: "UX Case Study",
    description:
      "A modular component exploration to speed up design iterations.",
    year: "2024",
    metrics: [
      { value: "3x", label: "Faster Iterations" },
      { value: "20%", label: "Improved Usability" },
    ],
    link: "https://faheem.work/projects/pickcel-go-app",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "Website Redesign",
    category: "Website Study",
    description:
      "Motion study highlighting micro-interactions and delight moments.",
    year: "2025",
    metrics: [
      { value: "15%", label: "More Retention" },
      { value: "30%", label: "Better Conversion" },
    ],
    link: "https://faheem.work/projects/website-redesign",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Octalume - Smart IoT Dashboard",
    category: "Dashboard Study",
    description:
      "Identity refresh exploring typography, color, and layout systems.",
    year: "2024",
    metrics: [
      { value: "50%", label: "UI Consistency" },
      { value: "18%", label: "Drop in Errors" },
    ],
    link: "https://www.behance.net/gallery/213204745/Octalume-Smart-IoT-Dashboard-UIUX-Design",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Scentropolis Perfume App",
    category: "App Design",
    description:
      "Concept mockups for a data-dense analytics experience.",
    year: "2024",
    metrics: [
      { value: "25%", label: "Faster Load Time" },
      { value: "10%", label: "Higher Conversion" },
    ],
    link: "https://faheem.work/projects/scentropolis-app",
  },
];

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
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
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
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.image} alt={item.title} />
                    </a>
                    <div className="blog-post-category">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.category}
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-lg-6">
                  <div className="blog-post-caption">
                    <h3>{item.year ? `Posted on ${item.year}` : ""}</h3>
                    <h2>
                      <a
                        className="link-decoration"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
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
                    <a
                      className="theme-btn theme-btn-two"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <i className="ri-arrow-right-line"></i>
                    </a>
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
