import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, setDisplay, display, article, setArticle}) => {
	return <>
		{
			pages.map((page, idx) => {
			return <Page page={page} key={idx} article = {article} setArticle = {setArticle} setDisplay = {setDisplay} display = {display}/>
			})
		}
	</>
} 
