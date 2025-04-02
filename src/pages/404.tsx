import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <Link to={"/revenue"}>
          <Button
            variant={"default"}
            size={"xl"}
            className="rounded-full cursor-pointer"
          >
            Revenue Page
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
