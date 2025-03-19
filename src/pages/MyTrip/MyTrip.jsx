import { db } from "@/Service/FirebaseConfig";
import { collection, where, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TripCard from "./components/TripCard/TripCard";

const MyTrip = () => {
  useEffect(() => {
    GetUserTrips();
  }, []);

  const naviagte = useNavigate();

  const [userTrips, setUserTrips] = useState([]);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      console.log("User not found");
      naviagte("/");
      return;
    }

    const q = query(
      collection(db, "AI_Trip"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => <TripCard trip={trip} />)
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>
            ))}
      </div>

      <h1 className="font-bold text-4xl mt-20">
        <span className="text-red-700 font-extrabold text-4xl">UPCOMING: </span>{" "}
        HOTEL & PLACES Images will be updated soon.
      </h1>
    </div>
  );
};

export default MyTrip;
