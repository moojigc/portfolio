import axios, { AxiosResponse } from "axios";

interface IProject {
	name?: string;
	id?: string;
	html_url?: string;
	homepage?: string;
	description?: string;
}

const getRepos = async (url = "users/moojigc/starred?sort=updated") => {
	try {
		const { data } = await axios({
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
