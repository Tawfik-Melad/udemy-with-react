import React from "react";
import Styles from './DarkFooter.module.css'
function DarkFooter() {
    return (
        <div>
            <div className={Styles.DarkBox}>
                <img alt='' src='https://project-2-wheat.vercel.app/static/media/logo-udemy-inverted.bc61c6989dd94540b76689ec30e1b7f5.svg' width={91} height ={34}></img>
            </div>
        </div>
    )
}
export default DarkFooter
