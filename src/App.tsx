

import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import Projects from "./components/projects";
import SingleProject from "./components/single-project";
import Blog from "./components/blog";
import Contact from "./components/contact";
import BlogDetails from "./components/blog-details";
import BlogPost1 from "./components/blog-post-1";
import BlogPost2 from "./components/blog-post-2";
import BlogPost3 from "./components/blog-post-3";
 



const router = createBrowserRouter([
  { path: "/", element: <Home /> }, 
  { path: "/about", element: <About /> }, 
  { path: "/service", element: <Service /> }, 
  { path: "/projects", element: <Projects /> }, 
  { path: "/single-project", element: <SingleProject /> }, 
  { path: "/blog", element: <Blog /> }, 
  { path: "/blog-details", element: <BlogDetails /> }, 
  { path: "/blog-post-1", element: <BlogPost1 /> }, 
  { path: "/blog-post-2", element: <BlogPost2 /> }, 
  { path: "/blog-post-3", element: <BlogPost3 /> }, 
  { path: "/contact", element: <Contact /> }, 

]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
