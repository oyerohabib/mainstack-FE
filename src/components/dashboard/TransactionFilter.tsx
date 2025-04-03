import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

export interface FilterState {
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  transactionTypes: string[];
  transactionStatus: string[];
}

const transactionTypeOptions = [
  { id: "store", label: "Store Transactions" },
  { id: "get_tipped", label: "Get Tipped" },
  { id: "withdrawals", label: "Withdrawals" },
  { id: "chargebacks", label: "Chargebacks" },
  { id: "cashbacks", label: "Cashbacks" },
  { id: "refer_earn", label: "Refer & Earn" },
];

const transactionStatusOptions = [
  { id: "successful", label: "Successful" },
  { id: "pending", label: "Pending" },
  { id: "failed", label: "Failed" },
];

export function TransactionFilter({
  onFilterChange,
  onClearFilters,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fromCalendarOpen, setFromCalendarOpen] = useState(false);
  const [toCalendarOpen, setToCalendarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    dateRange: {
      from: undefined,
      to: undefined,
    },
    transactionTypes: [],
    transactionStatus: [],
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
  };

  const handleApply = () => {
    onFilterChange(filters);
    setIsOpen(false);
  };

  const handleClear = () => {
    const emptyFilters: FilterState = {
      dateRange: { from: undefined, to: undefined },
      transactionTypes: [],
      transactionStatus: [],
    };
    setFilters(emptyFilters);
    onClearFilters();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Filter</SheetTitle>
          <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        <div className="py-6 space-y-8">
          {/* Quick Date Filters */}
          <div className="flex gap-4">
            {["Today", "Last 7 days", "This month", "Last 3 months"].map(
              (period) => (
                <Button
                  key={period}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    // Implement quick date selection logic
                  }}
                >
                  {period}
                </Button>
              )
            )}
          </div>

          {/* Date Range */}
          <div className="space-y-4">
            <Label>Date Range</Label>
            <div className="flex gap-4">
              <Popover
                open={fromCalendarOpen}
                onOpenChange={(open) => {
                  setFromCalendarOpen(open);
                  if (open) setToCalendarOpen(false);
                }}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !filters.dateRange.from && "text-muted-foreground"
                    )}
                  >
                    {filters.dateRange.from ? (
                      format(filters.dateRange.from, "PPP")
                    ) : (
                      <span>From date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={filters.dateRange.from}
                    onSelect={(date) => {
                      handleFilterChange({
                        dateRange: {
                          ...filters.dateRange,
                          from: date || undefined,
                        },
                      });
                      setFromCalendarOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Popover
                open={toCalendarOpen}
                onOpenChange={(open) => {
                  setToCalendarOpen(open);
                  if (open) setFromCalendarOpen(false);
                }}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !filters.dateRange.to && "text-muted-foreground"
                    )}
                  >
                    {filters.dateRange.to ? (
                      format(filters.dateRange.to, "PPP")
                    ) : (
                      <span>To date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={filters.dateRange.to}
                    onSelect={(date) => {
                      handleFilterChange({
                        dateRange: {
                          ...filters.dateRange,
                          to: date || undefined,
                        },
                      });
                      setToCalendarOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Transaction Type */}
          <div className="space-y-4">
            <Label>Transaction Type</Label>
            <div className="space-y-2 border rounded-lg p-4">
              {transactionTypeOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={filters.transactionTypes.includes(option.id)}
                    onCheckedChange={(checked) => {
                      const newTypes = checked
                        ? [...filters.transactionTypes, option.id]
                        : filters.transactionTypes.filter(
                            (t) => t !== option.id
                          );
                      handleFilterChange({ transactionTypes: newTypes });
                    }}
                  />
                  <Label
                    htmlFor={option.id}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Status */}
          <div className="space-y-4">
            <Label>Transaction Status</Label>
            <div className="space-y-2 border rounded-lg p-4">
              {transactionStatusOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={filters.transactionStatus.includes(option.id)}
                    onCheckedChange={(checked) => {
                      const newStatus = checked
                        ? [...filters.transactionStatus, option.id]
                        : filters.transactionStatus.filter(
                            (s) => s !== option.id
                          );
                      handleFilterChange({ transactionStatus: newStatus });
                    }}
                  />
                  <Label
                    htmlFor={option.id}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Button variant="outline" className="flex-1" onClick={handleClear}>
            Clear
          </Button>
          <Button className="flex-1" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
