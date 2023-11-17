import React, {useState} from 'react';
import apiURL from '../api';

export const Page = (props) => {

  function slugify (string){
    string = string.toLowerCase();
    string = string.trim();
    string = string.replace(/\s/g, '_');
    console.log(string);
    return string;
  }

  async function openPage(e){
    e.preventDefault()
    let slug = slugify(props.page.title);
    const response = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await response.json();
    props.setArticle([data]);
    console.log(props.article);
    props.setDisplay({...props.display, PList: false, SingleP: true});
    console.log(props.display)
  }
  ;
  return (<>
    <h3 style = {props.display.PList ? {display: "block"} : {display: "none"}} ><button onClick={(e) => openPage(e)}>{props.page.title}</button></h3>
  </>)
} 
	