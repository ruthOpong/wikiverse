import React, {useState} from 'react';
import apiURL from '../api';

export const Page = (props) => {
  const [article, setArticle] = useState({});

  function slugify (string){
    string = string.toLowerCase();
    string = string.trim();
    string = string.replace(/\s/g, '_');
    console.log(string);
    return string;
  }

  async function openPage(){
    let slug = slugify(props.page.title);
    const response = await fetch(`${apiURL}/wiki/${slug}`);
    const data = await response.json();
    setArticle([data]);
    console.log(article);
  }

  return <>
    <h3><button onClick={openPage}>{props.page.title}</button></h3>
  </>
} 
	