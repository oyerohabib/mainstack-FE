import { Button } from "../ui/button";
import { ChevronDownIcon, ExportIcon } from "../reusable/Icons";
import { NoTransactions } from "@/components/dashboard/NoTransactions";
import { FilterState, TransactionFilter } from "./TransactionFilter";
import { TransactionItem } from "./TransactionItem";

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
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  showNoTransactions?: boolean;
}

export function TransactionList({
  transactions,
  onFilterChange,
  onClearFilters,
  showNoTransactions = false,
}: TransactionListProps) {
  const filterTrigger = (
    <Button
      variant="ghost"
      size="xl"
      className="gap-2 rounded-full bg-gray-100 cursor-pointer"
    >
      Filter
      <ChevronDownIcon />
    </Button>
  );

  return (
    <div>
      <div className="flex gap-6 flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            {transactions?.length || 0} Transactions
          </h2>
          <p className="text-sm text-gray-500">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex gap-3">
          <TransactionFilter
            onFilterChange={onFilterChange}
            onClearFilters={onClearFilters}
            trigger={filterTrigger}
          />
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

      {showNoTransactions ? (
        <NoTransactions onClearFilter={onClearFilters} />
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </div>
      )}
    </div>
  );
}
