import { InfoIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BalanceCardProps {
  title: string;
  amount: string;
  showWithdraw?: boolean;
  className?: string;
}

export function BalanceCard({
  title,
  amount,
  showWithdraw = false,
  className,
}: BalanceCardProps) {
  return (
    <Card className={cn("border-none shadow-none", className)}>
      <CardHeader className="p-0 pb-2 space-y-0 flex flex-row justify-between items-center">
        <CardTitle className="text-sm font-normal text-gray-500">
          {title}
        </CardTitle>
        <InfoIcon className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent className="p-0 space-y-2">
        <div className="text-2xl font-bold">{amount}</div>
        {showWithdraw && (
          <Button
            variant="default"
            className="rounded-full bg-gray-900 hover:bg-gray-800 px-8"
          >
            Withdraw
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
