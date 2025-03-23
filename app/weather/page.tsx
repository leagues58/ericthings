import getWeatherData from "app/api/weather/getWeatherData";
import Image from "next/image";

const Weather = async () => {
  let data = await getWeatherData();

  if (data.error) {
    return (
      <div className="flex flex-col items-center">
        <span>Could not retrieve live weather data.</span>
        <span>Error message from service: <span className="text-amber-200">{data.message}</span></span>
        <Image className='m-5' width='100' height={'100'} src={'/img/weatherIcons/strong_tstorms.png'} alt="thunderstorm" />
      </div>
    )
  }

  /*
   "dateutc": 1742734800000,
      "tempf": 45.1,
      "humidity": 82,
      "windspeedmph": 0,
      "maxdailygust": 1.12,
      "winddir": 83,
      "tempinf": 71.4,
      "baromrelin": 29.955,
      "feelsLike": 45.1,
      "date": "2025-03-23T13:00:00.000Z"
      "solarradiation": 104.08,
      "hourlyrainin": 0,
      
      "windgustmph": 0,
      "uv": 1,
      "eventrainin": 0,
      "dailyrainin": 0,
      "weeklyrainin": 0,
      "monthlyrainin": 2.87,
      "yearlyrainin": 8.969,
      "totalrainin": 31.819,
      "battout": 1,
      "humidityin": 32,
      "baromabsin": 29.772,
      "dewPoint": 39.94,
      "feelsLikein": 69.7,
      "dewPointin": 40,
      "lastRain": "2025-03-20T17:02:00.000Z",
      "tz": "America/New_York",
      */
  return (
    <div className="flex flex-col items-center border">
      <span>Weather Display</span>
      <div className="border">
        <div className="border text-5xl">{data.data.lastData.tempf}°</div>
      </div>
    </div>
  )
}

export default Weather;