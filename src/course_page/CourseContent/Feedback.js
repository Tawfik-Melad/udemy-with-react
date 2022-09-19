import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";
import Styles from './Feedback.module.css'
function Feedback(props) {


    function orignalbuildRate() {
        var rate = [];
        for (let i = 1; i <= 5; i++) {
            if (Number(props?.Feedback_data.rate) >= i) rate.push(<span className="fa fa-star checked"></span>);
            else if (Math.floor((Number(props?.Feedback_data.rate))) + 1 >= i)
                rate.push(<span className="fa fa-star-half-stroke"></span>);
            else rate.push(<span className="fa-regular fa-star"></span>);
        }
        console.log(rate);
        return rate;
    }

    function buildFiveStar(number) {
        var rate2 = [];
        let i = 1;
        for (; i <= 5; i++) {
            if (number >= i * 10)
                rate2.push(<span className="fa fa-star checked"></span>);
            else {
                rate2.push(<span className="fa fa-star-half-stroke"></span>);
                i++;
                break;
            }
        }
        for (; i <= 5; i++) {
            rate2.push(<span className="fa-regular fa-star"></span>);
        }
        return rate2;
    }
    function buildRate(number) {
        var rateline = [];
        rateline.push(<div className={Styles.RangeMark}></div>);
        rateline.push(<div className={Styles.RangeMark1}></div>);
        rateline.push(<div className={Styles.RangeMark2}></div>);
        rateline.push(<div className={Styles.RangeMark3}></div>);
        rateline.push(<div className={Styles.RangeMark4}></div>);
        var line;
        for (let j = 1; j <= 5; j++) {
            if (number >= j * 10)
                line = rateline[j - 1];
        }
        return (<div className={Styles.RangeBox}>
            <div className={Styles.Range}>
                {line}
            </div>
            <div className={Styles.Star}>
                {buildFiveStar(number)}
            </div>
        </div>)

    }

    return (
        <div>
            <h2 >Student feedback</h2>
            <div className={Styles.content}>
                <div className={Styles.RatingNumber}>
                    <h1 className={Styles.Head}>{props?.Feedback_data?.rate}</h1>
                    <div className={Styles.Star}>
                        {orignalbuildRate(props?.Feedback_data)}
                    </div>
                    <div className={Styles.Rating}>Course Rating</div>
                </div>
                <div>

                    {
                        props?.Feedback_data.studentFeedback.map((number) =>

                            buildRate(number)
                        )
                    }

                </div>
            </div>

        </div>
    )
}


export default Feedback;

