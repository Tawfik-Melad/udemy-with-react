import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "https://kit.fontawesome.com/490c8b9b10.js";
import './styles/courses.css';
import {useNavigate} from 'react-router-dom'
export default function Card(props) {


    function buildRate() {
        var rate = [];
        for (let i = 1; i <= 5; i++) {
          if (Number(props.info?.rate) >= i) rate.push(<span className="fa fa-star checked"></span>);
          else if (Math.floor((Number(props.info?.rate))) + 1 >= i)
            rate.push(<span className="fa fa-star-half-stroke"></span>);
          else rate.push(<span className="fa-regular fa-star"></span>);
        }
        console.log(rate);
        return rate;
  }
  const navigate = useNavigate();
  return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 small-course">
            <div className="card h-100">
                <img onClick={()=>navigate("/course"+props?.info.id)} className="d-block w-100 h-100 card-img-top" src={props.info?.image} alt="python course" />
                <div className="card-body">
                  <h4 className="card-title">{props.info?.title}</h4>
                  <p className="card-text">{props.info?.instructor[props.id]?.name}</p>
                  <p  className='make-gold'>
                        <span  >{props.info?.rate}</span>
                        {buildRate()}
                    </p>
                    <p><b>E£${props.info?.price}</b></p>
                </div>
          </div>
          </div>
  )
}
