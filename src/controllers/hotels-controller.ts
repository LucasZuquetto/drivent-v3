import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import hotelsService from "@/services/hotels-service";
import ticketService from "@/services/tickets-service";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const ticket = await ticketService.getTicketByUserId(userId);
    if (ticket.TicketType.isRemote === true || ticket.TicketType.includesHotel === false || ticket.status !== "PAID") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    const hotels = await hotelsService.getAllHotels();
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
