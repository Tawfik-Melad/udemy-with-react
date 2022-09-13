import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./page1/navbar";
import Midel from "./page1/midel";
import Courses from "./page1/courses";
import Categories from './page1/categories'
import CoursePage from './page2/CoursePage'
import DarkFooter from "./DarkFooter";
export default function All() {
  const [data, setdata] = useState([]);
  useEffect(() => {
      axios
          .get(`https://api.npoint.io/bd8d7dda3c4a148ee5a8`)
          .then((res) => {
              setdata(res.data);
          })
          .catch((err) => {
          })
  }, []);
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<> <Midel  /><Courses info={data}/><Categories />  </>} />
          <Route path="/course1" element={<CoursePage info={data[0]} />} />
        <Route path="/course2" element={<CoursePage info={data[1]}/>} />
        <Route path="/course3" element={<CoursePage info={data[2]}/>} />
        <Route path="/course4" element={<CoursePage info={data[3]}/>} />
        <Route path="*" element={<> <Midel  /><Courses info={data}/><Categories />  </>} />
      </Routes>
      <DarkFooter/>
    </Router>
    </div>
  )
}
