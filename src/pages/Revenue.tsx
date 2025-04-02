import { MainLayout } from "@/components/layout/MainLayout";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { TransactionList } from "@/components/dashboard/TransactionList";
import ChartOld from "@/components/dashboard/ChartOld";
import { useTransactions, useWalletBalance } from "@/hooks/useQueries";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/utils";

export function Revenue() {
  const { data: transactions, isLoading: isLoadingTransactions } =
    useTransactions();
  const { data: walletBalance, isLoading: isLoadingWallet } =
    useWalletBalance();

  // Format transactions for the TransactionList component
  const formattedTransactions =
    transactions?.map((transaction) => ({
      id:
        transaction?.payment_reference || transaction.amount + transaction.date,
      title:
        transaction?.metadata?.product_name ||
        transaction?.metadata?.type ||
        "N/A",
      person: transaction?.metadata?.name || "N/A",
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

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row md:gap-10 xl:gap-28 gap-6 mb-8 w-full">
        <div id="chart" className="md:w-[70%] lg:w-4/6 xl:w-3/4">
          {isLoadingWallet ? (
            <Skeleton className="h-32 w-full rounded-lg" />
          ) : (
            <BalanceCard
              title="Available Balance"
              amount={formatCurrency(walletBalance?.balance || 0)}
              showWithdraw={true}
            />
          )}
          <div className="max-h-[300px] max-w-[93%] xl:max-w-full ml-auto mt-8">
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
                infoIcon
              />
              <BalanceCard
                title="Total Payout"
                amount={formatCurrency(walletBalance?.total_payout || 0)}
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
        <TransactionList transactions={formattedTransactions} />
      )}
    </MainLayout>
  );
}
