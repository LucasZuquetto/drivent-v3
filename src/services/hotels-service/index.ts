import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";

async function getAllHotels() {
  const hotels = await hotelsRepository.findHotels();
  return hotels;
}

async function getRoomsByHotelId(hotelId: number) {
  const rooms = await hotelsRepository.findRoomsByHotelId(hotelId);
  return rooms;
}

const hotelsService = { getAllHotels, getRoomsByHotelId };

export default hotelsService;
