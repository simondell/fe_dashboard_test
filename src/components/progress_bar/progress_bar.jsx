import Number from '../number/number';
import React from 'react';
import styles from './progress_bar.css';

export default class ProgressBar extends React.Component {
	constructor ( props ) {
		super( props );

		let { now, max } = props;
		let split = Math.floor( now / max * 100 );
		this.state = { split };
	}

	getMaxWidth () {
		let width = `${ 100 - this.state.split }%`;
		return { width };
	}

	getNowWidth () {
		let width = `${ this.state.split }%`;
		return { width };
	}

	render () {
		return (
			<div className={ styles.progressbar }
				role="progressbar"
				aria-valuenow={ this.props['now-label'] }
				aria-valuemin="0"
				aria-valuemax={ this.props['max'] }
				aria-valuetext={ this.props['max-label'] }
			>
				<div className={ styles.now } style={ this.getNowWidth() }>
					<span className={ styles['now-label'] }>{ this.props['now-label'] }</span>
					<span className={ styles['now-value'] }><Number value={ this.props['now'] } /></span>
				</div>
				<div className={ styles.max } style={ this.getMaxWidth() }>
					<span className={ styles['max-label'] }>{ this.props['max-label'] }</span>
					<span className={ styles['max-value'] }><Number value={ this.props['now'] } /></span>
				</div>
			</div>
		);
	}
}
