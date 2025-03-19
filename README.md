# 🌍 JourneyMate

![JourneyMate Logo](https://img.shields.io/badge/JourneyMate-Travel%20Smarter-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC)
![Firebase](https://img.shields.io/badge/Firebase-9.x-FFA000)

## ✨ Overview

**JourneyMate** is an AI-powered travel itinerary generator that creates personalized travel plans based on your preferences. Whether you're traveling solo, as a couple, with family, or friends, JourneyMate takes care of the planning hassle so you can focus on enjoying your journey.

### 🚀 Features

- **Personalized Itineraries**: Custom travel plans based on your destination, duration, budget, and travel group
- **Google Authentication**: Secure and quick sign-in with your Google account
- **Budget-Friendly Options**: Choose between economy, moderate, or luxury travel experiences
- **Interactive Maps**: Visualize your journey with integrated MapplsAPI
- **AI-Powered Recommendations**: Curated suggestions powered by Gemini AI
- **Responsive Design**: Seamless experience across all devices

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend/Authentication**: Firebase
- **AI Integration**: Gemini API
- **Maps**: MapplsAPI
- **Authentication**: Google Auth

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Account
- API Keys:
  - Firebase
  - Gemini AI
  - MapplsAPI

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rahuldewangan05/JourneyMate.git
cd JourneyMate
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment Setup**

Create a `.env` file in the root directory with the following variables:

```env
VITE_GOOGLE_PLACE_API_KEY=your_google_place_api_key_here
VITE_MAPPLE_API_KEY=your_mapple_api_key_here
VITE_MAPPLE_BEARER_TOKEN=your_mapple_bearer_token_here
VITE_GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key_here
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id_here
```

4. **Run the application**

```bash
npm start
# or
yarn start
```

5. **Open your browser**

Navigate to `http://localhost:3000` to see the application running.

## 🔄 Usage Flow

1. **Sign in** with your Google account
2. **Fill in your travel details**:
   - Destination
   - Number of days
   - Budget preference (Economy/Moderate/Luxury)
   - Travel group (Solo/Couple/Family/Friends)
3. **Generate your itinerary** with a single click
4. **Explore** your personalized travel plan with day-by-day activities
5. **View locations** on the interactive map

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
