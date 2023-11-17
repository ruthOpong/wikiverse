import React, {useState} from 'react';
import apiURL from '../api';

export const SinglePage = ({setDisplay, display, article }) => {
    return( <>
    <div value={display.SingleP}></div>
    <div style = {display.SingleP ? {display: "block"} : {display: "none"}} value = {display.SingleP}>    
      <div>
        Wiki for - {article[0].title}
      </div>
      <button onClick={(e) => {setDisplay({...display, PList: true, SingleP: false}), e.preventDefault()}}> return to list </button>
    </div>

  </>)
} 
	