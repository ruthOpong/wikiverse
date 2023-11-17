import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { NewApp } from './NewApp';
import { SinglePage } from './SinglePage';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [article, setArticle] = useState([{author:{name:"", email: ""},
		title: "",
		content: "",
		name: "",
		email: "",
		tags: ""}]);
	const [display, setDisplay] = useState({PList: true,
	NewA: false,
	DeleteP: false,
	SingleP: false});

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<NewApp setPages = {setPages} setDisplay = {setDisplay} display = {display} id = 'newArt'/>	
			<PagesList pages={pages} setDisplay = {setDisplay} display = {display} article = {article} setArticle = {setArticle}/>
			<SinglePage setDisplay = {setDisplay} display = {display} article = {article} />
		</main>
	)
}