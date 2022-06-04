import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import PostComments from "./PostComments";

const Coments = () => {
  return (
    <div>
      <h1>Coments</h1>
      <button>
          <Link to='post'>Insert Comments</Link>
      </button>
      <ul>
          <li>
              Lis of Comments
          </li>

      </ul>
      <Routes>
      <Route path="post" element={<PostComments/>}></Route>
      </Routes>
    </div>
  );
};

export default Coments;
