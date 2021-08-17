import React from 'react';


const Scroll = (props) => {					//aktiviert Eigenschaft/ Aktion für alle Children-Elemente
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '1000px'}}>		{/*fügt Style für Objekt dazu (deshalb doppelt Klammer), für jsx muss immer camelCase --> css: overflow-y --> jsx: overflowY*/}
			{props.children}
		</div>
	);
};

export default Scroll;