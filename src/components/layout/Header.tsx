import { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
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
  Invoicing,
  LinkInBio,
  LogoIcon,
  MediaKit,
  NotificationIcon,
  MessageIcon,
  MenuIcon,
  RevenueIcon,
  Store,
  AppsOpenIcon,
} from "../reusable/Icons";
import { Link, useLocation } from "react-router-dom";
import { useUserProfile } from "@/hooks/useQueries";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export function Header() {
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const location = useLocation();

  const { data: user } = useUserProfile();

  const userInitials = user
    ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
    : "U";

  // Navigation items with dynamic active state
  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
      active: location.pathname === "/",
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: <AnalyticsIcon />,
      active: location.pathname === "/analytics",
    },
    {
      label: "Revenue",
      href: "/revenue",
      icon: <RevenueIcon />,
      active: location.pathname === "/revenue",
    },
    {
      label: "CRM",
      href: "/crm",
      icon: <CRMIcon />,
      active: location.pathname === "/crm",
    },
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
      icon: <LinkInBio className="size-5" />,
    },
    {
      label: "Store",
      description: "Manage your Store activities",
      icon: <Store className="size-5" />,
    },
    {
      label: "Media Kit",
      description: "Manage your Media Kit",
      icon: <MediaKit className="size-5" />,
    },
    {
      label: "Invoicing",
      description: "Manage your Invoices",
      icon: <Invoicing className="size-5" />,
    },
    {
      label: "Bookings",
      description: "Manage your Bookings",
      icon: <BookingsIcon className="size-5" />,
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-background">
      <header className={"shadow bg-white p-3 px-6 rounded-full"}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <LogoIcon />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden [@media(min-width:850px)]:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={cn(
                  "flex items-center gap-2 rounded-full p-4 text-base",
                  item.active
                    ? "bg-black text-white hover:bg-black/90 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                asChild
              >
                <Link to={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
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
                    "flex items-center h-auto rounded-full",
                    appsDropdownOpen
                      ? "bg-black text-white p-2"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {appsDropdownOpen ? <AppsOpenIcon /> : <AppsIcon />}
                  {appsDropdownOpen ? (
                    <>
                      <span className="">Apps </span>{" "}
                      <span className="border-l border-gray-500 pl-4">
                        Link in Bio
                      </span>
                    </>
                  ) : (
                    <span>Apps</span>
                  )}
                  <ChevronDownIcon
                    className={cn(
                      "h-4 w-4 transition-transform",
                      appsDropdownOpen ? "rotate-180 transform" : ""
                    )}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={20}
                className="w-[360px] p-2"
              >
                {appsItems.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    className="flex items-center gap-3 p-3 cursor-pointer group hover:shadow-sm hover:!bg-transparent"
                  >
                    <div className="flex-shrink-0 mt-1 border p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-gray-500">
                        {item.description}
                      </span>
                    </div>
                    <ChevronRight className="ml-auto h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 rounded-full cursor-pointer"
            >
              <NotificationIcon />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 rounded-full cursor-pointer"
            >
              <MessageIcon />
            </Button>

            <div className="bg-[#EFF1F6] rounded-full pl-1 pr-2 py-1 cursor-pointer">
              <DropdownMenu>
                <DropdownMenuTrigger className=" flex items-center justify-center gap-2">
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback className="bg-gray-800 text-white text-sm">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <MenuIcon className={"hidden md:block"} />
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={20} align="end">
                  <DropdownMenuItem className="flex flex-col">
                    <span className="font-medium">{`${user?.first_name} ${user?.last_name}`}</span>
                    <span className="text-sm text-gray-500">{user?.email}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-500 rounded-full"
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="mt-12 space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start",
                        item.active
                          ? "bg-gray-100 font-medium"
                          : "text-gray-700"
                      )}
                      asChild
                    >
                      <Link to={item.href} className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
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
    </div>
  );
}
