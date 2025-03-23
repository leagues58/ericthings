export const dynamic = "force-dynamic";

import getWeatherData from "./getWeatherData";

export async function GET(request: Request) {
  let data = await getWeatherData();

  return Response.json(data);
}