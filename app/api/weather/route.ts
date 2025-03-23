import getWeatherData from "./getWeatherData";

export async function GET(request: Request) {
  let data = await getWeatherData();

  return Response.json(data);
}