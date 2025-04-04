import { Button } from "@/components/ui/button";
import { ReceiptLongIcon } from "../reusable/Icons";

interface NoTransactionsProps {
  onClearFilter: () => void;
}

export function NoTransactions({ onClearFilter }: NoTransactionsProps) {
  return (
    <div className="flex flex-col gap-6 items-start py-12 px-4 max-w-[500px] mx-auto">
      <div className="p-4 rounded-xl bg-[#E1E4EA] w-fit">
        <ReceiptLongIcon />
      </div>

      <p className="text-3xl font-bold">
        No matching transactions found for the selected filter
      </p>
      <p>Change your filters to see more results, or add a new product.</p>
      <Button
        onClick={onClearFilter}
        variant="outline"
        size={"xl"}
        className="rounded-full bg-[#EFF1F6] cursor-pointer"
      >
        Clear Filter
      </Button>
    </div>
  );
}
