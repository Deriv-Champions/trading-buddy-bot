import { useListBookings } from "@workspace/api-client-react";
import { format } from "date-fns";
import { Loader2, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

export default function Admin() {
  const { data: bookings, isLoading, error } = useListBookings();
  const queryClient = useQueryClient();

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 sm:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-4 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Website
            </Link>
            <h1 className="text-4xl font-display font-bold">Admin Dashboard</h1>
            <p className="text-white/50 mt-2">Manage session requests and leads.</p>
          </div>
          
          <Button onClick={handleRefresh} variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" /> Refresh Data
          </Button>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 bg-card rounded-2xl border border-white/5">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-white/50">Loading bookings...</p>
          </div>
        ) : error ? (
          <div className="py-12 px-6 bg-destructive/10 border border-destructive/20 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-destructive mb-2">Error loading data</h3>
            <p className="text-white/60">Please ensure the backend server is running.</p>
          </div>
        ) : !bookings || bookings.length === 0 ? (
          <div className="py-32 px-6 bg-card border border-white/5 rounded-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📭</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No bookings yet</h3>
            <p className="text-white/50">When someone submits a request, it will appear here.</p>
          </div>
        ) : (
          <div className="bg-card border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white/5 text-white/70">
                  <tr>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Contact</th>
                    <th className="px-6 py-4 font-medium">Program</th>
                    <th className="px-6 py-4 font-medium">Experience</th>
                    <th className="px-6 py-4 font-medium">Pref. Time</th>
                    <th className="px-6 py-4 font-medium">Date Applied</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">
                        {booking.firstName} {booking.lastName}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-white">{booking.phone}</div>
                        <div className="text-white/50 text-xs">{booking.email || 'No email'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                          {booking.trainingInterest.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/80 capitalize">
                        {booking.experienceLevel.replace('-', ' ')}
                      </td>
                      <td className="px-6 py-4 text-white/80">
                        {booking.preferredDate || 'Any'} {booking.preferredTime ? `@ ${booking.preferredTime}` : ''}
                      </td>
                      <td className="px-6 py-4 text-white/50">
                        {format(new Date(booking.createdAt), "MMM d, yyyy")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
