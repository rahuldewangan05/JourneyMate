import React, { useEffect, useState } from "react";
import { db } from "../../../Service/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection/InfoSection";
import HotelSection from "../components/HotelSection/HotelSection";
import Itinerary from "../components/Itinerary/Itinerary";
import Footer from "../components/Footer/Footer";

const ViewTrip = () => {
  const { tripId } = useParams();

  const [trip, setTrip] = useState([]);

  // will only work if you have tripID
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AI_Trip", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      toast("No Trip Found!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information section */}
      <InfoSection trip={trip} />

      {/* Recommended Hotels */}
      <HotelSection trip={trip} />

      {/* Daily Plan */}
      <Itinerary trip={trip} />

      <h1 className="font-bold text-4xl mt-20">
        <span className="text-red-700 font-extrabold text-4xl">UPCOMING: </span>{" "}
        HOTEL & PLACES Images will be updated soon.
      </h1>

      {/* Footer */}
      <Footer trip={trip} />
    </div>
  );
};

export default ViewTrip;
