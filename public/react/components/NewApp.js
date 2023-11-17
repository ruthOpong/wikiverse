import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { title } from 'process';

export const NewApp = ({setPages, setDisplay, display}) => {

	const [isNewPage, setIsNewPage] = useState(false);

	const [newForm, setNewForm] = useState({title: "", content: "", name: "", email: "", tags:""});
	

	async function submitPage (e){
		e.preventDefault()
		console.log(newForm);
		const response = await fetch(`${apiURL}/wiki`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(
			{title: newForm.title,
			content: newForm.content,
			name: newForm.name,
			email: newForm.email,
			tags: newForm.tags}
		)
		});
		const data = await response.json();
		setNewForm({title: "", content: "", name: "", email: "", tags:""});
		setIsNewPage(!isNewPage);
	}

	return (
		<>	
			<button onClick = {() => {setIsNewPage(!isNewPage), setDisplay({...display, PList: false, SingleP: false})}}>New Article</button>
			<form id = 'addPage' style = {isNewPage ? {display: "block"} : {display: "none"}}>
				<div>
					<input type="text" id = 'title' placeholder="title" aria-label="title" onChange = {(e) => setNewForm({...newForm ,title: e.target.value})} value ={newForm.title}/>
					<input type="text" id = 'content' placeholder="content" aria-label="content" onChange = {(e) => setNewForm({...newForm ,content: e.target.value})} value ={newForm.content}/>
					<input type="text" id = 'name' placeholder="name" aria-label="name" onChange = {(e) => setNewForm({...newForm ,name: e.target.value})} value ={newForm.name}/>
					<input type="text" id = 'email' placeholder="email" aria-label="email" onChange = {(e) => setNewForm({...newForm ,email: e.target.value})} value ={newForm.email}/>
					<input type="text" id = 'tags' placeholder="tags" aria-label="tags" onChange = {(e) => setNewForm({...newForm ,tags: e.target.value})} value ={newForm.tags}/>
				</div>
				<button onClick = {(e) => submitPage(e)}>submit</button>
				<button onClick={(e) => {setDisplay({...display, PList: true, SingleP: false}), e.preventDefault(), setIsNewPage(!isNewPage)}}> return to list </button>
			</form>
		</>
	)
}