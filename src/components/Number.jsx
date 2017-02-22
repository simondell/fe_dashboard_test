import React from 'react';

export default class Number extends React.Component {
	constructor ( props ) {
		super( props );
		// TODO: refactor to format number
		this.state = { display: props.value };
	}

	render () {
		return <span>{ this.state.display }</span>;
	}
}
