import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center text-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-md">
        <h1 className="text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 drop-shadow-2xl">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">Market Not Found</h2>
        <p className="text-white/60 mb-8">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button asChild size="lg" className="w-full">
          <Link href="/">Return to Base</Link>
        </Button>
      </div>
    </div>
  );
}
