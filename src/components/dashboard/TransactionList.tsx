import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  ChevronDownIcon,
  ExportIcon,
  TransactionDown,
  TransactionUp,
} from "../reusable/Icons";

export interface Transaction {
  id: string;
  title: string;
  person?: string;
  amount: string;
  date: string;
  status: "completed" | "pending" | "successful";
  type: "incoming" | "outgoing";
}

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 sm:items-center justify-between border-b pb-6">
        <div>
          <h2 className="text-xl font-bold">24 Transactions</h2>
          <p className="text-sm text-gray-500">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="ghost"
            size="xl"
            className="gap-2 rounded-full bg-gray-100 cursor-pointer"
          >
            Filter
            <ChevronDownIcon />
          </Button>
          <Button
            variant="ghost"
            size="xl"
            className="gap-2 rounded-full bg-gray-100 cursor-pointer"
          >
            Export list
            <ExportIcon />
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
                  "size-12 rounded-full flex items-center justify-center",
                  transaction.type === "outgoing"
                    ? "bg-[#E3FCF2]"
                    : "bg-[#F9E3E0]"
                )}
              >
                {transaction.type === "outgoing" ? (
                  <TransactionDown />
                ) : (
                  <TransactionUp />
                )}
              </div>
              <div>
                <div className="font-medium mb-1">{transaction.title}</div>
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
              <div className="font-bold">{transaction.amount}</div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
