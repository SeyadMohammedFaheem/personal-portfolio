 

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
              <div className="blog-card">
                <div className="blog-post-img">
                  <a href="#">
                    <img src="assets/images/blog/blog1.jpg" alt="" />
                  </a>
                  <div className="blog-post-category">
                    <a href="#">Help</a>
                  </div>
                </div>
                <div className="blog-post-caption">
                  <h3>Posted on Aug 28</h3>
                  <h2><a className="link-decoration" href="#">Designing Accessible and Safe Destructive Actions</a></h2>
                  <a className="theme-btn theme-btn-two" href="https://dot-hellebore-d25.notion.site/Delete-Button-Case-Study-1e84f82a535380868c4add0893205489">Read more <i className="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 mb-4">
              <div className="blog-card">
                <div className="blog-post-img">
                  <a href="#">
                    <img src="assets/images/blog/blog2.jpg" alt="" />
                  </a>
                  <div className="blog-post-category">
                    <a href="#">Branding</a>
                  </div>
                </div>
                <div className="blog-post-caption">
                  <h3>Posted on Aug 28</h3>
                  <h2><a className="link-decoration" href="#">Starting and Growing a Career in Web Design</a></h2>
                  <a className="theme-btn theme-btn-two" href="#">Read more <i className="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="blog-card">
                <div className="blog-post-img">
                  <a href="#">
                    <img src="assets/images/blog/blog3.jpg" alt="" />
                  </a>
                  <div className="blog-post-category">
                    <a href="#">Design</a>
                  </div>
                </div>
                <div className="blog-post-caption">
                  <h3>Posted on Aug 28</h3>
                  <h2><a className="link-decoration" href="#">How Can Designers Prepare for the Future?</a></h2>
                  <a className="theme-btn theme-btn-two" href="#">Read more <i className="ri-arrow-right-line"></i></a>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </section>
    </>
  )
}
