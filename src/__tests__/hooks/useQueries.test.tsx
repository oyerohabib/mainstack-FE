import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useTransactions,
  useWalletBalance,
  useUserProfile,
} from "@/hooks/useQueries";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("API Hooks", () => {
  test("useTransactions returns transaction data", async () => {
    const { result } = renderHook(() => useTransactions(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toHaveLength(2);
    expect(result.current.data?.[0].amount).toBe(500);
    expect(result.current.data?.[0].metadata.name).toBe("John Doe");
  });

  test("useWalletBalance returns wallet data", async () => {
    const { result } = renderHook(() => useWalletBalance(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.balance).toBe(750.56);
    expect(result.current.data?.total_revenue).toBe(1250.56);
  });

  test("useUserProfile returns user data", async () => {
    const { result } = renderHook(() => useUserProfile(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.first_name).toBe("Olivier");
    expect(result.current.data?.last_name).toBe("Jones");
    expect(result.current.data?.email).toBe("olivierjones@gmail.com");
  });
});
