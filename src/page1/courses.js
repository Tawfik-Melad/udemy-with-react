import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "https://kit.fontawesome.com/490c8b9b10.js";
import './styles/courses.css';
import Card from './card'
import { Collapse } from "bootstrap";
export default function Courses(props) {
  
    return (<div>
          <div className="all_links">
            <div><a href="" id="python">Python</a></div> 
            <div> <a href=""id="excel">Excel</a></div>
            <div> <a href=""id="web">Web Development</a></div>
            <div><a href=""id="js">Javascript</a></div>
            <div> <a href=""id="data">Data science</a></div>
            <div> <a href=""id="aws" >AWS Certification</a></div>
            <div> <a href=""id="draw">Drawing</a></div>
        </div>
        <div className='courses'>
            <div className="desktop">
              <h2>Expand your career opportunities with Python</h2>
                      <p>Take one of Udemy’s range of Python courses and
                          learn how to code using this incredibly useful
                          language. Its simple syntax and readability makes
                          Python perfect for Flask, Django, data science, and machine
                          learning. You’ll learn how to build everything from games to
                          sites to apps. Choose from a range of courses that will appeal to</p>
              <div className="my-4">
                  <button className="explore"><b>Explore more</b></button>
              </div>
        </div>
        <div className='row'>
        <Card info={props.info[0]} />
        <Card info={props.info[1]} />
        <Card info={props.info[2]} />
        <Card info={props.info[3]} />
        </div>
        </div>
    </div>)
    
   
}
