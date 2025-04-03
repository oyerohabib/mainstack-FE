import { Button } from "@/components/ui/button";

interface NoTransactionsProps {
  onClearFilter: () => void;
}

export function NoTransactions({ onClearFilter }: NoTransactionsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <p className="text-gray-500 text-center mb-4">
        No matching transactions found for the selected filter
      </p>
      <Button onClick={onClearFilter} variant="outline">
        Clear Filter
      </Button>
    </div>
  );
}
