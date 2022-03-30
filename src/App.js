import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post/Post';
import PostUpload from './components/Blog/PostUpload/PostUpload';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Login from './components/Blog/Login/Login'
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Spirituality from './components/Spirituality/Spirituality';
import Resources from './components/Resources/Resources';
import Yoga from './components/Yoga/Yoga';
import Admin from './components//Blog/Admin/Admin';
import Register from './components/Blog/Register/Register';
import { Context } from './context/Context';
import EventAdd from './components/EventAdd/EventAdd';

function App() {
  const { user } = useContext(Context)

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/education" element={<Education />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/spirituality" element={<Spirituality />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route exact path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          {user ? (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/blog/post-upload" element={<PostUpload />} />
              <Route path="/add-event" element={<EventAdd />} />
            </>
          ) : (
            <>
              <Route path="/access" element={<Login />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
