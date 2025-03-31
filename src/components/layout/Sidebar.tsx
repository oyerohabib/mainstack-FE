import { HomeIcon, BarChart2, DollarSign, Users, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors",
        active
          ? "bg-gray-100 text-gray-900"
          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
      )}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="w-16 md:w-64 border-r border-gray-100 py-4 flex flex-col">
      <div className="px-4 mb-6">
        <div className="h-8 w-8">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="#111111" />
            <path d="M7 7H11V11H7V7Z" fill="white" />
            <path d="M13 7H17V11H13V7Z" fill="white" />
            <path d="M7 13H11V17H7V13Z" fill="white" />
            <path d="M13 13H17V17H13V13Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="space-y-1 px-2 flex-1">
        <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Home" />
        <NavItem icon={<BarChart2 className="h-5 w-5" />} label="Analytics" />
        <NavItem
          icon={<DollarSign className="h-5 w-5" />}
          label="Revenue"
          active
        />
        <NavItem icon={<Users className="h-5 w-5" />} label="CRM" />
        <NavItem icon={<Grid className="h-5 w-5" />} label="Apps" />
      </div>

      <div className="mt-auto px-2 space-y-2">
        {/* Sidebar footer icons */}
        <div className="py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
