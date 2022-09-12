import React from 'react';
import Styles from './Card.module.css'
import { Alarm, StarFill, StarHalf } from 'react-bootstrap-icons'

const SmallCard = (props) => {
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
                            <StarFill />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                            <StarHalf />
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
                </div>

            </div>
        </div>
    );
}

export default SmallCard;
