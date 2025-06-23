import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Link
        href="/terms-of-service"
        className="text-2xl text-blue-600 hover:text-blue-800 hover:underline"
      >
        Terms of Service
      </Link>
      <Link
        href="/privacy-policy"
        className="text-xl text-blue-600 hover:text-blue-800 hover:underline"
      >
        Privacy Policy
      </Link>
    </div>
  );
};

export default Page;
