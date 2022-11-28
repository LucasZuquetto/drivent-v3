import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  // try {
  //const ticketTypes = await ticketService.getTicketTypes();

  //return res.status(httpStatus.OK).send(ticketTypes);
  //} catch (error) {
  //Sreturn res.sendStatus(httpStatus.NO_CONTENT);
  //}
  return; 
}
