import React from "react";
import { ButtonGroup, ButtonGroupProps } from "@material-ui/core";

const InfoButtonGroup = (props: ButtonGroupProps) => {
	return (
		<ButtonGroup size="large" color="secondary" variant="contained" className="contact" {...props}>
			{props.children}
		</ButtonGroup>
	);
};

export default InfoButtonGroup;
