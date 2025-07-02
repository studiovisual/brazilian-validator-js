import {
  isValidCNPJ,
  isValidCNPJLength,
  isValidCNPJDigits,
  isValidCNPJFirstCheckDigit,
  isValidCNPJSecondCheckDigit,
} from "../index";

describe("isValidCNPJ", () => {
  test("should return true for a valid CNPJ number", () => {
    expect(isValidCNPJ("60.473.486/0001-07")).toBe(true);
  });

  test("should return true for a valid CNPJ number", () => {
    expect(isValidCNPJ(60473486000107)).toBe(true);
  });

  test("should return false for an invalid CNPJ number", () => {
    expect(isValidCNPJ("1234567890")).toBe(false);
  });

  test("should return false for an invalid CNPJ number", () => {
    expect(isValidCNPJ(1234567890)).toBe(false);
  });
});

describe("isValidCNPJLength", () => {
  test("should return true for a CNPJ number with valid length", () => {
    expect(isValidCNPJLength("60.473.486/0001-07")).toBe(true);
  });

  test("should return true for a CNPJ number with valid length", () => {
    expect(isValidCNPJLength(60473486000107)).toBe(true);
  });

  test("should return false for a CNPJ number with invalid length", () => {
    expect(isValidCNPJLength("(11) 1234")).toBe(false);
  });

  test("should return false for a CNPJ number with invalid length", () => {
    expect(isValidCNPJLength(111234)).toBe(false);
  });
});

describe("isValidCNPJDigits", () => {
  test("should return true for a CNPJ number with valid digits", () => {
    expect(isValidCNPJDigits("60.473.486/0001-07")).toBe(true);
  });

  test("should return true for a CNPJ number with valid digits", () => {
    expect(isValidCNPJDigits(60473486000107)).toBe(true);
  });

  test("should return false for a CNPJ number with invalid digits", () => {
    expect(isValidCNPJDigits("11111111111111")).toBe(false);
  });

  test("should return false for a CNPJ number with invalid digits", () => {
    expect(isValidCNPJDigits(11111111111111)).toBe(false);
  });
});

describe("isValidCNPJFirstCheckDigit", () => {
  test("should return true for a CNPJ number with valid first check digit", () => {
    expect(isValidCNPJFirstCheckDigit("60.473.486/0001-07")).toBe(true);
  });

  test("should return true for a CNPJ number with valid first check digit", () => {
    expect(isValidCNPJFirstCheckDigit(60473486000107)).toBe(true);
  });

  test("should return false for a CNPJ number with invalid first check digit", () => {
    expect(isValidCNPJFirstCheckDigit("60.473.486/0001-17")).toBe(false);
  });

  test("should return false for a CNPJ number with invalid first check digit", () => {
    expect(isValidCNPJFirstCheckDigit(60473486000117)).toBe(false);
  });
});

describe("isValidCNPJSecondCheckDigit", () => {
  test("should return true for a CNPJ number with valid second check digit", () => {
    expect(isValidCNPJSecondCheckDigit("60.473.486/0001-07")).toBe(true);
  });

  test("should return true for a CNPJ number with valid second check digit", () => {
    expect(isValidCNPJSecondCheckDigit(60473486000107)).toBe(true);
  });

  test("should return false for a CNPJ number with invalid second check digit", () => {
    expect(isValidCNPJSecondCheckDigit("60.473.486/0001-06")).toBe(false);
  });

  test("should return false for a CNPJ number with invalid second check digit", () => {
    expect(isValidCNPJSecondCheckDigit(60473486000106)).toBe(false);
  });
});
