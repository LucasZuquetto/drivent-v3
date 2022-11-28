import { prisma } from "@/config";

async function findHotels() {
  return prisma.hotel.findMany();
}

async function findRoomsByHotelId(id: number) {
  return prisma.hotel.findFirst({
    where: { id },
    include: {
      Rooms: true,
    },
  });
}

const hotelsRepository = { findHotels, findRoomsByHotelId };

export default hotelsRepository;
