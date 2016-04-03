import React from 'react';
import ReactDom from 'react-dom' ;
import PatientInfo from './patientInfo';
import Chart from './chart';


class App extends React.Component{
	render() {
		return (
			<div>
				<p className="header">Sunburst</p>
				<PatientInfo/>
				<Chart/>
			</div>
		);
	}
}

ReactDom.render(<App/>, document.getElementById('app'))