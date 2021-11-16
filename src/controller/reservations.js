import * as reservationsRepository from "../model/reservations.js";
import * as housesRepository from "../model/houses.js";

export async function addReservation(req, res, next) {
  const {
    userId,
    query: { houseId },
  } = req;
  const house = await housesRepository.findById(houseId);
  if (!houseId || !house) {
    return res.status(400).json({
      success: false,
      message: "잘못된 요청입니다.",
    });
  }
  const reservation = await reservationsRepository.create({
    userId,
    houseId: parseInt(houseId),
  });
  res.status(201).json({
    success: true,
    data: [reservation],
  });
}

export async function getAllReservation(req, res, next) {
  const { userId } = req;
  const reservations = await reservationsRepository.findAllByUserId(userId);
  res.status(200).json({
    success: true,
    data: reservations,
  });
}
