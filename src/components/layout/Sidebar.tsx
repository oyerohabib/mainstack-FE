import { Invoicing, LinkInBio, MediaKit, Store } from "../reusable/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <div className="absolute sm:top-[30%] [@media(min-width:1380px)]:top-[35%] left-4 px-3 py-4 max-h-dvh hidden sm:flex flex-col gap-6 shadow rounded-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <LinkInBio className="cursor-pointer transition-all duration-300 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 hover:bg-gray-100 rounded-full" />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="text-base py-2"
          >
            <p>Link in Bio</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Store className="cursor-pointer transition-all duration-300 opacity-70 grayscale hover:opacity-100 hover:grayscale-0" />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="text-base py-2"
          >
            <p>Store</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <MediaKit className="cursor-pointer transition-all duration-300 opacity-70 grayscale hover:opacity-100 hover:grayscale-0" />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="text-base py-2"
          >
            <p>Media Kit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Invoicing className="cursor-pointer transition-all duration-300 opacity-70 grayscale hover:opacity-100 hover:grayscale-0" />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="text-base py-2"
          >
            <p>Invoicing</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Sidebar;
