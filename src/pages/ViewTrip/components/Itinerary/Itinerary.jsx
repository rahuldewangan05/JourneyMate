import React from "react";
import PlaceCard from "../PlaceCard/PlaceCard";

const Itinerary = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        {(trip?.tripData?.Itinerary || trip?.tripData?.itinerary || []).map(
          (item, index) => (
            <div className="mt-5" key={index}>
              <h2 className="font-medium text-lg">{item.day || item.Day}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {(item.plan || item.Plan).map((place, index) => (
                  <div  key={index}>
                    <h2 className="font-medium text-sm text-orange-500">
                      {place.TimeTravel}
                    </h2>
                    <PlaceCard place={place} />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Itinerary;
