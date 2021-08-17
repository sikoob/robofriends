import React from 'react';
import Card from './Card.js';		//CardList ist Parent für Card

const CardList = ({robots}) => {
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card 
					key={i} 							//benötigt Key= i mit Klammern, damit jede Karte eine unique ID bekommt. So können Verändeurngen passieren
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
					/>	
				);	
			})
		}				{/*{} da hier JavaScript Komponente*/}
    	</div>
	);
}

export default CardList;