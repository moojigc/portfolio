import React from "react";

const Header = ({ children, overlaid }: {
	children: any,
	overlaid?: number
}) => {
	return (
		<div style={{ zIndex: overlaid || 1 }} className="heading">
			<h1>{children}</h1>
		</div>
	);
};

export default Header;
