# Weather App
https://mthapa-weather.netlify.app/

## Summary

This application provides real-time weather information for any city worldwide. Built using Vite and React, it offers a fast and responsive user experience. 

## Features

- **Current Weather:** Get the latest weather updates including temperature, humidity, wind speed, and more.
- **Forecast:** View the weather forecast for the next few days.
- **Search Functionality:** Easily search for weather information by city name or geographic coordinates.
- **Geolocation:** Automatically fetch weather data for your current location.
- **Responsive Design:** Optimized for use on both desktop and mobile devices.

## Technologies Used

- **Vite:** A next-generation frontend tooling for fast builds and development.
- **React:** A JavaScript library for building user interfaces.
- **Luxon:** A powerful, modern JavaScript library for working with dates and times.
- **React Icons:** A collection of popular icons as React components.
- **React Toastify:** A library to add notifications to your React app with ease.
- **API Integration:** Utilizes a weather API to fetch real-time weather data.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:

   ```sh
   cd weather-app
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

### Running the App

To start the development server:

```sh
npm run dev
```

or

```sh
yarn dev
```

Open your browser and go to `http://localhost:3000` or the default port to see the app in action.

## Usage

- **Search for a City:** Use the search bar to find weather information for a specific city.
- **Current Location:** Click the "Use my location" button to fetch weather data for your current location.
- **View Forecast:** Navigate through the app to see detailed weather forecasts.

## Configuration

To connect the app to a weather API, you need to add your API key. Create a `.env` file in the root directory and add the following:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual API key.

---

Thank you for using the Weather App! If you have any questions or feedback, feel free to reach out.
