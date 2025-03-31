import { ArrowUpRight, ArrowDownRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface Transaction {
  id: string;
  title: string;
  person: string;
  amount: string;
  date: string;
  status: "completed" | "pending" | "successful";
  type: "incoming" | "outgoing";
}

interface TransactionListProps {
  transactions: Transaction[];
}

// function TransactionIcon({
//   status,
//   type,
// }: {
//   status: Transaction["status"];
//   type: Transaction["type"];
// }) {
//   if (status === "completed") {
//     return (
//       <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
//         <Check className="h-4 w-4 text-green-500" />
//       </div>
//     );
//   }

//   if (status === "pending") {
//     return (
//       <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
//         <ArrowUpRight className="h-4 w-4 text-amber-500" />
//       </div>
//     );
//   }

//   if (status === "successful") {
//     return (
//       <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center">
//         <ArrowDownRight className="h-4 w-4 text-red-500" />
//       </div>
//     );
//   }

//   return null;
// }

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">24 Transactions</h2>
          <p className="text-sm text-gray-500">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            Filter
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            Export list
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center",
                  transaction.status === "pending"
                    ? "bg-amber-50"
                    : transaction.status === "successful"
                    ? "bg-red-50"
                    : "bg-green-50"
                )}
              >
                {transaction.status === "pending" ? (
                  <ArrowUpRight className="h-4 w-4 text-amber-500" />
                ) : transaction.status === "successful" ? (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                ) : (
                  <Check className="h-4 w-4 text-green-500" />
                )}
              </div>
              <div>
                <div className="font-medium">{transaction.title}</div>
                <div className="text-sm text-gray-500">
                  {transaction.person}
                </div>
                {transaction.status === "successful" && (
                  <div className="text-xs text-green-500">Successful</div>
                )}
                {transaction.status === "pending" && (
                  <div className="text-xs text-amber-500">Pending</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{transaction.amount}</div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
