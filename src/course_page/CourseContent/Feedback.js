import React from "react";
import { StarFill, StarHalf, Star} from "react-bootstrap-icons";
import Styles from './Feedback.module.css'
function Feedback(props)
{
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
    return (
        <div>
            <h2 >Student feedback</h2>
            <div className={Styles.content}>
                <div className={Styles.RatingNumber}>
                    <h1 className={Styles.Head}>{props?.info?.rate}</h1>
                    <div className={Styles.Star}>
                        {buildRate(props?.info)}
                    </div>
                    <div className={Styles.Rating}>Course Rating</div>
                </div>
                <div>
                    <div className={Styles.RangeBox}>
                        <div className={Styles.Range}>
                            <div className={Styles.RangeMark4}></div>
                        </div>
                        <div className={Styles.Star}>
                            <StarFill/>
                            <StarFill/>
                            <StarFill/>
                            <StarFill />
                            <StarFill />
                        </div>
                    </div>
                    <div className={Styles.RangeBox}>
                        <div className={Styles.Range}>
                            <div className={Styles.RangeMark3}></div>
                        </div>
                        <div className={Styles.Star}>
                            <StarFill/>
                            <StarFill/>
                            <StarFill/>
                            <StarFill />
                            <Star/>
                        </div>
                    </div>
                    <div className={Styles.RangeBox}>
                        <div className={Styles.Range}>
                            <div className={Styles.RangeMark2}></div>
                        </div>
                        <div className={Styles.Star}>
                            <StarFill/>
                            <StarFill/>
                            <StarFill />
                            <Star/>
                            <Star/>
                            
                        </div>
                    </div>
                    <div className={Styles.RangeBox}>
                        <div className={Styles.Range}>
                            <div className={Styles.RangeMark}></div>
                        </div>
                        <div className={Styles.Star}>
                            <StarFill/>
                            <StarFill />
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>
                    </div>
                    <div className={Styles.RangeBox}>
                        <div className={Styles.Range}>
                            <div className={Styles.RangeMark1}></div>
                        </div>
                        <div className={Styles.Star}>
                            <StarFill />
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Feedback;

