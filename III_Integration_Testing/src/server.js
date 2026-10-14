const express = require("express");
// const mathlib = require("./math");
const app = express();
const port = 3000;
const { add, sub, multi, div, isEven, hexToRgb} = require("../mylib.js"); // ./ = current dir ../ = one dir lower

app.get("/", (req, res) => res.send("Hello. Server is Online. <br><br>Test out how the hex to RGB works with http://localhost:3000/hexToRgb?hex=HEX_VALUE on your address bar.<br><br>Replacing HEX_VALUE with any hex value you want to test it with.\nResult will be shown in JSON format rgb objects."));

app.get("/add", (req, res) => {
	const a = parseInt(req.query.a, 10);
	const b = parseInt(req.query.b, 10);
	res.send(String(add(a, b)));
});

app.get("/isEven", (req, res) => {
	const a = parseInt(req.query.a, 10);	// converts str to int
	res.send(String(isEven(a)));
});

app.get("/hexToRgb", (req, res) => {
	//const a = parseInt(req.query.a, 10);
	const hex = req.query.hex;
	res.send(hexToRgb(hex));			// gives RGB in JSON format. adding it as string was messing everything up
});

if (process.env.NODE_ENV !== "test") {
	app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;

