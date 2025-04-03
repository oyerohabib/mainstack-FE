import { render, screen } from "@testing-library/react";
import { BalanceCard } from "@/components/dashboard/BalanceCard";

describe("BalanceCard Component", () => {
  test("renders title and amount", () => {
    render(<BalanceCard title="Test Balance" amount="USD 100.00" />);

    expect(screen.getByText("Test Balance")).toBeInTheDocument();
    expect(screen.getByText("USD 100.00")).toBeInTheDocument();
  });

  test("renders withdraw button when showWithdraw is true", () => {
    render(
      <BalanceCard
        title="Test Balance"
        amount="USD 100.00"
        showWithdraw={true}
      />
    );

    expect(screen.getByText("Withdraw")).toBeInTheDocument();
  });

  test("does not render withdraw button when showWithdraw is false", () => {
    render(
      <BalanceCard
        title="Test Balance"
        amount="USD 100.00"
        showWithdraw={false}
      />
    );

    expect(screen.queryByText("Withdraw")).not.toBeInTheDocument();
  });

  test("renders info icon when infoIcon is true", () => {
    render(
      <BalanceCard title="Test Balance" amount="USD 100.00" infoIcon={true} />
    );

    // Check if the info icon is rendered
    const infoIcon = document.querySelector("svg");
    expect(infoIcon).toBeInTheDocument();
  });
});
