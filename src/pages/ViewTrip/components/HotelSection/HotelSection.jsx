import React from "react";
import PlaceholderImg from "../../../../assets/Placeholder.jpeg";
import { Link } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";

const HotelSection = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {(
          trip?.tripData?.HotelOptions ||
          trip?.tripData?.hotelOptions ||
          trip?.tripData?.Hotels ||
          []
        ).map((hotel, index) => (
          <HotelCard hotel={hotel} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HotelSection;
