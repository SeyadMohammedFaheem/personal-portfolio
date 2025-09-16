 
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: 2.5,
    cls: "plus",
  },
  {
    id: 2,
    title: 'Completed Projects',
    count: 10,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Screens Designed',
    count: 300,
    cls: "plus",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>A designer with 3+ years of experience shaping intuitive digital products. With a background in computer engineering, I bring a strong technical foundation to my design process. Guided by a habit of asking “why” and a deep attention to detail, I focus on understanding user behavior and creating solutions that are both impactful and effortless to use.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
