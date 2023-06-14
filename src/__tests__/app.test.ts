import request from "supertest";
import app from "../app";

describe("v1Router/GetUsers", () => {
	test("Get Users", async () => {
		return request(app)
			.get("/v1/getUsers")
			.then((res) => {
				expect(res.status).toBe(200);
			});
	});
});
