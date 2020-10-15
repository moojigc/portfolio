import React, { useState } from "react";
import {
	Link as A,
	useParams,
	useHistory,
	useLocation, useRouteMatch
} from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Link } from "@material-ui/core/";
import TextContent from "../../pages/About/TextContent";

type Lang = 'en' | 'ja'

const Nav = () => {
    const opposite = (lang: Lang) => lang === 'en' ? 'ja' : 'en';
	const params = useRouteMatch('/:lang') as { params: { lang: Lang }}
	const history = useHistory();
	const { pathname } = useLocation();
    const [languagePref, setLanguagePref] = useState(params?.params.lang || "en");
    // console.log(languagePref, params)
	const { about, portfolio } = TextContent(languagePref);
    
    const handleChangeLanguage = (lang: Lang) => {
        history.push(`/${opposite(lang)}`);
		setLanguagePref(opposite(lang));
    };
    
	return (
		<AppBar
			position="static"
			style={{ backgroundColor: "var(--dark-transluscent)" }}
		>
			<Toolbar
				style={{ display: "Flex", justifyContent: "space-between" }}
			>
				<IconButton edge="start" color="inherit">
					<A to="/">
						<img
							style={{ width: "5rem" }}
							src="/images/moojig-logo.png"
							alt="Moojig logo"
						/>
					</A>
				</IconButton>
				<div>
					<Link
						color="secondary"
						style={{ fontWeight: "bold", marginRight: "0.5rem" }}
						component={A}
						to={`/${languagePref}/about`}
					>
						<Button variant="contained" color="secondary">
							{about}
						</Button>
					</Link>
					<Link
						color="secondary"
						style={{ fontWeight: "bold", marginRight: "0.5rem" }}
						component={A}
						to={`/${languagePref}/portfolio`}
					>
						<Button variant="contained" color="secondary">
							{portfolio}
						</Button>
					</Link>
					<Button
						variant="outlined"
						size="small"
						onClick={() => handleChangeLanguage(languagePref)}
					>
						{opposite(languagePref).toUpperCase()}
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
