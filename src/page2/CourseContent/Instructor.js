import React from 'react'
import { StarFill } from 'react-bootstrap-icons'
import { BookmarkStar } from 'react-bootstrap-icons'
import { PeopleFill } from 'react-bootstrap-icons'
import { CaretRightSquareFill } from 'react-bootstrap-icons'
import Styles from './Instructor.module.css'
import Data from '../data-2.json'
import ShowMore from 'react-show-more-button';
function makeOne(item) {

}

function Instructor(props) {
    return (
        <div>
            <h3>Instructor</h3>
            {props?.info?.instructor.map((item) =>
                <div>
                    <div>
                        <a href='#' className={Styles.Name}>{item.name}</a>
                        <p className={Styles.UpperPhoto}>{item.Intro}</p>
                    </div>
                    <div className={Styles.InstructorDetail}>
                        <img className={Styles.Photo} alt='' src={item.Image}></img>
                        <div className={Styles.SymolBox}>
                            <div>
                                <StarFill className={Styles.Symbol} />
                                <span> {item.Rating} </span>
                                <span>Instructor Rating</span>
                            </div>
                            <div>
                                <BookmarkStar className={Styles.Symbol} />
                                <span> {item.reviewsNumber} </span>
                                <span> Reviews</span>
                            </div>
                            <div>
                                <PeopleFill className={Styles.Symbol} />
                                <span> {item.studentsNumber} </span>
                                <span>Students</span>
                            </div>
                            <div>
                                <CaretRightSquareFill className={Styles.Symbol} />
                                <span> {item.coursesNumber} </span>
                                <span>Courses</span>
                            </div>
                        </div>
                    </div>
                    <div>
                       
                        <ShowMore maxHeight={100}>
            
                      
                            {item.description}
                            
                        
                        </ShowMore>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Instructor;

