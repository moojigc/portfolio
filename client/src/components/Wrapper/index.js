import React from "react";

const Wrapper = ({ children, ...props }) => {
	return (
		<main {...props} className="wrapper container">
			{children}
		</main>
	);
};

export default Wrapper;
