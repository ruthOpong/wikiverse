import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [isNewPage, setIsNewPage] = useState(false);

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

	const [newForm, setNewForm] = useState({title: "", content: "", name: "", email: "", tags:""});

	function submitPage (){
		console.log(newForm);
	}
	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<button onClick = {() => setIsNewPage(!isNewPage)}>New Article</button>
			<form id = 'addPage' style = {isNewPage ? {display: "block"} : {display: "none"}}>
				<div>
					<input type="text" placeholder="title" aria-label="title" onChange = {(e) => setNewForm(e.target.value)} value ={newForm.title}/>
					<input type="text" placeholder="content" aria-label="content" onChange = {(e) => setNewForm(e.target.value)} value ={newForm.content}/>
					<input type="text" placeholder="name" aria-label="name" onChange = {(e) => setNewForm(e.target.value)} value ={newForm.name}/>
					<input type="text" placeholder="email" aria-label="email" onChange = {(e) => setNewForm(e.target.value)} value ={newForm.email}/>
					<input type="text" placeholder="tags" aria-label="tags" onChange = {(e) => setNewForm(e.target.value)} value ={newForm.tags}/>
				</div>
				<button onClick = {submitPage}>submit</button>
			</form>
			
			<PagesList pages={pages} />
		</main>
	)
}