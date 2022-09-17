import React from 'react'
import Styles from './LearnBox.module.css'
import "https://kit.fontawesome.com/490c8b9b10.js";
function LearnBox(props) {
    return (
        <div className={Styles.Box}>
            <h3>What you'll learn</h3>
            <div className='Styles.content_flex'>
                <ul className={Styles.ul}>
                    {
                        props?.info?.overview.map((item) => <li><spam className={Styles.shefted} ><i class="fa-sharp fa-solid fa-check"></i></spam>{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}


export default LearnBox;