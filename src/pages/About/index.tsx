import React, { LegacyRef, useRef, useState } from "react";
import { Link as A, useParams } from "react-router-dom";
import Header from "../../components/Header";
import {
	Container,
	Grid,
	CardMedia,
	CardContent,
	Button,
	Box,
	useMediaQuery,
	Typography,
} from "@material-ui/core";
import ContactButtons from "./ContactButtons";
import TextContent from "./TextContent";
import { useScrollTo } from "../../utils";

const About = ({ setMounted }: any) => {
	const { lang } = useParams() as { lang: string };
	const age = Math.floor(
		(Date.now() - new Date(1996, 1, 29).getTime()) /
			(1000 * 60 * 60 * 24 * 365.25)
	);
	const isMobile = useMediaQuery("(max-width:900px)");
	const cardOffset = isMobile ? "unset" : "-3rem";
	const [nameJA, setNameJA] = useState(false);
	const { bio, caption, about } = TextContent(lang, age);

	const aboutRef = useRef(null as HTMLElement);

	useScrollTo('about', aboutRef);

	return (
		<Container
			maxWidth="lg"
			style={{ marginTop: "2rem", marginBottom: "2rem" }}
		>
			<Box component="main" style={{ background: "var(--wrapper)" }}>
				<Header overlaid={-1}>{about}</Header>
				<Grid container spacing={2}>
					<Grid
						style={{
							padding: isMobile
								? "1.5rem"
								: "1rem 1rem 1.5rem 1.5rem",
							position: "relative",
							top: cardOffset,
							marginBottom: cardOffset,
						}}
						item
						md={4}
					>
						<div
							ref={aboutRef as LegacyRef<HTMLDivElement>}
							style={{ width: "100%", background: "transparent" }}
						>
							<CardMedia
								onLoad={() => setMounted(true)}
								component="img"
								alt="Profile picture"
								height="auto"
								image="/images/DSC02773.jpg"
								style={{
									borderRadius: "50%",
                                    boxShadow: "var(--box-shadow)",
                                    // maxWidth: '50vw'
								}}
							/>
							<CardContent
								style={{
									backgroundColor: "var(--card-bg)",
									borderRadius: "0.25rem",
									marginTop: "0.5rem",
									boxShadow:
										"#0000006b 0px 0px 0.5rem 0.1rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
                                    textAlign: "center",
								}}
							>
								<Button
									onClick={() => setNameJA(!nameJA)}
									color="secondary"
									variant="contained"
									style={{ width: "100%" }}
								>
									{nameJA
										? "ムージグ・バっツォクト"
										: "Moojig Battsogt"}
								</Button>
								<Grid container direction="column">
									<Typography
										variant="caption"
										style={{
											fontFamily: "inherit !important",
										}}
									>
										{caption}: <strong>Munkhtsogt</strong>
									</Typography>
									me@moojig.dev | (347) 391-6941
								</Grid>
							</CardContent>
						</div>
					</Grid>
					<Grid item md={8}>
						<Box
							style={{
								height: "100%",
								lineHeight: lang === "ja" ? "1.5" : "inherit",
							}}
						>
							{bio}
							<div
								style={{
									width: "100%",
									padding: "2rem",
									display: "grid",
									gridTemplateColumns:
										"repeat(auto-fit, minmax(10%, 1fr));",
									// justifyContent: 'center'
								}}
							>
								<ContactButtons lang={lang} />
							</div>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default About;
