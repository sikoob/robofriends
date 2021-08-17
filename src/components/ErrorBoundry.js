import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor (props) {
		super(props);
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {								//Falls Fehler ...
			return <h1>Oooops. That is not good...</h1>			//..gib Fehlermeldung, sonst ....
		}
		return this.props.children								//...gib Inhalte der Children-Elemente wieder
	}
}

export default ErrorBoundry;