import React from "react";
import Styles from './Card.module.css'
import { Alarm } from 'react-bootstrap-icons'
import "https://kit.fontawesome.com/490c8b9b10.js";

import { CaretRightSquareFill } from 'react-bootstrap-icons'
function Card(props) {
    return (
        <div className={Styles.Container}>

            <div >
                <img alt='' src={props?.card_data?.image} width={400}></img>
                {console.log(props?.card_data?.image)}
            </div>
            <div className={Styles.scorl_card}>
            <div className={Styles.UpBox}>
                <div>
                    <span className={Styles.Price}>E£{props?.card_data?.price} </span>
                    <span className={Styles.Discount}>E£{ props?.card_data?.originalPrice}</span>
                    <span> {(((props?.card_data?.originalPrice-props?.card_data?.price)/props?.card_data?.originalPrice)*100).toFixed(0)}%  off</span> 
                </div>
                <div className={Styles.Alarm}>
                    <Alarm/>
                    1 day left at this price!
                </div>
                <div>
                    <button className={Styles.AddBtn}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <button className={Styles.Btn}>
                        Buy now
                    </button>
                </div>
                <div className={Styles.MoneyBack}>
                    30-Day Money-Back Guarantee
                </div>
                <div>
                    <h2 className={Styles.HeadLine}>This course includes:</h2>
                    <ul className={Styles.List}>
                        <li><spam><i className="fa-sharp fa-solid fa-circle-play"></i></spam>  14 hours on-demand video</li>
                        <li><spam><i class="fa-solid fa-file"></i></spam>  1 article</li>
                        <li><spam><i class="fa-solid fa-download"></i></spam> 3 downloadable resources</li>
                        <li><spam><i class="fa-solid fa-infinity"></i></spam> Full lifetime access</li>
                        <li><spam><i class="fa-solid fa-mobile"></i></spam>  Access on mobile and TV</li>
                        <li> <spam><i class="fa-solid fa-trophy"></i></spam> Certificate of completion</li>
                    </ul>
                    <div>
                        <a href="#" className={Styles.Links}>Share</a>
                        <a href="#" className={Styles.Links}>Gift this course</a>
                        <a href="#" className={Styles.Links}>Apply Coupon </a>
                    </div>
                </div>
            </div>
            <div className={Styles.DownBox}>
                <h2 className={Styles.HeadLine}>Training 5 or more people?</h2>
                <div className={Styles.Par}>
                    Get your team access to 17,000+
                    top Udemy courses anytime, anywhere.
                </div>
                <button className={Styles.Btn}>Try Udemy Business</button>
            </div>
            </div>
        </div>
    )
}

export default Card
