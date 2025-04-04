import { cn } from "@/lib/utils";
import { TransactionDown, TransactionUp } from "../reusable/Icons";
import type { Transaction } from "./TransactionList";

export function TransactionItem({
  title,
  person,
  amount,
  date,
  status,
  type,
}: Transaction) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "size-12 rounded-full flex items-center justify-center",
            type === "outgoing" ? "bg-[#F9E3E0]" : "bg-[#E3FCF2]"
          )}
        >
          {type === "outgoing" ? <TransactionDown /> : <TransactionUp />}
        </div>
        <div>
          <div className="font-medium mb-1 text-base">{title}</div>
          <div className="text-sm text-gray-500">
            {person ||
              (status === "successful" && (
                <div className="text-xs text-green-500">Successful</div>
              ))}
            {status === "pending" && (
              <div className="text-xs text-amber-500">Pending</div>
            )}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-base">{amount}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
}
