export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  let apiKey = process.env.AMBIENT_WEATHER_API_KEY;
  let applicationKey = process.env.AMBIENT_WEATHER_APPLICATION_KEY;
  let URL = 'https://api.ambientweather.net/v1/devices/'
  let weatherData;
  let weatherResponse = {
    error: true,
    message: '',
    data: {}
  }

  if (!apiKey || !applicationKey) {
    return Response.json({...weatherResponse, message: 'API keys not configured.'});
  }

  let response = await fetch(`${URL}?apiKey=${apiKey}&applicationKey=${applicationKey}`, { cache: 'no-store' });
  
  if (response.ok) {
    weatherData = await response.json();

    return Response.json({...weatherResponse, error: false, data: weatherData[0]});
  }

  return Response.json({...weatherResponse, message: 'No response from AmbientWeather.'});
}