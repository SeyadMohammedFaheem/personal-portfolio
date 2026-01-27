import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterOne from '../../layouts/footers/FooterOne'
import HeaderOne from '../../layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import CustomCursor from '../common/CustomCursor'
import ScrollTop from '../common/ScrollTop'
import ScrollToTop from '../common/ScrollToTop'
import SingleProjectArea from './SingleProjectArea'
import { portfolio_data } from '../../data/portfolioData'

export default function SingleProject() {
  const { id } = useParams()
  const [projectTitle, setProjectTitle] = useState("Project Details")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectMetadata, setProjectMetadata] = useState<any>(null)
  const [projectImage, setProjectImage] = useState("")

  useEffect(() => {
    if (id) {
      const project = portfolio_data.find((item) => item.id === Number(id))
      if (project) {
        setProjectTitle(project.title)
        setProjectDescription(project.description || "")
        setProjectMetadata(project.metadata || null)
        setProjectImage(project.image || "")
      }
    }
  }, [id])

  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title={projectTitle}
              description={projectDescription}
              metadata={projectMetadata}
              heroImage={projectImage}
              style_3={true}
            />
            <SingleProjectArea />
          </main>
          <FooterOne />
        </div>
      </div>

      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />

    </>
  )
}
