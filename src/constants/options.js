export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "👤",
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loveing adventurers",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🍻",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💴",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

// export const AI_PROMPT =
//   "Generate a detailed travel plan for {location}, for {totalDays} days for {noOfPeople} people with a {budget} budget. Please provide a single JSON object that includes a list of 4 hotel options with their HotelName, HotelAddress, Price(in INR Indian Currency), HotelImageURL, GeoCoordinates, Rating, and Descriptions. Additionally, suggest an itinerary for each day (for 3 days), including details for each place such as PlaceName, PlaceDetails, PlaceImageURL, GeoCoordinates, TicketPricing, Rating, TimeTravel between locations, and the best time to visit.";


export const AI_PROMPT = 
  "Generate a {responseType} for {location}, for {totalDays} days for {noOfPeople} people with a {budget} budget. Please provide a single JSON object with relevant details. " +
  "If {responseType} is 'hotels', return a list of 4 hotel options including HotelName, HotelAddress, Price(in INR), HotelImageURL, GeoCoordinates, Rating, and Description. " +
  "If {responseType} is 'itinerary', return a detailed day-wise itinerary (for up to 3 days) including PlaceName, PlaceDetails, PlaceImageURL, GeoCoordinates, TicketPricing, Rating, TimeTravel between locations, and the best time to visit.";
