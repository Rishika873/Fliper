import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Post from './Components/Posts';
import AboutUs from './Components/AboutUs';
import Category from './Components/Category';
import GroupFrame from './Components/GroupFrame';
import Author from './Components/Authors';
import Logo from './Components/Logo';
import Testimonial from './Components/Testimonial';
import JoinTeam from './Components/JoinTeam';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import AboutUsPage from "./Components/AboutUsPage";
// import AllPosts from "./Components/AllPosts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Navbar is common to all pages */}
        <Routes>
          {/* Define routes for each component */}
          <Route path="/" element={
            <>
              <Home />
              <Post />
              <AboutUs />
              <Category />
              <GroupFrame />
              <Author />
              <Logo />
              <Testimonial />
              <JoinTeam />
              <Footer />
            </>
          } />
          <Route path="/blog" element={
            <>
            <Blog />
            <JoinTeam/>
            <Footer/>
            </>
        } />
        <Route path="/aboutus" element={
          <>
          <AboutUsPage/>
    
          </>
        }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
