import { React, ReactDOM } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Accordion, Card } from 'react-bootstrap'
import Styles from './CourseList.module.css'
function CourseList(props) {
    const makeOne = (item, index) => (

        <Accordion.Item eventKey={index}>
            <Accordion.Header>{item[0]} {<p className={Styles.left}>{item[1].length} lectures. { item[1].length*10/5}min</p>} </Accordion.Header>
            <Accordion.Body >
                <ul>
                    {item[1].map((element) => <li><i class="fa-solid fa-circle-play"></i>{element}</li>)}
                </ul>
            </Accordion.Body>
        </Accordion.Item>

    )
    return (
        <div>
            <h3>Course Content</h3>
            <div>{props?.info?.sectionsCount} sections
                • {props?.info?.lecturesCount} lectures • {props?.info?.totalLength} total length</div>
            <div>

                <Accordion  >
                    {props?.info?.content.map(makeOne)}
                </Accordion>
            </div>
        </div>
    )
}


export default CourseList;
