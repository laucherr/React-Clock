//FUNCTION COMPONENT 
//function Greeter (props) {
// 	return {
// 		<div>
// 			<h1>{props.greeting} {props.name}, this is React </h1>
// 		</div>
// 	);
// }

// export default Greeter;

//CLASS COMPONENT
import React from "react";

class Greeter extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.greeting} {this.props.name}, this is React</h1>
			</div>
		);
	}
}

export default Greeter;

