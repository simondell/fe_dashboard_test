import React from 'react';

export default class Graph extends React.Component {
	render () {
		return <div>The graph will have { this.props.data.length } data points</div>;
	}
}
