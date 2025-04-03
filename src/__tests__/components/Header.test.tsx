import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe("Header Component", () => {
  test("renders navigation items", () => {
    renderWithProviders(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("CRM")).toBeInTheDocument();
  });

  test("renders user initials in avatar", async () => {
    renderWithProviders(<Header />);

    // Wait for the user data to be loaded
    const userInitials = await screen.findByText("OJ");
    expect(userInitials).toBeInTheDocument();
  });
});
