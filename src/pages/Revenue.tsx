import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { TransactionList } from "@/components/dashboard/TransactionList";
import { FilterState } from "@/components/dashboard/TransactionFilter";
import ChartOld from "@/components/dashboard/ChartOld";
import { useTransactions, useWalletBalance } from "@/hooks/useQueries";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/utils";
import { isWithinInterval, parseISO } from "date-fns";
import { AvailableBalance } from "@/components/dashboard/AvailableBalance";

export function Revenue() {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { from: undefined, to: undefined },
    transactionTypes: [],
    transactionStatus: [],
  });

  const { data: transactions, isLoading: isLoadingTransactions } =
    useTransactions();
  const { data: walletBalance, isLoading: isLoadingWallet } =
    useWalletBalance();

  // Apply filters to transactions
  const filteredTransactions = transactions?.filter((transaction) => {
    // Date range filter
    if (filters.dateRange.from && filters.dateRange.to) {
      const transactionDate = parseISO(transaction.date);
      if (
        !isWithinInterval(transactionDate, {
          start: filters.dateRange.from,
          end: filters.dateRange.to,
        })
      ) {
        return false;
      }
    }

    // Transaction type filter
    if (filters.transactionTypes.length > 0) {
      const type = transaction.type === "deposit" ? "store" : transaction.type;
      if (!filters.transactionTypes.includes(type)) {
        return false;
      }
    }

    // Transaction status filter
    if (
      filters.transactionStatus.length > 0 &&
      !filters.transactionStatus.includes(transaction.status)
    ) {
      return false;
    }

    return true;
  });

  // Format transactions for the TransactionList component
  const formattedTransactions =
    filteredTransactions?.map((transaction) => ({
      id:
        transaction?.payment_reference || transaction.amount + transaction.date,
      title:
        transaction?.metadata?.product_name ||
        transaction?.metadata?.type ||
        "Cash withdrawal",
      person: transaction?.metadata?.name,
      amount: formatCurrency(transaction?.amount),
      date: new Date(transaction?.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      status: transaction?.status as "completed" | "pending" | "successful",
      type: (transaction?.type === "deposit" ? "incoming" : "outgoing") as
        | "incoming"
        | "outgoing",
    })) || [];

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      dateRange: { from: undefined, to: undefined },
      transactionTypes: [],
      transactionStatus: [],
    });
  };

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row md:gap-10 xl:gap-28 gap-6 mb-8 md:mb-14 lg:mb-20 w-full">
        <div id="chart" className="md:w-[70%] lg:w-4/6 xl:w-3/4">
          {isLoadingWallet ? (
            <Skeleton className="h-32 w-full rounded-lg" />
          ) : (
            <AvailableBalance
              title="Available Balance"
              amount={formatCurrency(walletBalance?.balance || 0)}
              showWithdraw={true}
              testId="available-balance-card"
              amountClass="text-2xl md:text-4xl"
            />
          )}
          <div className="max-h-[300px] w-full sm:max-w-[93%] xl:w-full ml-auto mt-8">
            <ChartOld />
          </div>
        </div>
        <div id="balance" className="md:w-[30%] lg:w-2/6 xl:w-1/4">
          {isLoadingWallet ? (
            <>
              <Skeleton className="h-24 w-full rounded-lg mb-4" />
              <Skeleton className="h-24 w-full rounded-lg mb-4" />
              <Skeleton className="h-24 w-full rounded-lg mb-4" />
              <Skeleton className="h-24 w-full rounded-lg" />
            </>
          ) : (
            <>
              <BalanceCard
                title="Ledger Balance"
                amount={formatCurrency(walletBalance?.ledger_balance || 0)}
                testId="ledger-balance-card"
                infoIcon
              />
              <BalanceCard
                title="Total Payout"
                amount={formatCurrency(walletBalance?.total_payout || 0)}
                testId="total-payout-card"
                infoIcon
              />
              <BalanceCard
                title="Total Revenue"
                amount={formatCurrency(walletBalance?.total_revenue || 0)}
                infoIcon
              />
              <BalanceCard
                title="Pending Payout"
                amount={formatCurrency(walletBalance?.pending_payout || 0)}
                infoIcon
              />
            </>
          )}
        </div>
      </div>

      {isLoadingTransactions ? (
        <Skeleton className="h-96 w-full rounded-lg" />
      ) : (
        <TransactionList
          transactions={formattedTransactions}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          showNoTransactions={formattedTransactions.length === 0}
        />
      )}
    </MainLayout>
  );
}
