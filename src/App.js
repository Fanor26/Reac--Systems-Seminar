import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from './components/Index';
import Comments from './components/comments/Coments';
import PostComments from "./components/comments/PostComments";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <nav>
          <button>
            <Link to="/">Start</Link>
            
          </button>
          <button>
          <Link to="/comments">Comments</Link>
          </button>
        </nav>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/comments/*' element={<Comments/>}/>
          <Route path="post" element={<PostComments/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
