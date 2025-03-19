import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  // for JSON output
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with\nHotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place\nDetails, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with\nbest time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '## Las Vegas 3-Day Budget Trip for a Couple:\n\n**Hotel Options:**\n\n```json\n[\n  {\n    "HotelName": "The D Las Vegas",\n    "HotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n    "Price": "$50-$100/night",\n    "HotelImageUrl": "https://www.thed.com/media/images/hero-images/the-d-las-vegas-hotel-casino-hero-mobile.jpg",\n    "GeoCoordinates": "36.1699, -115.1424",\n    "Rating": "4.0/5",\n    "Description": "Located in the heart of Fremont Street Experience, The D offers affordable rooms and a lively casino atmosphere. Enjoy a variety of dining options, bars, and entertainment."\n  },\n  {\n    "HotelName": "Golden Nugget",\n    "HotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",\n    "Price": "$60-$120/night",\n    "HotelImageUrl": "https://www.goldennugget.com/las-vegas/media/images/hotel/goldennugget_lasvegas_hero_mobile.jpg",\n    "GeoCoordinates": "36.1696, -115.1422",\n    "Rating": "4.5/5",\n    "Description": "This historic hotel boasts a vibrant casino, an impressive shark tank, and several dining options. Enjoy its central location and amenities for a memorable stay."\n  },\n  {\n    "HotelName": "Circus Circus",\n    "HotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n    "Price": "$40-$80/night",\n    "HotelImageUrl": "https://www.circuscircus.com/media/images/hero-images/circus-circus-hotel-casino-hero-mobile.jpg",\n    "GeoCoordinates": "36.1204, -115.1730",\n    "Rating": "3.5/5",\n    "Description": "Known for its affordable prices and family-friendly atmosphere, Circus Circus offers a carnival theme with live circus acts and a large arcade."\n  }\n]\n```\n\n**Itinerary:**\n\n**Day 1:**\n\n```json\n[\n  {\n    "PlaceName": "Fremont Street Experience",\n    "PlaceDetails": "A lively pedestrian mall with live music, street performers, and an impressive light show. Stroll through the iconic canopy and experience the vibrant atmosphere.",\n    "PlaceImageUrl": "https://www.fremontstreetexperience.com/media/images/hero-images/fremont-street-experience-hero-mobile.jpg",\n    "GeoCoordinates": "36.1699, -115.1424",\n    "TicketPricing": "Free",\n    "Rating": "4.5/5",\n    "TimeTravel": "Evening"\n  },\n  {\n    "PlaceName": "Heart Bar at The D",\n    "PlaceDetails": "Enjoy drinks and live music at this popular bar on Fremont Street.",\n    "PlaceImageUrl": "https://www.theheartbar.com/media/images/hero-images/the-heart-bar-hero-mobile.jpg",\n    "GeoCoordinates": "36.1699, -115.1424",\n    "TicketPricing": "N/A",\n    "Rating": "4.0/5",\n    "TimeTravel": "Late evening"\n  }\n]\n```\n\n**Day 2:**\n\n```json\n[\n  {\n    "PlaceName": "Hoover Dam",\n    "PlaceDetails": "Take a day trip to the iconic Hoover Dam, a marvel of engineering and a stunning landmark. Explore the dam, learn about its history, and enjoy panoramic views.",\n    "PlaceImageUrl": "https://www.nps.gov/hoba/planyourvisit/images/hoover-dam-exterior.jpg",\n    "GeoCoordinates": "36.0034, -114.8974",\n    "TicketPricing": "$30-$40 (optional tour)",\n    "Rating": "4.5/5",\n    "TimeTravel": "Morning"\n  },\n  {\n    "PlaceName": "Bellagio Conservatory & Botanical Garden",\n    "PlaceDetails": "Experience a free, stunning display of floral artistry at this renowned botanical garden.",\n    "PlaceImageUrl": "https://www.bellagio.com/content/dam/bellagio/casino-resort/amenities/conservatory/conservatory-gardens.jpg",\n    "GeoCoordinates": "36.1143, -115.1745",\n    "TicketPricing": "Free",\n    "Rating": "4.5/5",\n    "TimeTravel": "Afternoon"\n  },\n  {\n    "PlaceName": "Fountains of Bellagio",\n    "PlaceDetails": "Witness the spectacular choreographed water and light show at the Bellagio fountains.",\n    "PlaceImageUrl": "https://www.bellagio.com/content/dam/bellagio/casino-resort/amenities/fountains/fountains-show.jpg",\n    "GeoCoordinates": "36.1143, -115.1745",\n    "TicketPricing": "Free",\n    "Rating": "4.5/5",\n    "TimeTravel": "Evening"\n  }\n]\n```\n\n**Day 3:**\n\n```json\n[\n  {\n    "PlaceName": "Las Vegas Strip",\n    "PlaceDetails": "Explore the famous Las Vegas Strip, home to iconic casinos, hotels, and entertainment venues.",\n    "PlaceImageUrl": "https://www.visitlasvegas.com/media/images/hero-images/las-vegas-strip-hero-mobile.jpg",\n    "GeoCoordinates": "36.1096, -115.1729",\n    "TicketPricing": "N/A",\n    "Rating": "5/5",\n    "TimeTravel": "Morning"\n  },\n  {\n    "PlaceName": "Linq Promenade",\n    "PlaceDetails": "Enjoy a stroll down this pedestrian-friendly promenade with shops, restaurants, and entertainment options.",\n    "PlaceImageUrl": "https://www.linq.com/media/images/hero-images/linq-promenade-hero-mobile.jpg",\n    "GeoCoordinates": "36.1043, -115.1735",\n    "TicketPricing": "N/A",\n    "Rating": "4.0/5",\n    "TimeTravel": "Afternoon"\n  },\n  {\n    "PlaceName": "High Roller Observation Wheel",\n    "PlaceDetails": "Enjoy panoramic views of Las Vegas from this massive observation wheel.",\n    "PlaceImageUrl": "https://www.caesars.com/linq/things-to-do/high-roller-observation-wheel.html",\n    "GeoCoordinates": "36.1045, -115.1734",\n    "TicketPricing": "$30-$40",\n    "Rating": "4.5/5",\n    "TimeTravel": "Evening"\n  }\n]\n```\n\n**Note:** This itinerary is a suggestion and can be customized based on your interests and preferences. Consider booking tickets in advance for popular attractions to ensure availability.\n\n**Tips for a Cheap Budget:**\n\n* **Stay off the Strip:** Consider hotels outside the Strip for more affordable options.\n* **Eat at off-peak hours:** Enjoy meals during happy hour or later at night for cheaper prices.\n* **Take advantage of free activities:** Explore the Strip\'s free attractions, like the fountains at Bellagio and the Fremont Street Experience.\n* **Pack your own snacks and drinks:** Save money by bringing snacks and beverages instead of buying them at the resort.\n* **Utilize public transportation:** The Las Vegas Monorail and local buses are affordable options for getting around.\n* **Look for deals and discounts:** Check for hotel packages, show tickets, and attraction discounts online or at visitor centers.\n',
        },
      ],
    },
  ],
});

