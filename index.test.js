// index.test.js

const request = require("supertest");
const { app, closeServer } = require("./index");

describe("app", () => {
  afterAll(() => {
    closeServer();
  });

  test('responds with "Hello World!" on GET /', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
