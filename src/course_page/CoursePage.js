import React from "react";
import DarkContainer from './DarkContainer/DarkContainer'
// import Card from './Card/Card'
import CourseContent from './CourseContent/CourseContent'
import './course_page.css'
import Card from './Card/Card'
import DarkFooter from "../home_page/DarkFooter";
function CourcesPage(props) {
    return (
          
        <div className="all-content">
            <div> <Card card_data={ props.course_data} /></div>
            <div> <DarkContainer dardContainer_data={ props.course_data} /></div>
            <div><CourseContent course_data={ props.course_data}/></div>  
           
        
        </div>
    )
}

export default CourcesPage;

