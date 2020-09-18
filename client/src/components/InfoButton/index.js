import React from "react";
import { ButtonGroup } from "@material-ui/core";

const InfoButtonGroup = (props) => {
	return (
		<ButtonGroup size="large" color="secondary" variant="contained" className="contact" {...props}>
			{props.children}
		</ButtonGroup>
	);
};

export default InfoButtonGroup;
