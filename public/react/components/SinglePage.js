import React, {useState} from 'react';
import apiURL from '../api';

export const SinglePage = ({setDisplay, display, article }) => {
  async function deletePage(e){
    e.preventDefault()
    const send = `${apiURL}/wiki/${article[0].slug}`;
    console.log(send);
		const response = await fetch(send, {method: "DELETE"});
		const data = await response.json();
  }

  console.log(article);
    
  return( <>
    <div value={display.SingleP}></div>
    <div style = {display.SingleP ? {display: "block"} : {display: "none"}} value = {display.SingleP}>    
      <div>
        Wiki for - {article[0].title} 
      </div>
      <div style = {{border: "solid"}}>
        {article[0].content}
      </div>
      <div>
      {article[0].author.name} - {article[0].author.email}
      </div>
      <button onClick={(e) => {setDisplay({...display, PList: true, SingleP: false}), e.preventDefault()}}> return to list </button>
      <button onClick={(e) => {deletePage(e),setDisplay({...display, PList: true, SingleP: false}), e.preventDefault()}}> Delete page </button>
    </div>

  </>)
} 
	