import React from "react";
import { ArrowRight } from 'react-bootstrap-icons'
import { StarFill } from 'react-bootstrap-icons'
import { StarHalf } from 'react-bootstrap-icons'
import Styles from './DarkContainer.module.css'
import Card from '../Card/Card'
import SmallCard from "../Card/small_card";
import "https://kit.fontawesome.com/490c8b9b10.js";
import "bootstrap/dist/css/bootstrap.css";
function DarkContainer(props) {


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
        <div className={Styles.DarkContainer}>
            <div className={Styles.Container}>
                <div className={Styles.Development}>
                    <a>Development</a>
                    <span className={Styles.Arraw}><ArrowRight /></span>
                    <a>Programming Languages</a>
                    <span className={Styles.Arraw}><ArrowRight /></span>
                    <a>Python</a>
                </div>
                <div className={Styles.at_mide_card}>
                    <SmallCard info={props.info} />
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
                        <span className={Styles.PeopleRate}>{props?.info?.ratingCount} Rating </span>
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
    )
}
export default DarkContainer;
