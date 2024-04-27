import {
  BASE_URL,
  SEARCH_WORD_URL,
  ADD_NEW_WORD_OR_SYNONYM_URL,
} from "./constants";

describe("file contains the base URL and other endpoints", () => {
  describe("BASE_URL should be the base URL", () => {
    it("should be set to http://localhost:3000", () => {
      expect(BASE_URL).toBe("http://localhost:3000");
    });
  });

  describe("SEARCH_WORD_URL should add /words to base URL", () => {
    it("should be  BASE_URL + /words", () => {
      expect(SEARCH_WORD_URL).toBe("http://localhost:3000/words");
    });
  });

  describe("ADD_NEW_WORD_OR_SYNONYM_URL should add /add to base URL", () => {
    it("should be set to BASE_URL + /add", () => {
      expect(ADD_NEW_WORD_OR_SYNONYM_URL).toBe("http://localhost:3000/add");
    });
  });
});
