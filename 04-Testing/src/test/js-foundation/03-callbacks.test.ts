import { describe, expect, test } from "@jest/globals";
import { getUserById } from "../../js-foundation/03-callbacks";

describe("js-foundation/03-callbacks", () => {
  test("getuserById should return user with id 1", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`user not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });
});

describe("js-foundation/03-callbacks", () => {
  test("getuserById should return John Doe", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      const { id, name } = user!;
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: "John Doe" });
      done();
    });
  });
});
