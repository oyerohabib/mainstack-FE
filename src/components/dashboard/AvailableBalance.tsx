import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InfoIcon } from "../reusable/Icons";

interface BalanceCardProps {
  title: string;
  amount: string;
  showWithdraw?: boolean;
  infoIcon?: boolean;
  infoTitle?: string;
  className?: string;
  testId?: string;
  amountClass?: string;
}

export function AvailableBalance({
  title,
  amount,
  showWithdraw = false,
  infoIcon = false,
  infoTitle = "Learn More",
  className,
  testId = "balance-card",
  amountClass,
}: BalanceCardProps) {
  return (
    <div data-testid={testId}>
      <Card className={cn("border-none shadow-none py-4", className)}>
        <CardHeader
          className={`p-0 pb-2 space-y-0 flex flex-row gap-16 ${
            infoIcon ? "justify-between" : "items-center"
          }`}
        >
          <CardTitle className="text-sm font-normal text-gray-500 gap-2 flex flex-col">
            {title}
            <div
              className={cn(
                "text-xl md:text-[28px] font-bold text-black",
                amountClass
              )}
            >
              {amount}
            </div>
          </CardTitle>
          {showWithdraw && (
            <Button
              variant="default"
              className="rounded-full text-base bg-gray-900 hover:bg-gray-800 px-10 py-6 cursor-pointer"
            >
              Withdraw
            </Button>
          )}
          {infoIcon && (
            <div title={infoTitle}>
              <InfoIcon className="text-[#888F95] cursor-pointer" />
            </div>
          )}
        </CardHeader>
      </Card>
    </div>
  );
}
