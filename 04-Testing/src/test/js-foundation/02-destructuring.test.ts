import { describe, expect, test } from "@jest/globals";
import { characters } from "../../js-foundation/02-destructuring";

describe("js-foundation/02-destructuring", () => {
  test("characters should contain  Flash, Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("characters should not contain Batman", () => {
    const [flash, superman] = characters;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
