import { MainLayout } from "@/components/layout/MainLayout";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import {
  TransactionList,
  Transaction,
} from "@/components/dashboard/TransactionList";
import ChartOld from "@/components/dashboard/ChartOld";

export function Revenue() {
  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Psychology of Money",
      person: "Roy Cash",
      amount: "USD 600",
      date: "Apr 03,2022",
      status: "completed",
      type: "incoming",
    },
    {
      id: "2",
      title: "Buy me a coffee",
      person: "Jonathan Smart",
      amount: "USD 100",
      date: "Apr 02,2022",
      status: "completed",
      type: "incoming",
    },
    {
      id: "3",
      title: "How to build an online brand",
      person: "Delvan Ludacris",
      amount: "USD 100",
      date: "Apr 02,2022",
      status: "completed",
      type: "incoming",
    },
    {
      id: "4",
      title: "Cash withdrawal",
      amount: "USD 3000.33",
      date: "Apr 01,2022",
      status: "successful",
      type: "outgoing",
    },
    {
      id: "5",
      title: "Support my outreach",
      person: "Shawn kane",
      amount: "USD 400",
      date: "Apr 02,2022",
      status: "completed",
      type: "incoming",
    },
    {
      id: "6",
      title: "Cash withdrawal",
      amount: "USD 1004.44",
      date: "Apr 01,2022",
      status: "pending",
      type: "outgoing",
    },
    {
      id: "7",
      title: "Learn how to pitch your idea",
      person: "Dujon Jericho",
      amount: "USD 500",
      date: "Apr 02,2022",
      status: "completed",
      type: "incoming",
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row md:gap-10 xl:gap-28 gap-6 mb-8 w-full">
        <div id="chart" className="md:w-[70%] lg:w-4/6 xl:w-3/4">
          <BalanceCard
            title="Available Balance"
            amount="USD 120,500.00"
            showWithdraw={true}
          />
          <div className="max-h-[300px] max-w-[93%] xl:max-w-full ml-auto mt-8">
            <ChartOld />
          </div>
        </div>
        <div id="balance" className="md:w-[30%] lg:w-2/6 xl:w-1/4">
          <BalanceCard title="Ledger Balance" amount="USD 0.00" infoIcon />
          <BalanceCard title="Total Payout" amount="USD 55,080.00" infoIcon />
          <BalanceCard title="Total Revenue" amount="USD 175,580.00" infoIcon />
          <BalanceCard title="Pending Payout" amount="USD 0.00" infoIcon />
        </div>
      </div>

      <TransactionList transactions={transactions} />
    </MainLayout>
  );
}
