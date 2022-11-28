import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";

async function getAllHotels() {
  const hotels = await hotelsRepository.findHotels();
  return hotels;
}

const hotelsService = { getAllHotels };

export default hotelsService;
