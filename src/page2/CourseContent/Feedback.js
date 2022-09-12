import React from "react";
import { StarFill, StarHalf, Star} from "react-bootstrap-icons";
import Styles from './Feedback.module.css'
function Feedback()
{
    return (
        <div>
            <h2 >Student feedback</h2>
            <div className={Styles.content}>
                <div className={Styles.RatingNumber}>
                    <h1 className={Styles.Head}>4.5</h1>
                    <div className={Styles.Star}>
                        <StarFill/>
                        <StarFill/>
                        <StarFill/>
                        <StarFill />
                        <StarHalf />
                    </div>
                    <div className={Styles.Rating}>Course Rating</div>
                </div>
                <div>
                    <div className={Styles.RangeBox}>
                        <div className={Styles.Range}>
                            <div className={Styles.RangeMark}></div>
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
                            <div className={Styles.RangeMark}></div>
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
                            <div className={Styles.RangeMark}></div>
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
                            <div className={Styles.RangeMark}></div>
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

