import React from "react";
import Styles from './Card.module.css'
import { Alarm } from 'react-bootstrap-icons'
import { CaretRightSquareFill } from 'react-bootstrap-icons'
function Card(props) {
    return (
        <div className={Styles.Container}>
            <div>
                <img alt='' src={props?.info?.image} width={400}></img>
                {console.log(props?.info?.image)}
            </div>
            <div className={Styles.UpBox}>
                <div>
                    <span className={Styles.Price}>E£{props?.info?.price} </span>
                    <span className={Styles.Discount}>E£{ props?.info?.originalPrice}</span>
                    <span> {(((props?.info?.originalPrice-props?.info?.price)/props?.info?.originalPrice)*100).toFixed(0)}%</span> 
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
                        <li>14 hours on-demand video</li>
                        <li>1 article</li>
                        <li>3 downloadable resources</li>
                        <li>Full lifetime access</li>
                        <li>Access on mobile and TV</li>
                        <li>Certificate of completion</li>
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
    )
}

export default Card
