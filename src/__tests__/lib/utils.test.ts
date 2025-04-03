import { formatCurrency } from "@/lib/utils";

describe("Utility Functions", () => {
  describe("formatCurrency", () => {
    test("formats integer values correctly", () => {
      expect(formatCurrency(1000)).toBe("USD 1,000.00");
    });

    test("formats decimal values correctly", () => {
      expect(formatCurrency(1234.56)).toBe("USD 1,234.56");
    });

    test("formats zero correctly", () => {
      expect(formatCurrency(0)).toBe("USD 0.00");
    });

    test("formats negative values correctly", () => {
      expect(formatCurrency(-500)).toBe("USD -500.00");
    });
  });
});
