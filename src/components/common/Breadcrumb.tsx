
export default function Breadcrumb({ title, description, metadata, heroImage, style_2, style_3, style_4 }: any) {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2 style={{ fontSize: "68px" }}>{title}</h2>
              {description && (
                <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "900px", margin: "20px auto 0" }}>
                  {description}
                </p>
              )}
              {style_2 && !description &&
                <p>A Collection of My Latest Works and Achievements: Discover the Projects that Define My Passion and Skills</p>
              }
              {style_3 && !description &&
                <p>Fill out the form below to get in touch with me. I am always excited to hear about new opportunities and I will do my best to respond to your inquiry within 24 hours.</p>
              }
              {style_4 && !description &&
                <p>Stories, Advice, and Inspiration for the Curious Mind</p>
              }

              {/* Metadata Table */}
              {metadata && (
                <div style={{ marginTop: "50px", maxWidth: "900px", margin: "50px auto 0" }}>
                  <table style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px"
                  }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <th style={{
                          padding: "15px 20px",
                          textAlign: "left",
                          fontWeight: "400",
                          color: "#999",
                          textTransform: "uppercase",
                          fontSize: "11px",
                          letterSpacing: "1px"
                        }}>ROLE</th>
                        <th style={{
                          padding: "15px 20px",
                          textAlign: "left",
                          fontWeight: "400",
                          color: "#999",
                          textTransform: "uppercase",
                          fontSize: "11px",
                          letterSpacing: "1px"
                        }}>DURATION</th>
                        <th style={{
                          padding: "15px 20px",
                          textAlign: "left",
                          fontWeight: "400",
                          color: "#999",
                          textTransform: "uppercase",
                          fontSize: "11px",
                          letterSpacing: "1px"
                        }}>YEAR</th>
                        <th style={{
                          padding: "15px 20px",
                          textAlign: "left",
                          fontWeight: "400",
                          color: "#999",
                          textTransform: "uppercase",
                          fontSize: "11px",
                          letterSpacing: "1px"
                        }}>TOOLS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{
                          padding: "20px",
                          color: "#333",
                          fontSize: "13px"
                        }}>
                          {metadata.role || "—"}
                        </td>
                        <td style={{
                          padding: "20px",
                          color: "#333",
                          fontSize: "13px"
                        }}>
                          {metadata.duration || "—"}
                        </td>
                        <td style={{
                          padding: "20px",
                          color: "#333",
                          fontSize: "13px"
                        }}>
                          {metadata.year || "—"}
                        </td>
                        <td style={{
                          padding: "20px",
                          color: "#333",
                          fontSize: "13px"
                        }}>
                          {metadata.tools || "—"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Hero Image */}
              {heroImage && (
                <div style={{
                  marginTop: "50px",
                  maxWidth: "1000px",
                  margin: "50px auto 0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                }}>
                  <img
                    src={heroImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
