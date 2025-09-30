import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface";   

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* content here */}
    </div>
  );
}
