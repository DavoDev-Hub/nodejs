import { describe, expect, test } from "@jest/globals";
import { getAge } from "../../plugins/get-age.plugin";

describe("getAge", () => {
  test("should return the age of a person", () => {
    const birthdate = "1980-10-21";
    const age = getAge(birthdate);
    expect(age).toBe(43);
  });

  test("getAge should return current age", () => {
    const birthdate = "1986-10-21";
    const age = getAge(birthdate);
    expect(age).toBe(37);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculatedAge);
  });
});
