import { isValidCPF, isValidCPFLength } from "../index";

describe("isValidCpf", () => {
  test("should return true for a valid CPF number", () => {
    expect(isValidCPF("893.650.830-01")).toBe(true);
  });

  test("should return true for a valid CPF number", () => {
    expect(isValidCPF("89365083001")).toBe(true);
  });

  test("should return true for a valid CPF number", () => {
    expect(isValidCPF(89365083001)).toBe(true);
  });

  test("should return false for an invalid CPF number", () => {
    expect(isValidCPF("123.456.789-00")).toBe(false);
  });

  test("should return false for an invalid CPF number", () => {
    expect(isValidCPF("12345678900")).toBe(false);
  });

  test("should return false for an invalid CPF number", () => {
    expect(isValidCPF(12345678900)).toBe(false);
  });
});

describe("isValidCPFLength", () => {
  test("should return true for a CPF number with valid length", () => {
    expect(isValidCPFLength("12345678900")).toBe(true);
  });

  test("should return true for a CPF number with valid length", () => {
    expect(isValidCPFLength(12345678900)).toBe(true);
  });

  test("should return false for a CPF number with invalid length", () => {
    expect(isValidCPFLength("1234")).toBe(false);
  });

  test("should return false for a CPF number with invalid length", () => {
    expect(isValidCPFLength(1234)).toBe(false);
  });
});
