import { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AnalyticsIcon,
  AppsIcon,
  BookingsIcon,
  ChevronDownIcon,
  CRMIcon,
  HomeIcon,
  InfoIcon,
  InvoicingIcon,
  LinkInBioIcon,
  LogoIcon,
  MediaKitIcon,
  NotificationIcon,
  MessageIcon,
  MenuIcon,
  RevenueIcon,
  StoreIcon,
} from "../reusable/Icons";

// Navigation items type
interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
}

// Props for the header component
interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: <HomeIcon /> },
    { label: "Analytics", href: "/analytics", icon: <AnalyticsIcon /> },
    { label: "Revenue", href: "/revenue", icon: <RevenueIcon />, active: true },
    { label: "CRM", href: "/crm", icon: <CRMIcon /> },
  ];

  // Apps dropdown items
  const appsItems: {
    label: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Link in Bio",
      description: "Manage your Link in Bio",
      icon: <LinkInBioIcon />,
    },
    {
      label: "Store",
      description: "Manage your Store activities",
      icon: <StoreIcon />,
    },
    {
      label: "Media Kit",
      description: "Manage your Media Kit",
      icon: <MediaKitIcon />,
    },
    {
      label: "Invoicing",
      description: "Manage your Invoices",
      icon: <InvoicingIcon />,
    },
    {
      label: "Bookings",
      description: "Manage your Bookings",
      icon: <BookingsIcon />,
    },
  ];

  return (
    <header
      className={cn(
        "border-b border-gray-100 bg-white px-4 md:px-8",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between">
        {/* Logo and Navigation - Left Side */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <LogoIcon />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                  item.active
                    ? "bg-black text-white hover:bg-black/90"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                asChild
              >
                <a href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </Button>
            ))}

            {/* Apps Dropdown */}
            <DropdownMenu
              open={appsDropdownOpen}
              onOpenChange={setAppsDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                    appsDropdownOpen
                      ? "bg-gray-100"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <AppsIcon />
                  <span>Apps</span>
                  <ChevronDownIcon
                    className={cn(
                      "h-4 w-4 transition-transform",
                      appsDropdownOpen ? "rotate-180 transform" : ""
                    )}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                {appsItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    className="flex items-start gap-3 p-3 cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-500">
                        {item.description}
                      </span>
                    </div>
                    <InfoIcon className="ml-auto h-4 w-4 text-gray-400" />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <NotificationIcon />
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-500">
            <MessageIcon />
          </Button>

          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gray-800 text-white text-xs">
              OJ
            </AvatarFallback>
          </Avatar>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-500"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="mt-6 space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      item.active ? "bg-gray-100 font-medium" : "text-gray-700"
                    )}
                    asChild
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </Button>
                ))}

                <div className="py-2">
                  <h3 className="mb-2 px-4 text-sm font-medium">Apps</h3>
                  {appsItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="w-full justify-start px-4 py-2 text-sm"
                      asChild
                    >
                      <a href="#" className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
