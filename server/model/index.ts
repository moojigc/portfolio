import db from "../middleware/connect";
const project = "project";

export interface IProject {
	name?: string;
	id?: string;
	html_url?: string;
	homepage?: string;
	description?: string;
}

export default class Project {
	public name: string;
	public id: string;
	public html_url: string;
	public homepage: string;
	public description: string;

	// constructor({ id, name, html_url, homepage, description }) {
	// 	this.id = id;
	// 	this.name = name;
	// 	this.html_url = html_url;
	// 	this.homepage = homepage;
	// 	this.description = description;
	// }
	get props() {
		return {
			id: this.id,
			name: this.name,
			html_url: this.html_url,
			homepage: this.homepage,
			description: this.description,
		};
	}
	private static queryWrapper = async (sql: string, values: any[]) => {
		try {
			const [results] = await db.query(sql, values);
			return results[0];
		} catch (error) {
			console.error(error);
			return error;
		}
	};
	static findAll() {
		return this.queryWrapper("SELECT ?? FROM ??", [
			["id", "name", "html_url", "homepage", "description"],
			project,
		]);
	}
	static saveMany(values: IProject[]) {
		return this.queryWrapper("INSERT INTO ?? VALUES ??", [
			['project(name, id, html_url, homepage, description)'],
			values.map(v => [v.name, v.id, v.html_url, v.homepage, v.description]),
		]);
	}
	static update(id: string, values: IProject) {
		return this.queryWrapper("UPDATE ?? SET ? WHERE ?", [
			project,
			{ ...values },
			{ id: id },
		]);
	}
}
