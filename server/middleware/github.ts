import axios, { AxiosResponse } from "axios";
import { IProject } from "../model";
const token = process.env.token;

const getRepos = async (url = "users/moojigc/starred?sort=updated") => {
	try {
		const { data } = await axios({
			// headers: { Authorization: `token ${token}` },
			url: `https://api.github.com/${url}`,
			method: "get"
		}) as AxiosResponse<IProject[]>;
		return data;
	} catch (error) {
		console.error(error);
		return [{}];
	}

};

export default getRepos;
