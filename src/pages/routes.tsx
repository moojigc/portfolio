import React, { useState, useEffect, useRef } from "react";
import {
	Route,
	Switch
} from "react-router-dom";
import { About, Portfolio, Resume } from "../pages";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../utils/theme";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import getRepos from "../utils/repos";
import Hero from "../components/Hero";

const Routes = () => {

	const [mounted, setMounted] = useState(false);
	const [repos, setRepos] = useState([]);
	useEffect(() => {
		(async () => {
			const repos = await getRepos();
			setRepos(repos);
			setMounted(true);
		})();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Nav />
			<Switch>
				<Route exact path="/:lang/resume">
					<Resume />
				</Route>
				<Route exact path={["/", "/:lang", "/:lang/:landing"]}>
					<Hero />
					<Portfolio
						repos={repos}
					/>
					<About setMounted={setMounted} />
				</Route>
			</Switch>
			<Footer mounted={mounted} />
		</ThemeProvider>
	);
};

export default Routes;
