import React from 'react';
import Number from '../number/number';

export default class Metric extends React.Component {
	render () {
		return (
			<div>{ this.props.title.replace('-', ' ') }: <Number value={ this.props.value } si="true" /></div>
		);
	}
}
