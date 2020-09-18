import React from "react";
import { Link } from "@material-ui/core";
import { Link as A } from "react-router-dom";

export default (lang: string, age?: number) => {
	switch (lang) {
		case "ja":
			return {
				title: (
					<ruby>
						Moojig Battsogt<rt>ムージグ・バっツォクト</rt>
					</ruby>
				),
				subTitle: (
					<span>
						フルスタックウェブ
						<ruby>
							開発者<rt>デベロッパー</rt>
						</ruby>
					</span>
				),
				bio: (
					<article>
						<p>
							私は{age || 24}
							歳のフルスタックウェブデベロッパーでアメリカの
							<ruby>
								Connecticut<rt>コネチカット</rt>
							</ruby>
							州出身です。
							最近Connecticut大学のコーディング・ブートキャンプを卒業しました。あそこに、JavaScriptの最新技術、
							<code>
								ReactJS、MongoDB/Mongoose、MySQL/SequelizeやExpressJS
							</code>
							などは私が学びました。
						</p>
						<p>
							２０２０年{" "}
							<ruby style={{ fontWeight: "bold" }}>
								New York University<rt>ニューヨーク大学</rt>
							</ruby>
							も卒業しました。専攻が経済学で、副専攻が映画製作でした。
						</p>
						<p>
							暇の日は、漫画を読んだり、アニメを見たりや日本語の勉強したりなどしているんです。
						</p>
						<p>
							ぜひ私の{" "}
							<Link
								style={{
									fontWeight: "bold",
									color: "var(--link)",
								}}
								component={A}
								to="/portfolio/ja"
							>
								ポートフォリオのページ
							</Link>{" "}
							をご覧ください。そこに私のプロジェクトとそれぞれのGithubリポジトリを見えます。
						</p>
					</article>
				),
				header: "自伝",
				caption: "生まれの名前",
				email: "メール",
				resume: "履歴書",
				about: "自伝",
				portfolio: "ポートフォリオ",
				loadingMsg: "GitHubからデータをダウンロード中…",
			};
		default:
		case "en":
			return {
                title: 'Moojig Battsogt',
                subTitle: 'Full Stack Web Developer',
				bio: (
					<article>
						<p>
							I'm a {age || 24}-year-old full stack web developer
							from the small town of Orange, CT. I recently graduated from the <strong>UConn Coding Boot Camp</strong>, wherein I
							learned web-based technologies, including{" "}
							<code>
								ReactJS, MongoDB/Mongoose, MySQL/Sequelize, and
								ExpressJS
							</code>
							.
						</p>
						<p>
							I graduated from{" "}
							<span style={{ fontWeight: "bold" }}>
								New York University
							</span>{" "}
							in 2018 with a bachelor's degree in economics and a
							minor in producing for film & television.
						</p>
						<p>
							In my free time, I like to indulge in photography
							and videogames, as well as Japanese media.
						</p>
                        <p>
                            (also, <span style={{color: '#007acc', fontWeight: 800 }}>TypeScript</span> > JavaScript)
                        </p>
					</article>
				),
				header: "About",
				caption: "legal name",
				email: "Email",
				resume: "Resume",
				about: "About",
				portfolio: "Portfolio",
				loadingMsg: "Loading repos from GitHub...",
			};
	}
};
