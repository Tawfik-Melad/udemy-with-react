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
          
                <LearnBox learnBox_data={ props.course_data} />
                <CourseList CourseList_data={ props.course_data}/>
                <Description Description_data={ props.course_data}/>
                <Instructor Instructor_data={ props.course_data}/>
                <Feedback Feedback_data={props.course_data}/>
                <Reviews Reviews_data={props.course_data} />
                
            </div>
           
        </div>
    )
}


export default CourseContent;
