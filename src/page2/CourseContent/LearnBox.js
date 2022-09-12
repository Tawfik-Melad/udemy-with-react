import React from 'react'
import Styles from './LearnBox.module.css'
function LearnBox(props) {
    return (
        <div className={Styles.Box}>
            <h3>What you'll learn</h3>
          <div className='Styles.content_flex'> 
                {
                    props?.info?.overview.map((item)=> <div><li>{item}</li></div>)
                }
            </div>
        </div>
    )
}


export default LearnBox;