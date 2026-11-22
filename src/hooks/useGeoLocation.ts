import { useContext } from "react";
import { GeoLocationContext, GeoLocationContextType, GeoLocationProvider } from "@/context/GeoLocationContext";

export { GeoLocationProvider };
export type { GeoLocationContextType };

export const useGeoLocation = (): GeoLocationContextType => {
  const context = useContext(GeoLocationContext);
  if (!context) {
    throw new Error("useGeoLocation must be used within a GeoLocationProvider");
  }
  return context;
};
