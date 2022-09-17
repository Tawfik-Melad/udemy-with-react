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
                    <img alt='' src={props?.info?.image} className={Styles.photo}></img>

                </div>
                <div className={Styles.DarkBox}>
                    <h2>
                        {props?.info?.title}
                    </h2>
                    <div className={Styles.paragraph}>
                        {props?.info?.Introduction}
                    </div>
                    <div >
                        <span className={Styles.Rate}>{props?.info?.rate}</span>
                        <span className={Styles.Star}>
                            {buildRate(props?.info?.rate)}
                        </span>
                        <span className={Styles.PeopleRate}>({props?.info?.ratingCount}) Ratings</span>
                        {props?.info?.enrollCount} students
                    </div>
                    <div>
                        Created by
                        {
                            props?.info?.instructor.map((item) => <span className={Styles.PeopleRate}>{item.name}</span>)
                        }
                    </div>
                    <div className={Styles.shefted}>
                        <spam ><i class="fa-solid fa-exclamation"></i> Last updated  {props?.info?.lastUpdate}</spam>
                        <spam ><i class="fa-sharp fa-solid fa-globe"></i> {props?.info?.globe}</spam>
                        <spam ><i class="fa-solid fa-closed-captioning"></i> {props?.info?.Captioning}</spam>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SmallCard;
