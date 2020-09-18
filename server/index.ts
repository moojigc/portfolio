import express from "express";
import dotenv from "dotenv";
import { resolve } from "path";
import morgan from "morgan";
import router from "./routes/getProjects";
import { networkInterfaces } from "os";
dotenv.config();

const PORT = process.env.PORT || 4000,
	PROD = process.env.NODE_ENV === "production",
	app = express();

app.use(express.urlencoded({ extended: true })).use(express.json());

PROD && app.use(express.static(resolve(__dirname, "..", "client", "build")));
!PROD && app.use(morgan("dev"));

app[router.method](`/api/v1/${router.route}`, router.callback);

app.all("/api/v1/*", (req, res) => {
	res.status(404)
		.json({
			message: `${req.path} not found.`,
		})
		.end();
});

PROD &&
	app.get("*", (_, res) =>
		res.sendFile(resolve(__dirname, "..", "client", "build", "index.html"))
	);

app.listen(PORT, () => {
	console.log(
		`Online at ${
			PROD
				? "https://moojigbc.com"
				: `http://\x1b[33m${
						networkInterfaces().wifi0[0].address
				  }\x1b[0m:${PORT}`
		}`
	);
});
