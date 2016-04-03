import React from 'react';
import ReactDom from 'react-dom';

class PatientInfo extends React.Component{

	componentWillMount(){
		//API call here
	}
	render(){
		var hello = "hello"
		return (
			<div>
				<p className="info">Patient Name: <span className="span">Praveen</span></p>
				<p className='info'>Patient MRN: <span className="span">Abc</span></p>
				<p className='info'>Exam Type: <span className="span">CTScan</span></p>
			</div>
		)
	}
}

export default PatientInfo;