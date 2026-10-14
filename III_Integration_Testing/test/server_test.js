const request = require("supertest");
const expect = require("chai").expect;          // inports

process.env.NODE_ENV = "test"; // ensure server exports app
const app = require("../src/server");

/**
 * Integration tests for the Math API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */
describe("Math API", () => {
	/**
	 * Test the root route.
	 * Expects a 200 status and response text.
	 */
	it("responds to the root route", async () => {
		const res = await request(app).get("/");
		expect(res.status).to.equal(200);
		expect(res.text).to.equal("Hello. Server is Online. <br><br>Test out how the hex to RGB works with http://localhost:3000/hexToRgb?hex=HEX_VALUE on your address bar.<br><br>Replacing HEX_VALUE with any hex value you want to test it with.\nResult will be shown in JSON format rgb objects.");
	});

	/**
	 * Test the /add route with query parameters.
	 * Expects HTTP status 200.
	 */
	it("returns status 200 for /add", async () => {
		const res = await request(app).get("/add?a=2&b=3");
		expect(res.status).to.equal(200);
	});

	/**
	 * Test the /add route for correct sum calculation.
	 * Expects the sum of two numbers in response text.
	 */
	it("returns the sum of two numbers", async () => {
		const res = await request(app).get("/add?a=2&b=3");
		expect(res.text).to.equal("5");
	});
	
	/**
	 * Test the /isEven route with query parameters.
	 * Expects HTTP status 200.
	 */
	//TODO it("returns status 200 for /isEven" ...

    it("returns status 200 for /isEven", async () => {
		const res = await request(app).get("/isEven?a=3");
		expect(res.status).to.equal(200);
	});

	/**
	 * Test the /isEven route for correct is even check.
	 * Expects the sum of two numbers in response text.
	 */
	//TODO it("returns true if the number is even" ...
    it("returns false if the number is uneven", async () => {
		const res = await request(app).get("/isEven?a=3");
		expect(res.text).to.equal("false");
	});
// into hexToRgb
    it("returns status 200 for /hexToRgb", async () => {
		const res = await request(app).get("/isEven?a=3");
		expect(res.status).to.equal(200);
    });
    it("returns the RGB value of given hex value", async () => {
		const res = await request(app).get("/hexToRgb?hex=27F55B"); // works only on numbers
        //const string = JSON.stringify(res)
		expect(res.text).to.equal('{"r":39,"g":245,"b":91}');       // convert JSON to string ''
	});
});

