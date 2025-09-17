 
import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

import portfolio_img_1 from "../../../public/assets/images/projects/work1.jpg";
import portfolio_img_2 from "../../../public/assets/images/projects/work2.jpg";
import portfolio_img_3 from "../../../public/assets/images/projects/work3.jpg";
import portfolio_img_4 from "../../../public/assets/images/projects/work4.jpg";
import portfolio_img_5 from "../../../public/assets/images/projects/work5.jpg"; 

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
  description?: string;
  year?: string;
}

const portfolio_data:DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "Glasses of Cocktail",
    category: "Branding",
    description:
      "Quick UX improvements that increased clarity for first-time users and boosted engagement.",
    year: "2024",
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "A Branch with Flowers",
    category: "Mockup",
    description:
      "A modular component exploration to speed up design iterations.",
    year: "2023",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "Orange Rose Flower",
    category: "Video",
    description:
      "Motion study highlighting micro-interactions and delight moments.",
    year: "2023",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Green Plant on a Desk",
    category: "Branding",
    description:
      "Identity refresh exploring typography, color, and layout systems.",
    year: "2022",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Orange Rose Flower",
    category: "Mockup",
    description:
      "Concept mockups for a data-dense analytics experience.",
    year: "2022",
  },
];

export default function PortfolioArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // layout switcher: 'grid' or 'case'
  const [layout, setLayout] = useState<'grid' | 'case'>('case');
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.image);


  return (
    <>

      <div className="projects-area container" id="portfolio">
        <div className="d-flex flex-row align-items-start justify-content-between mb-4">
          <div className="section-title wow fadeInUp delay-0-2s">
            <h2>Selected Works</h2>
          </div>
          <div className="portfolio-layout-toggle">
            <button onClick={() => setLayout('case')} className={`toggle-btn ${layout === 'case' ? 'active' : ''}`}>List</button>
            <button onClick={() => setLayout('grid')} className={`toggle-btn ${layout === 'grid' ? 'active' : ''}`}>Grid</button>
          </div>
        </div>

        {layout === 'grid' && (
          <div className="container-fluid ">
            <div className="row g-4 portfolio-grid ">
              {portfolio_data.map((item, i) => (
                <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImagePopup(i)} className="work-popup">
                    <div className="portfolio-box">
                      <img src={item.image} alt="" style={{ height: "auto"}} data-rjs="2" />
                      <span className="portfolio-category">{item.category}</span>
                      <div className="portfolio-caption">
                        <h1 className="case-title" style={{ textTransform: 'uppercase' }}>{item.title}</h1>
                      </div>
                    </div>
                  </a>
                </div>
              ))} 
            </div>
          </div>
        )}

        {layout === 'case' && (
          <div className="case-list">
            {portfolio_data.map((item, i) => (
              <div key={i} className="row blog-post-box align-items-center mb-4">
                <div className="col-lg-6">
                  <div className="blog-post-img">
                    <a href="#" onClick={() => handleImagePopup(i)}>
                      <img src={item.image} alt="" />
                    </a>
                    <div className="blog-post-category">
                      <a href="#">{item.category}</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-post-caption">
                    <h3>Posted on {item.year ? item.year : ''}</h3>
                    <h2><a className="link-decoration" href="#">{item.title}</a></h2>
                    <p className="case-desc">{item.description}</p>
                    <a className="theme-btn theme-btn-two" href="#">Read more <i className="ri-arrow-right-line"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  )
}
