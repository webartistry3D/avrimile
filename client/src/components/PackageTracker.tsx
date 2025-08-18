import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Package, Truck, Home, Check, MapPin, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TrackingHistory {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

interface Package {
  id: string;
  trackingId: string;
  status: string;
  senderName: string;
  recipientName: string;
  recipientPhone: string;
  pickupLocation: string;
  deliveryLocation: string;
  currentLocation?: string;
  estimatedDelivery?: string;
  trackingHistory: TrackingHistory[];
}

const PackageTracker = () => {
  const [trackingId, setTrackingId] = useState("");
  const [searchId, setSearchId] = useState("");
  const { toast } = useToast();

  const { data: packageData, isLoading, error } = useQuery<Package>({
    queryKey: ["/api/packages", searchId],
    enabled: !!searchId,
  });

  const handleTrack = () => {
    if (!trackingId.trim()) {
      toast({
        title: "Tracking ID Required",
        description: "Please enter a tracking ID to continue",
        variant: "destructive",
      });
      return;
    }
    setSearchId(trackingId.trim());
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'picked_up':
        return <Check className="text-sm" />;
      case 'in_warehouse':
        return <Package className="text-sm" />;
      case 'in_transit':
        return <Truck className="text-sm" />;
      case 'out_for_delivery':
        return <MapPin className="text-sm" />;
      case 'delivered':
        return <Home className="text-sm" />;
      default:
        return <Package className="text-sm" />;
    }
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="tracker" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-avrimile-secondary mb-4">
            <Search className="inline-block mr-3 text-avrimile-primary" />
            Track Your Package
          </h2>
          <p className="text-xl text-avrimile-muted">Real-time tracking for all your deliveries across Nigeria</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input
                type="text"
                placeholder="Enter Tracking ID..."
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="flex-1 text-lg"
                data-testid="input-tracking-id"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <Button
                onClick={handleTrack}
                disabled={isLoading}
                className="bg-avrimile-primary hover:bg-avrimile-accent w-fit px-6"
                data-testid="button-track"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Track
                  </>
                )}
              </Button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8" data-testid="tracking-error">
                <p className="text-red-800 font-medium">Package not found</p>
                <p className="text-red-600 text-sm mt-1">
                  Please check your tracking ID and try again. Contact support if the issue persists.
                </p>
              </div>
            )}

            {packageData && (
              <div className="mb-8" data-testid="tracking-result">
                <div className="mb-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-avrimile-secondary text-lg mb-2">Package Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-avrimile-muted">From:</span> 
                      <span className="text-avrimile-secondary font-medium ml-2">{packageData.pickupLocation}</span>
                    </div>
                    <div>
                      <span className="text-avrimile-muted">To:</span> 
                      <span className="text-avrimile-secondary font-medium ml-2">{packageData.deliveryLocation}</span>
                    </div>
                    <div>
                      <span className="text-avrimile-muted">Sender:</span> 
                      <span className="text-avrimile-secondary font-medium ml-2">{packageData.senderName}</span>
                    </div>
                    <div>
                      <span className="text-avrimile-muted">Recipient:</span> 
                      <span className="text-avrimile-secondary font-medium ml-2">{packageData.recipientName}</span>
                    </div>
                  </div>
                </div>

                {/* Tracking History with Connecting Trail */}
                <div className="relative">
                  {packageData.trackingHistory.map((event, index) => {
                    const isCompleted = true; // All historical events are completed
                    const isLast = index === packageData.trackingHistory.length - 1;
                    
                    return (
                      <div key={index} className="relative" data-testid={`tracking-event-${index}`}>
                        {/* Connecting line */}
                        {!isLast && (
                          <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-avrimile-primary to-avrimile-accent"></div>
                        )}
                        
                        <div className="flex items-start space-x-4 pb-8">
                          <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-avrimile-primary text-white shadow-lg' : 'bg-gray-300 text-white'
                          }`}>
                            {getStatusIcon(event.status)}
                            {/* Pulse animation for current status */}
                            {index === packageData.trackingHistory.length - 1 && (
                              <div className="absolute inset-0 rounded-full bg-avrimile-primary animate-ping opacity-25"></div>
                            )}
                          </div>
                          
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <h4 className="font-semibold text-avrimile-secondary text-lg">{formatStatus(event.status)}</h4>
                            <p className="text-avrimile-muted text-sm mb-1">{event.location}</p>
                            <p className="text-avrimile-primary text-sm font-medium mb-2">{formatDate(event.timestamp)}</p>
                            <p className="text-sm text-gray-600">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-avrimile-secondary mb-2">Nationwide Coverage</h3>
                <p className="text-avrimile-muted">Track packages anywhere in Nigeria in real time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-avrimile-primary to-avrimile-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-avrimile-secondary mb-2">Delivery Transparency</h3>
                <p className="text-avrimile-muted">Stay updated from pickup to drop-off.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageTracker;
