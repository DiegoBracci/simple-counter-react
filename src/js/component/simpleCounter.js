import React from "react";
import PropTypes from "prop-types";

// //create your first component
export function SimpleCounter(props) {
	let { digitFour, digitThree, digitTwo, digitOne } = props;
	return (
		<div className="bigCounter">
			<div className="icon">
				<i className="far fa-clock" />
			</div>
			<div className="four">{digitFour % 10}</div>
			<div className="three">{digitThree % 10}</div>
			<div className="two">{digitTwo % 10}</div>
			<div className="one">{digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
