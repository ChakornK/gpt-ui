const { Component } = require("react");

export class Themer extends Component {
	componentDidMount() {
		if (localStorage.getItem("theme") === "dark") {
			document.querySelector("html").classList.add("dark");
			document.querySelector("html").classList.remove("light");
		} else if (localStorage.getItem("theme") === "light") {
			document.querySelector("html").classList.add("light");
			document.querySelector("html").classList.remove("dark");
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.querySelector("html").classList.add("dark");
			document.querySelector("html").classList.remove("light");
		} else {
			document.querySelector("html").classList.add("light");
			document.querySelector("html").classList.remove("dark");
		}
	}
	render() {
		return null;
	}
}
