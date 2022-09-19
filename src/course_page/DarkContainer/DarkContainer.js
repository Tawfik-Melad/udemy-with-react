import React from "react";
import { ArrowRight } from 'react-bootstrap-icons'
import { StarFill } from 'react-bootstrap-icons'
import { StarHalf } from 'react-bootstrap-icons'
import Styles from './DarkContainer.module.css'
import Card from '../Card/Card'
import SmallCard from "../Card/mobile_card";
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
                    <SmallCard smallCard_data={props.dardContainer_data} />
                </div>
                <div className={Styles.DarkBox}>
                    <h2>
                        {props?.dardContainer_data?.title}
                    </h2>
                    <div className={Styles.paragraph}>
                        {props?.dardContainer_data?.Introduction}
                    </div>
                    <div >
                        <span className={Styles.Rate}>{props?.dardContainer_data?.rate}</span>
                        <span className={Styles.Star}>
                            {buildRate(props?.dardContainer_data?.rate)}
                        </span>
                        <span className={Styles.PeopleRate}>{props?.dardContainer_data?.ratingCount} Rating </span>
                        {props?.dardContainer_data?.enrollCount} students
                    </div>
                    <div>
                        Created by
                        {
                            props?.dardContainer_data?.instructor.map((item) => <span className={Styles.PeopleRate}>{item.name}</span>)
                        }

                    </div>
                    <div className={Styles.shefted}>
                        <spam ><i class="fa-solid fa-exclamation"></i> Last updated  {props?.dardContainer_data?.lastUpdate}</spam>
                        <spam ><i class="fa-sharp fa-solid fa-globe"></i> {props?.dardContainer_data?.globe}</spam>
                        <spam ><i class="fa-solid fa-closed-captioning"></i> {props?.dardContainer_data?.Captioning}</spam>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DarkContainer;
