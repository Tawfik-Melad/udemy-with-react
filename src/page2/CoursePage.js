import React from "react";
import DarkContainer from './DarkContainer/DarkContainer'
// import Card from './Card/Card'
import CourseContent from './CourseContent/CourseContent'
import './course_page.css'
import Card from './Card/Card'
function CourcesPage(props) {
    return (
          
        <div className="all_content">
            <div> <Card info={ props.info} /></div>
            <div> <DarkContainer info={ props.info} /></div>
            <div><CourseContent info={ props.info}/></div>  
           
        
        </div>
    )
}

export default CourcesPage;

