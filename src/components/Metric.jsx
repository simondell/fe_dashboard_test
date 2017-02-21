import React from 'react';

export default class Metric extends React.Component {
	render () {
		return (
			<div>{ this.props.title.replace('-', ' ') }: { this.props.value }</div>
		);
	}
}
