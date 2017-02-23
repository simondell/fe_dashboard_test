import React from 'react';

export default class FormattedNumber extends React.Component {
	constructor ( props ) {
		super( props );
		// TODO: refactor to format number
		this.state = { display: this.truncate( props.value ) };
	}

	render () {
		return <span>{ this.state.display }</span>;
	}

	thousends ( value ) {
		return `${( value / 1000 ).toPrecision( 3 )}k`;
	}

	truncate ( value ) {
		if( value > 10000 ) return this.thousends( value );
		if( value > 1000 ) return this.withComma( value );
		else return value;
	}

	withComma ( value ) {
		let text = value.toString();
		let len = text.length;
		return `${text.charAt(0)},${text.slice(1)}`;
	}
}
