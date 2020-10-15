import React, { useRef } from "react";
import Header from "../../components/Header";
import {
	Container,
	Card,
	Box,
	CardMedia,
	Button,
	CardContent,
	Link,
	Grid,
	CircularProgress,
} from "@material-ui/core";
import InfoButtonGroup from "../../components/InfoButton";
import { useParams } from "react-router-dom";
import TextContent from "../About/TextContent";
import { useScrollTo } from "../../utils";

const Portfolio = ({ repos = [] }) => {
	const { lang } = useParams() as { lang: 'en' | 'ja' };
	const { portfolio, loadingMsg } = TextContent(lang);

	const portfolioRef = useRef(null as HTMLElement);

	useScrollTo('portfolio', portfolioRef);

	return (
		<Container maxWidth="xl" style={{ marginTop: "2rem" }}>
			<Box component="main" style={{ backgroundColor: "var(--wrapper)" }}>
				<Header>{portfolio}</Header>
				<article ref={portfolioRef} className={repos.length ? "grid" : ""}>
					{repos.length ? (
						repos.map(
							({ name, html_url, homepage, description }) => {
								return (
									<Card key={name}>
										<CardMedia
											component="img"
											alt={name + " webpage screenshot"}
											height="auto"
											image={`/images/${name}.png`}
										/>
										<CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
											<div>
												<div
													style={{
														fontSize: "2rem",
														textAlign: "center",
													}}
												>
													<Link
														style={{ fontFamily: 'var(--fancy-font)'}}
														color="textPrimary"
														href={html_url}
													>
														{name}
													</Link>
												</div>
												<p>{description}</p>
											</div>
											<Grid
												container
												justify="center"
												alignItems="stretch"
											>
												<InfoButtonGroup color="primary">
													<Button
														href={homepage}
														style={{
															color: "white",
														}}
													>
														See Deployed App
													</Button>
													<Button
														href={html_url}
														style={{
															color: "white",
														}}
													>
														See Repo
													</Button>
												</InfoButtonGroup>
											</Grid>
										</CardContent>
									</Card>
								);
							}
						)
					) : (
						<div>
							<div
								className="row"
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<CircularProgress
									color="secondary"
									size="3rem"
								/>
							</div>
							<p
								style={{
									textAlign: "center",
									fontStyle: "italic",
								}}
							>
								{loadingMsg}
							</p>
						</div>
					)}
				</article>
			</Box>
		</Container>
	);
};

export default Portfolio;
