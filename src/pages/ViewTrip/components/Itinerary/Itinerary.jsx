// import React from "react";
// import PlaceCard from "../PlaceCard/PlaceCard";

// const Itinerary = ({ trip }) => {
//   return (
//     <div>
//       <h2 className="font-bold text-lg">Places to Visit</h2>
//       <div>
//         {(trip?.tripData?.Itinerary || trip?.tripData?.itinerary || []).map(
//           (item, index) => (
//             <div className="mt-5" key={index}>
//               <h2 className="font-medium text-lg">{item.day || item.Day}</h2>
//               <div className="grid md:grid-cols-2 gap-5">
//                 {(item.plan || item.Plan).map((place, index) => (
//                   <div  key={index}>
//                     <h2 className="font-medium text-sm text-orange-500">
//                       {place.TimeTravel}
//                     </h2>
//                     <PlaceCard place={place} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Itinerary;



import React from "react";
import PlaceCard from "../PlaceCard/PlaceCard";

const Itinerary = ({ itineraryData, bestTimeToVisit }) => {
  if (!itineraryData || itineraryData.length === 0) {
    return <div>No itinerary data available</div>;
  }

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      {itineraryData.map((dayData, index) => (
        <div className="mt-5" key={index}>
          <h2 className="font-medium text-lg">{dayData.Day}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {(dayData.places || []).map((place, placeIndex) => (
              <div key={placeIndex}>
                <h2 className="font-medium text-sm text-orange-500">
                  {place.TimeTravel}
                </h2>
                <PlaceCard place={place} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {bestTimeToVisit && (
        <div className="mt-5">
          <h3 className="font-medium">Best Time to Visit:</h3>
          <p>{bestTimeToVisit}</p>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
