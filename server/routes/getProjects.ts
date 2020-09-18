import Project, { IProject } from "../model";
import { Response } from "express";
import getRepos from "../middleware/github";

const serverError = (res: Response, error) => {
	res.status(500).json({ message: "Internal server error." }).end();
	throw(error);
}

let projects: IProject[];

const getProjects = async (_req, res: Response) => {	

	const dateIsDivisibleBySeven = (new Date().getDate() + 7) % 7 === 0; 
	// github api is slow sometimes, would rather save stuff to db, will implement this properly later

	try {
		if (!projects) {
			const data = await getRepos();
			const mapped = data.map(
				({ name, html_url, homepage, description, id }) => {
					return {
						id,
						name,
						html_url,
						homepage,
						description,
					};
				}
			);

			// await Project.saveMany(mapped);

			projects = mapped;

			res.json(projects);

		} else {
			
			res.json(projects);
		}
	} catch (error) {
		serverError(res, error);
	}
};

export default {
	method: "get",
	route: "projects",
	callback: getProjects,
};
