import React, { Component } from 'react';
import CardList from '../components/CardList.js';		//'..' bedeutet gehe in überliegenden Ordner und dann
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends Component {
	constructor () {
		super()					//Benötigt, um "this. ..." zu ermölgichen
		this.state = {			//State gibt als Parent den Kinderelementen Informationen, welche Daten benötigt werden. Was wird im Suchfeld eingegeben --> Was darf an Robots gezeigt werden.
			robots: [],			//"users" sind leer, da über API gezogen wird
			searchfield: ''
		}
	}

	componentDidMount() {		//Funktion innerhalb React, daher keine Arrows
		fetch('https://jsonplaceholder.typicode.com/users')			//gibt Ziellink für API-Ressourcen an
			.then(response => response.json())						//aktiviert Datei-Antwort von Source
			.then(users => this.setState({ robots: users}));		//Setzt User über bereitgestellte Infos und fügt Inhalte für Robots ein --> Update Cycle in Lifecycle, deshalb danach nochmal Render
	}

	onSearchChange = (event) => {		//Zwischenfunktion, um Sucheingabe abzufangen
		this.setState({ searchfield: event.target.value })					//zum Ändern von State
	}

	render () {
		const { robots, searchfield } =this.state;					//robots und searchfield haben dann immer 'this.state' vorne dran
		const filteredRobots = robots.filter(robot => {				//Übergabe, welche Roboter gezeigt werden sollen nach Sucheingabe. alles kleingeschrieben zur Suchverienfachung
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		/*		console.log(filteredRobots);*/
		return !robots.length ?										//if-Bedingung, wenn keine Robots vorhanden bzw. am Laden, dann..
		<h1>Loading</h1> :											// ... wird Ladebildschirm gezeigt, sonst					
		(
			<div className='tc'>									{/*gib die Roboter wieder*/}
				<h1 className='f1'> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />			{/*gibt die benötigten Roboter nach Suchfeld-Eingabe wieder.*/}
				</Scroll>
			</div>
		);
	}
}

export default App;