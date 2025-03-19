import React, { useEffect, useState } from "react";
import PlaceholderImg from "../../../../assets/Placeholder.jpeg";
import { Link } from "react-router-dom";
import {
  GetPlaceDetails,
  PHOTO_REF_URL,
} from "../../../../Service/PlacesPhotoAPI";

const HotelCard = ({ hotel, index }) => {
  // // Google Place Photo API Call for the location
  // const [photoUrl, setPhotoUrl] = useState("");

  // useEffect(() => {
  //   hotel && GetPlacePhoto();
  // }, [hotel]);

  // const GetPlacePhoto = async () => {
  //   const data = {
  //     textQuery: hotel?.HotelName,
  //   };

  //   const result = await GetPlaceDetails(data).then((resp) => {
  //     console.log(resp.data.places[0].photos[3].name);
  //   });

  //   const PhotoUrl = PHOTO_REF_URL.replace(
  //     "{NAME}",
  //     result.data.places[0].photos[3].name
  //   );
  //   setPhotoUrl(PhotoUrl);
  // };

  return (
    <Link
      to={
        `https://www.google.com/maps/search/?api=1&query=` +
        hotel.HotelName +
        "," +
        hotel.HotelAddress
      }
      target="_blank"
    >
      <div key={index} className="hover:scale-105 transition-all cursor-pointer">
        <img
          // src={PhotoUrl} -> If Google API is used
          src={PlaceholderImg}
          alt="" className="rounded-xl h-[180px] w-full object-cover" />
        <div className="my-2 flex flex-col">
          <h2 className="font-medium">{hotel.HotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel.HotelAddress}</h2>
          <h2 className="text-sm">💲{hotel.Price}</h2>
          <h2 className="text-sm">⭐ {hotel.Rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
