import React, { useState, useEffect } from "react";
import PlaceholderImg from "../../../../assets/Placeholder.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GetPlaceDetails,
  PHOTO_REF_URL,
} from "../../../../Service/PlacesPhotoAPI";

const PlaceCard = ({ place, index }) => {
  // // Google Place Photo API Call for the location
  // const [photoUrl, setPhotoUrl] = useState("");

  // useEffect(() => {
  //   place && GetPlacePhoto();
  // }, [place]);

  // const GetPlacePhoto = async () => {
  //   const data = {
  //     textQuery: place?.PlaceName,
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
      to={`https://www.google.com/maps/search/?api=1&query=` + place.PlaceName}
      target="_blank"
    >
      <div
        key={index}
        className="border rounded-xl p-3 mt-4 flex gap-5 hover:scale-105 transition-all hover:shadow-sm cursor-pointer"
      >
        <img
          // src={photoUrl} -> If Google API is used
          src={PlaceholderImg}
          alt=""
          className="w-[130px] h-[130px] rounded-xl"
        />
        <div>
          <h2 className="font-bold text-lg">{place.PlaceName}</h2>
          <p className="text-sm text-gray-400">{place.PlaceDetails}</p>
          {/* Time Takes to travel is to be added */}
          {/* <h2 className="mt-2">🕙 {place.TimeTravel}</h2> */}

          {/* Optional - Button to Add for Navigation on Click */}
          {/* <Button size="sm">
          <FaLocationDot />
          </Button> */}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
