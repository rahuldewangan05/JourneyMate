import React, { useEffect, useState } from "react";
import PlaceholderImg from "../../../../assets/Placeholder.jpeg";
import { Button } from "@/components/ui/button";
import { FaShare } from "react-icons/fa";
import {
  GetPlaceDetails,
  PHOTO_REF_URL,
} from "../../../../Service/PlacesPhotoAPI";

const InfoSection = ({ trip }) => {
  // // Google Place Photo API Call for the location
  // const [photoUrl, setPhotoUrl] = useState("");

  // useEffect(() => {
  //   trip && GetPlacePhoto();
  // }, [trip]);

  // const GetPlacePhoto = async () => {
  //   const data = {
  //     textQuery: trip?.userSelection?.location,
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
    <div>
      <img
        // src={photoUrl} -> If Google API is used
        src={PlaceholderImg}
        className="h-[340px] w-full object-cover rounded-xl"
        alt=""
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-small text-xs md:text-md">
              📅 {trip?.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-small text-xs md:text-md">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-small text-xs md:text-md">
              🥂 No. Of Travellers: {trip?.userSelection?.travellers}{" "}
            </h2>
          </div>
        </div>
        <Button>
          <FaShare />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
