import hotelsRepository from "@/repositories/hotels-repository";
import { notFoundError } from "@/errors";

async function getAllHotels() {
  const hotels = await hotelsRepository.findHotels();
  return hotels;
}

async function getRoomsByHotelId(hotelId: number) {
  if(isNaN(hotelId)) {
    throw notFoundError;
  }
  const rooms = await hotelsRepository.findRoomsByHotelId(hotelId);
  return rooms;
}

const hotelsService = { getAllHotels, getRoomsByHotelId };

export default hotelsService;
