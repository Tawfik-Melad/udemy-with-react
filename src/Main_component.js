import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./home_page/navbar";
import Midel from "./home_page/midel";
import Courses from "./home_page/courses";
import Categories from './home_page/categories'
import CoursePage from './course_page/CoursePage'
import DarkFooter from "./home_page/DarkFooter";
import Spinner from './home_page/spinner';
export default function All() {
  const [data, setdata] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.npoint.io/bd8d7dda3c4a148ee5a8`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
      })
  }, []);
 
  {console.log('////////////////')}
  {console.log(searchWord)}
  {console.log('////////////////')}
  return (
   
    <div>
      <Router>
        <Navbar search={((word)=>setSearchWord(word))}/>
        <Routes>
          <Route path="/" element={<> <Midel />  {data.length > 0 ? <Courses info={data} target={searchWord} /> : <Spinner />}<Categories />  </>} />
          {
            data.map((course) => <Route path={'/' + course.id}
              element={<CoursePage info={course} />} />)
          }
          <Route path="*" element={<> <Midel />  {data.length > 0 ? <Courses info={data} /> : <Spinner />}<Categories />  </>} />
        </Routes>
        <DarkFooter />
      </Router>
    </div>
  )
}