import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="border-b border-gray-100 py-4 px-8 flex items-center justify-end gap-4">
      <BellIcon className="h-5 w-5 text-gray-500" />
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-gray-800 text-white text-xs">
          OI
        </AvatarFallback>
      </Avatar>
    </header>
  );
}
