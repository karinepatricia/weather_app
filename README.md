# weather_app

Welcome to the Weather App! This is a simple web application that allows you to check the weather conditions for different cities around the world.

## Features

- Enter a city name to get the current weather details
- Displays temperature, humidity, and wind speed
- Shows weather icons based on the current weather condition

## Technologies Used

- HTML
- CSS
- JavaScript

## API

The app utilizes the OpenWeatherMap API to retrieve weather data. You will need to provide your own API key to make the app work. Please follow the instructions below to set up the API key.

## Setup

1. Clone the repository to your local machine.

2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) by signing up for a free account.

3. Create a file named `config.js` in the root directory of the project.

4. Open the `config.js` file and add the following code:

   ```javascript
   const apikey = "YOUR_API_KEY";
