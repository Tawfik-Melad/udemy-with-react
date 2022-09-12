import React from "react";
import { StarFill, Star, HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import Styles from './Reviews.module.css'
import "https://kit.fontawesome.com/490c8b9b10.js";
import "bootstrap/dist/css/bootstrap.css";

function Reviews(props) {

    function buildRate(element) {
        var rate = [];
        for (let i = 1; i <= 5; i++) {
          if (Number(element?.rate) >= i) rate.push(<span className="fa fa-star checked"></span>);
          else if (Math.floor((Number(element?.rate))) + 1 >= i)
            rate.push(<span className="fa fa-star-half-stroke"></span>);
          else rate.push(<span className="fa-regular fa-star"></span>);
        }
        return rate;
  }


    return(
        <div>
            <h2>Reviews</h2>
            <div className={Styles.Box}></div>
            {props?.info?.reviews.map((item)=>
            <div className={Styles.Box}>
                <div className={Styles.Student}>
                    <div className={Styles.Icon}>
                        <span className={Styles.IconContent}>{item?.name[0]}</span>
                    </div>
                    <div className={Styles.StudentBox}>
                        <span className={Styles.StudentName}>{item?.name}</span>
                        <div className={Styles.Star}>
                            <span> {buildRate(item)} </span>
                        </div>
                    </div>
                </div>
                <div className={Styles.Review}>
                   {item?.content}
                </div>
                <div>
                    <span className={Styles.Review}>Helpful</span>
                    <HandThumbsUp className={ Styles.Like } />
                    <HandThumbsDown className={ Styles.Like }/>
                </div>
                </div>
                )}
        </div>
    )
}


export default Reviews;