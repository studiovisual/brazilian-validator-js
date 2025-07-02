import {
  isValidPhone,
  isValidPhoneLength,
  isValidPhoneFirstNumber,
  isValidPhoneAreaCode,
} from "../index";

describe("isValidPhone", () => {
  test("should return true for a valid phone number", () => {
    expect(isValidPhone("(11) 999999999")).toBe(true);
  });

  test("should return true for a valid phone number", () => {
    expect(isValidPhone(11999999999)).toBe(true);
  });

  test("should return false for an invalid phone number", () => {
    expect(isValidPhone("(21) 1234")).toBe(false);
  });

  test("should return false for an invalid phone number", () => {
    expect(isValidPhone(211234)).toBe(false);
  });
});

describe("isValidPhoneLength", () => {
  test("should return true for a phone number with valid length", () => {
    expect(isValidPhoneLength("(11) 999999999")).toBe(true);
  });

  test("should return true for a phone number with valid length", () => {
    expect(isValidPhoneLength(11999999999)).toBe(true);
  });

  test("should return false for a phone number with invalid length", () => {
    expect(isValidPhoneLength("(11) 1234")).toBe(false);
  });

  test("should return false for a phone number with invalid length", () => {
    expect(isValidPhoneLength(111234)).toBe(false);
  });
});

describe("isValidPhoneFirstNumber", () => {
  test("should return true for a phone number with valid first number", () => {
    expect(isValidPhoneFirstNumber("(11) 999999999")).toBe(true);
  });

  test("should return false for a phone number with invalid first number", () => {
    expect(isValidPhoneFirstNumber("(11) 123456789")).toBe(false);
  });
});

describe("isValidPhoneAreaCode", () => {
  test("should return true for a phone number with valid area code", () => {
    expect(isValidPhoneAreaCode("(11) 999999999")).toBe(true);
  });

  test("should return false for a phone number with invalid area code", () => {
    expect(isValidPhoneAreaCode("(25) 123456789")).toBe(false);
  });
});
