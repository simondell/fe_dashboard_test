import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(`
############################
# Dashboard technical test #
# by Simon Dell            #
############################
`);

ReactDOM.render(
	<App/>,
	document.querySelector('body') // React complains about this, but its main objection doesn't apply when we control all the nodes
);
