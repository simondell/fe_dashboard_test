import React from 'react';
import ProgressBar from './ProgressBar';

export default class SalesSummary extends React.Component {
	render () {
		return (
			<section>
				<h1>Sales vs Target for Week 3</h1>
				<p>The line graph here</p>
				<ProgressBar
					now={ this.props.data.sales.current }
					now-label="Sales"
					max={ this.props.data.sales.target }
					max-label="Target" />
			</section>
		);
	}
}
