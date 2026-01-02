import { Link } from 'react-router-dom';

export default function BlogArea() {
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>Stories</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="blog-card" style={{ cursor: 'pointer' }}>
                <div className="blog-post-img">
                  <Link to="/blog-post-1">
                    <img src="assets/images/blog/blog1.jpg" alt="Designing Accessible Destructive Actions" />
                  </Link>
                  <div className="blog-post-category">
                    <a href="#">UX Design</a>
                  </div>
                </div>
                <div className="blog-post-caption">
                  <h3>Posted on Aug 28</h3>
                  <h2>
                    <Link className="link-decoration" to="/blog-post-1">
                      Designing Accessible and Safe Destructive Actions
                    </Link>
                  </h2>
                  <Link className="theme-btn theme-btn-two" to="/blog-post-1">
                    Read more <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="blog-card" style={{ cursor: 'pointer' }}>
                <div className="blog-post-img">
                  <Link to="/blog-post-2">
                    <img src="assets/images/blog/blog2.jpg" alt="Building Tokenized Design System" />
                  </Link>
                  <div className="blog-post-category">
                    <a href="#">Design Systems</a>
                  </div>
                </div>
                <div className="blog-post-caption">
                  <h3>Posted on Aug 25</h3>
                  <h2>
                    <Link className="link-decoration" to="/blog-post-2">
                      Building a Tokenized Design System for Cross-Platform UI
                    </Link>
                  </h2>
                  <Link className="theme-btn theme-btn-two" to="/blog-post-2">
                    Read more <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="blog-card" style={{ cursor: 'pointer' }}>
                <div className="blog-post-img">
                  <Link to="/blog-post-3">
                    <img src="assets/images/blog/blog3.jpg" alt="Future of Design Systems" />
                  </Link>
                  <div className="blog-post-category">
                    <a href="#">AI & Future</a>
                  </div>
                </div>
                <div className="blog-post-caption">
                  <h3>Posted on Aug 20</h3>
                  <h2>
                    <Link className="link-decoration" to="/blog-post-3">
                      The Future of Design Systems: AI and Automation
                    </Link>
                  </h2>
                  <Link className="theme-btn theme-btn-two" to="/blog-post-3">
                    Read more <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}