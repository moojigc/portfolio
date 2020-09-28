import React from "react";

const Wrapper = (props: React.HTMLProps<any>) => {
	const { className, children } = props;
	return (
		<main {...props} className={`wrapper container ${className ? className : ''}`}>
			{children}
		</main>
	);
};

export default Wrapper;
