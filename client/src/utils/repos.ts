import axios from "axios";

export default async () => {
	try {
		let { data } = await axios({
			url: "/api/v1/projects",
			method: "GET"
		});
		return data;
	} catch (error) {
		console.error(error);
		return error;
	}
};