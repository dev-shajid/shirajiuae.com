import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Gallery from "./pages/Gallery";
import { Helmet } from "react-helmet";

/*
  - Title
  - Description
  - Keywords
  - Alt tag on image
  - Heading tags on page
  - Canonical tags
  - Opengraph information
*/


function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <title>Shiraji General Contracting</title>
        <meta name="description" content="Helmet application" />
      </Helmet> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
