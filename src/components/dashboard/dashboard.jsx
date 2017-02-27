import Graph from '../graph/graph';
import ProgressBar from '../progress_bar/progress_bar';
import React from 'react';
import Stats from '../stats/stats';
import styles from './dashboard.css';

export default class Dashboard extends React.Component {
	render () {
		return (
			<main className={ styles.dashboard }>
				<h1>Sales vs Target for Week 3</h1>
				<Graph data={ this.props.data.graph } />
				<ProgressBar
					now={ this.props.data.sales.current }
					now-label="Sales"
					max={ this.props.data.sales.target }
					max-label="Target" />
				<Stats metrics={ this.props.data.metrics } />
			</main>
		);
	}
}
