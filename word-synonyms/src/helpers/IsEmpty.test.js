import { isEmpty } from "./IsEmpty";

describe("isEmpty a component to check if an array is empty or not", () => {
  it("returns true if the length of an array is equal to 0", () => {
    const arr = [];
    const result = isEmpty(arr);
    expect(result).toBe(true);
  });

  it("returns false if the length of an array is not equal to 0", () => {
    const arr = [1, 2, 3];
    const result = isEmpty(arr);
    expect(result).toBe(false);
  });

  it("returns false for non-array inputs", () => {
    const arr = "A String";
    const result = isEmpty(arr);
    expect(result).toBe(false);
  });
});
