import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h1 className="text-9xl font-black mb-4 opacity-10">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-10 max-w-md">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm font-bold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "hsl(22 100% 50%)" }}
      >
        Back to Home <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
