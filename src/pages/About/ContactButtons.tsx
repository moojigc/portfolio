import React from "react";
import { Link as A, useHistory } from "react-router-dom";
import { useMediaQuery, Button, Link } from "@material-ui/core";
import { Email as EmailIcon, PictureAsPdf, Code } from "@material-ui/icons";
import InfoButtonGroup from "../../components/InfoButton";
import TextContent from "./TextContent";

const ContactButtons = ({ lang }) => {
	const isMobile = useMediaQuery("(max-width: 900px)");
	const history = useHistory();
	const handleClick = (event) => {
		event.preventDefault();
		history.push(`/${lang}/resume`);
	};
	const { email, resume } = TextContent(lang);

	return (
		<div className="btn-grid">
			<Button variant="contained" color="secondary" href="https://github.com/moojigc">
				<img
					className="btn-image"
					src="/images/GitHub_Logo_White.png"
					alt="github"
				/>
			</Button>
			<Button variant="contained" color="primary" href="https://linkedin.com/in/moojigbc">
				<img
					className="btn-image"
					src="/images/LI-Logo.svg"
					alt="linkedin"
				/>
			</Button>
			<Button variant="contained" color="primary" href="mailto:me@moojig.dev">
				{email} <EmailIcon />
			</Button>
			<Button variant="contained" color="primary" href="/moojig_resume2020.pdf">
				{resume} <PictureAsPdf />{" "}
			</Button>
			<Button variant="contained" color="secondary" href={`/${lang}/resume`} onClick={handleClick}>
				{resume} <Code />{" "}
			</Button>
		</div>
	)
	// : (
	// 	<InfoButtonGroup>
	// 		<Button color="secondary" href="https://github.com/moojigc">
	// 			<img
	// 				className="btn-image"
	// 				src="/images/GitHub_Logo_White.png"
	// 				alt="github"
	// 			/>
	// 		</Button>
	// 		<Button color="secondary" href="https://linkedin.com/in/moojigbc">
	// 			<img
	// 				className="btn-image"
	// 				src="/images/LI-Logo.svg"
	// 				alt="linkedin"
	// 			/>
	// 		</Button>
	// 		<Button color="secondary" href="mailto:me@moojig.dev">
	// 			{email} <EmailIcon />
	// 		</Button>
	// 		<Button color="secondary" href="/moojig_resume2020.pdf">
	// 			{resume} <PictureAsPdf />{" "}
	// 		</Button>
	// 		<Button color="secondary" onClick={handleClick}>
	// 			{resume} <Code />{" "}
	// 		</Button>
	// 	</InfoButtonGroup>
	// );
};

export default ContactButtons;
