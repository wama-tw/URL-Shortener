import request from "supertest";
import app from "../index";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";

describe("RESTful api", () => {
  test("Create a new shortUrl", async () => {
    const postData = {
      url: "https://github.com/wama-tw",
      expireAt: "2022-04-08T09:20:41Z",
    };
    const response = await request(app).post("/api/urls").send(postData);

    const newUrl = await prisma.urls.findFirst({
      where: {
        id: response.body.id,
        original_url: postData.url,
        expire_at: new Date(Date.parse(postData.expireAt)),
      },
    });

    expect(response.statusCode).toBe(200);
    expect(newUrl).toEqual(expect.anything());
  });

  test("Update an exit shortUrl", async () => {
    console.log(faker.date.past());
    const oldData = await prisma.urls.create({
      data: {
        original_url: faker.internet.url(),
        expire_at: faker.date.past(),
      },
    });

    const putData = {
      url: "https://medium.com/@wama.tw",
      expireAt: "2022-04-08T09:20:41Z",
    };
    const response = await request(app)
      .put(`/api/urls/${oldData.id}`)
      .send(putData);

    const updatedUrl = await prisma.urls.findFirst({
      where: {
        id: response.body.id,
        original_url: putData.url,
        expire_at: new Date(Date.parse(putData.expireAt)),
      },
    });

    expect(response.statusCode).toBe(200);
    expect(updatedUrl).toEqual(expect.anything());
  });

  test("Delete an exit shortUrl", async () => {
    console.log(faker.date.past());
    const oldData = await prisma.urls.create({
      data: {
        original_url: faker.internet.url(),
        expire_at: faker.date.past(),
      },
    });

    const response = await request(app).delete(`/api/urls/${oldData.id}`);

    const deletedUrl = await prisma.urls.findFirst({
      where: {
        id: response.body.id,
        original_url: oldData.url,
        expire_at: new Date(Date.parse(oldData.expireAt)),
      },
    });

    expect(response.statusCode).toBe(200);
    expect(deletedUrl).toBeNull();
  });
});

afterAll(async () => {
  await prisma.urls.deleteMany({});
  await prisma.$disconnect();
});
