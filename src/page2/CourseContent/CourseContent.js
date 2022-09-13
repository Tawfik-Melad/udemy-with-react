import React from 'react'
import LearnBox from './LearnBox'
import CourseList from './CourseList'
import Description from './Description'
import Instructor from './Instructor'
import Feedback from './Feedback'
import Reviews from './Reviews'
import Card from '../Card/Card'
import Styles from './CoursesContent.module.css'
import styles from './card_move.module.css'
import { Markup } from 'interweave';

function CourseContent(props) { 
    return (
       
        <div className={Styles.CourseContent}>
            
            <div className={Styles.CourseDetail}> 
          
                <LearnBox info={ props.info} />
                <CourseList info={ props.info}/>
                <Description info={ props.info}/>
                <Instructor info={ props.info}/>
                <Feedback info={props.info}/>
                <Reviews info={props.info} />
                
            </div>
           
        </div>
    )
}


export default CourseContent;
