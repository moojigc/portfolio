import React from "react";
import mongodb from "./logos/mongodb.png";
import bigThree from "./logos/big-three.png";
import mysql from "./logos/mysql.png";
import reactLogo from "./logos/react.svg";
import ts from "./logos/ts.png";
import node from "./logos/node.png";

import ContactButtons from "../../pages/About/ContactButtons";
import { noBreak, useIsMobile } from "../../utils/index";
import { useParams } from "react-router-dom";
import TextContent from '../../pages/About/TextContent';


const Hero = () => {
	const isMobile = useIsMobile();
	const { lang } = useParams() as { lang: 'ja' | 'en' };
	const { title, subTitle } = TextContent(lang);

	return (
		<div className="hero">
			<div className="name">
				{isMobile ? (
					<React.Fragment>
						<h1 style={{ fontSize: "10vw" }}>
							{typeof title === 'string' ? noBreak(title) : title}
						</h1>
						<h2>{typeof subTitle === 'string' ? noBreak(subTitle) : subTitle}</h2>
					</React.Fragment>
				) : (
					<h1>
						{typeof title === 'string' ? noBreak(title) : title} |{' '}
						{typeof subTitle === 'string' ? noBreak(subTitle) : subTitle}
					</h1>
				)}
			</div>

			<section>
				<img src={bigThree} alt="HTML, CSS, JavaScript" />
				<img src={ts} alt="TypeScript" />
				<img src={reactLogo} alt="React.js" />
				<img src={mongodb} alt="MongoDB" />
				<img src={mysql} alt="MySQL" />
				<img src={node} alt="Node.js" />
			</section>

			<div className="buttons">
				<ContactButtons lang={lang} />
			</div>
		</div>
	);
};

export default Hero;
