import { React, useState } from 'react'
import Data from '../data-2.json'
import Styles from './Description.module.css'
import { Markup } from 'interweave';
import data from './jss.json'
import ShowMore from 'react-show-more-button';
function Description(props) {
    let x1=JSON.stringify(data.text);
    let x2=JSON.stringify(data.to_who);
    return (
        <div>
  
            <h2>Description</h2> 
              
         <ShowMore  >
            
          <p>
           <Markup content={x1} />
            <h2>Who this course is for:</h2>
            <p>{ props?.info?.whoFor}</p>
          </p>
           </ShowMore>
           
           

        </div>
    )
}


export default Description;
