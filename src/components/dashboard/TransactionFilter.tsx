import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  trigger: React.ReactNode;
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
  trigger,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fromCalendarOpen, setFromCalendarOpen] = useState(false);
  const [toCalendarOpen, setToCalendarOpen] = useState(false);
  const [typePopoverOpen, setTypePopoverOpen] = useState(false);
  const [statusPopoverOpen, setStatusPopoverOpen] = useState(false);
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

  const getSelectedTypeLabels = () => {
    const selected = filters.transactionTypes
      .map((id) => transactionTypeOptions.find((opt) => opt.id === id)?.label)
      .filter(Boolean);
    return selected.length ? selected.join(", ") : "Select transaction types";
  };

  const getSelectedStatusLabels = () => {
    const selected = filters.transactionStatus
      .map((id) => transactionStatusOptions.find((opt) => opt.id === id)?.label)
      .filter(Boolean);
    return selected.length ? selected.join(", ") : "Select transaction status";
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[540px] overflow-y-auto flex flex-col h-[calc(100dvh-20px)] rounded-xl my-3 mr-3">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle className="text-2xl font-bold">Filter</SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-8 p-4">
          {/* Quick Date Filters */}
          <div className="flex flex-wrap gap-3">
            {["Today", "Last 7 days", "This month", "Last 3 months"].map(
              (period) => (
                <Button
                  key={period}
                  variant="outline"
                  size="sm"
                  className="w-fit rounded-full"
                  onClick={() => {}}
                >
                  {period}
                </Button>
              )
            )}
          </div>

          {/* Date Range */}
          <div className="space-y-4">
            <Label>Date Range</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="space-y-4 w-full">
            <Label>Transaction Type</Label>
            <Popover open={typePopoverOpen} onOpenChange={setTypePopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    typePopoverOpen && "border-primary"
                  )}
                >
                  <span className="truncate">{getSelectedTypeLabels()}</span>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4" align="start">
                <div className="space-y-2">
                  {transactionTypeOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`type-${option.id}`}
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
                        htmlFor={`type-${option.id}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Transaction Status */}
          <div className="w-full space-y-4">
            <Label>Transaction Status</Label>
            <Popover
              open={statusPopoverOpen}
              onOpenChange={setStatusPopoverOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    statusPopoverOpen && "border-primary"
                  )}
                >
                  <span className="truncate">{getSelectedStatusLabels()}</span>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4" align="start">
                <div className="space-y-2">
                  {transactionStatusOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`status-${option.id}`}
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
                        htmlFor={`status-${option.id}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 mt-auto p-4">
          <Button
            variant="outline"
            className="flex-1 rounded-full"
            size={"lg"}
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            className="flex-1 rounded-full"
            size={"lg"}
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
