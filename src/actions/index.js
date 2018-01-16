import axios from 'axios';

const API_KEY = 'f2563f6561e430b407cfb037640ce76e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    //ReduxPromise stops the action entirely if the payload property is a promise
    //Once the promise resolves, it dispatches an action with the same type, and a payload with data we can use
    payload: request
  };
}
