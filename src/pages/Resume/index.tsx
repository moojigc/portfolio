import React, { Fragment } from "react";
import {
	Container,
	Grid,
	Typography as T,
	Box,
	Link,
	List,
	Divider,
	Link as A
} from "@material-ui/core";
import {
	Email,
	Public,
	LinkedIn,
	GitHub,
	Phone,
	PinDrop
} from "@material-ui/icons";
import {
	name,
	title,
	summary,
	phone,
	location,
	email,
	linkedin,
	github,
	skills,
	site,
	education,
	employment,
	projects,
} from "./contents.json";

const InfoSection = ({ details = [] }) => (
	<React.Fragment>
		{details.map(({ icon, text }) => (
			<Grid container>
				<Grid item style={{ marginRight: "0.2rem" }}>
					{icon}
				</Grid>
				<Grid item>
					<T>{text}</T>
				</Grid>
			</Grid>
		))}
	</React.Fragment>
);

const checkForLink = (str: string) => {
	const arr = str.split(' ');

	return arr.reduce((pv, cv) => {
		if (/.com/.test(cv)) {
			return (
				<Fragment>{pv}{' '}
					<A style={{ color: '#009dc1' }} href={'https://' + cv.replace(/.$/, '')}>{cv}</A>
				</Fragment>
			);
		} else {
			return `${pv} ${cv}`;
		}
	}, '');
};

const Resume = () => {
	return (
		<Container maxWidth="lg" style={{ marginTop: "2rem" }}>
			<Box boxShadow={5} className="resume">
				<Grid container>
					<Grid container item lg={4} className="left">
						<div>
							<Box marginBottom="0.5rem">
								<T variant="h5" component="h1">
									<b>{name}</b>
								</T>
								<hr />
								<T variant="h6" component="h2">
									{title}
								</T>
							</Box>
							<InfoSection
								details={[
									{
										icon: <Email fontSize="small" />,
										text: (
											<Link
												color="textPrimary"
												href={"mailto" + email}
											>
												{email}
											</Link>
										),
									},
									{
										icon: <Public fontSize="small" />,
										text: (
											<Link
												color="textPrimary"
												href={site.href}
											>
												{site.text}
											</Link>
										),
									},
									{
										icon: <Phone fontSize="small" />,
										text: (
											<Link
												color="textPrimary"
												href={`tel:${phone}`}
											>
												{phone}
											</Link>
										),
									},
									{
										icon: <PinDrop fontSize="small" />,
										text: location,
									},
									{
										icon: <LinkedIn fontSize="small" />,
										text: (
											<Link
												color="textPrimary"
												href={linkedin.href}
											>
												{linkedin.text}
											</Link>
										),
									},
									{
										icon: <GitHub fontSize="small" />,
										text: (
											<Link
												color="textPrimary"
												href={github.href}
											>
												{github.text}
											</Link>
										),
									},
								]}
							/>
							<T>{summary}</T>
							<T variant="h5" component="h3">
								Skills
							</T>
							<hr />
							<Grid container direction="column">
								{skills.map((s) => (
									<React.Fragment>
										<T variant="h6" component="h4">
											{s.title}
										</T>
										{s.list.map((l) => (
											<T>{l}</T>
										))}
									</React.Fragment>
								))}
							</Grid>
						</div>
					</Grid>
					<Grid item lg={8} className="right">
						<T variant="h4" component="h3">
							Education
						</T>
						<hr />
						{education.map((e, i, arr) => (
							<React.Fragment>
								<Grid container justify="space-between">
									<T component="h4">{e.school}</T>
									<T className="date">
										{e.from} to {e.to}
									</T>
								</Grid>
								<T>
									{e.degree} in {e.field}
								</T>
								{i !== arr.length - 1 && <Divider />}
							</React.Fragment>
						))}
						<T variant="h4" component="h3">
							Experience
						</T>
						<hr />
						{employment.map((e, i, arr) => (
							<React.Fragment>
								<Grid container justify="space-between">
									<T variant="h6" component="h4">
										{e.company}
									</T>
									<T className="date">
										{e.from} to {e.to}
									</T>
								</Grid>
								<Grid container justify="space-between">
									<T>{e.title}</T>
									<T>{e.location}</T>
								</Grid>
								<List>
									{e.description.map((d, i) => (
										<li key={i}>
											<T>{checkForLink(d)}</T>
										</li>
									))}
								</List>
								{i !== arr.length - 1 && <Divider />}
							</React.Fragment>
						))}
						<T variant="h4" component="h3">
							Projects
						</T>
						<hr />
						{projects.map((p, i, arr) => (
							<React.Fragment>
								<Grid container justify="space-between">
									<T variant="h6" component="h4">
										<Link color="textPrimary" href={p.href}>
											{p.title}
										</Link>{" "}
										|{" "}
										<Link color="textPrimary" href={p.repo}>
											GitHub Repo
										</Link>
									</T>
									<T className="date">
										{p.from} {p.to && `to ${p.to}`}
									</T>
								</Grid>
								<T>
									<List>
										{p.description.map((d, i) => (
											<li key={i}>{d}</li>
										))}
									</List>
								</T>
								{i !== arr.length - 1 && <Divider />}
							</React.Fragment>
						))}
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default Resume;
