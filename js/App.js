import React from 'react';
import ReactDom from 'react-dom' ;

class App extends React.Component{
	render() {
		return (
			<div>
				<p className="header">Sunburst</p>
				<p className="info">Patient Name: <span className="span">{this.props.name}</span></p>
				<p className='info'>Patient MRN: <span className="span">{this.props.mrn}</span></p>
				<p className='info'>Exam Type: <span className="span">{this.props.exam}</span></p>
			</div>
		);
	}

}

ReactDom.render(<App name="Praveen" mrn = "abc" exam = "CTScan"/>, document.getElementById('app'))