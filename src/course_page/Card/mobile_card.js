import React from 'react';
import Styles from './Card.module.css'
import "https://kit.fontawesome.com/490c8b9b10.js";
import "bootstrap/dist/css/bootstrap.css";
import { Alarm, StarFill, StarHalf } from 'react-bootstrap-icons'

const SmallCard = (props) => {
    function buildRate(element) {
        var rate = [];
        for (let i = 1; i <= 5; i++) {
            if (Number(element) >= i) rate.push(<span className="fa fa-star checked"></span>);
            else if (Math.floor((Number(element))) + 1 >= i)
                rate.push(<span className="fa fa-star-half-stroke"></span>);
            else rate.push(<span className="fa-regular fa-star"></span>);
        }
        return rate;
    }

    return (
        <div>
            <div className={Styles.continer} >
                <div >
                    <img alt='' src={props?.smalCard_data?.image} className={Styles.photo}></img>

                </div>
                <div className={Styles.DarkBox}>
                    <h2>
                        {props?.smalCard_data?.title}
                    </h2>
                    <div className={Styles.paragraph}>
                        {props?.smalCard_data?.Introduction}
                    </div>
                    <div >
                        <span className={Styles.Rate}>{props?.smalCard_data?.rate}</span>
                        <span className={Styles.Star}>
                            {buildRate(props?.smalCard_data?.rate)}
                        </span>
                        <span className={Styles.PeopleRate}>({props?.smalCard_data?.ratingCount}) Ratings</span>
                        {props?.smalCard_data?.enrollCount} students
                    </div>
                    <div>
                        Created by
                        {
                            props?.smalCard_data?.instructor.map((item) => <span className={Styles.PeopleRate}>{item.name}</span>)
                        }
                    </div>
                    <div className={Styles.shefted}>
                        <spam ><i class="fa-solid fa-exclamation"></i> Last updated  {props?.smalCard_data?.lastUpdate}</spam>
                        <spam ><i class="fa-sharp fa-solid fa-globe"></i> {props?.smalCard_data?.globe}</spam>
                        <spam ><i class="fa-solid fa-closed-captioning"></i> {props?.smalCard_data?.Captioning}</spam>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SmallCard;
