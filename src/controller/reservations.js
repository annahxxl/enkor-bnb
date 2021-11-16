import * as reservationsRepository from "../model/reservations.js";
import * as housesRepository from "../model/houses.js";

export async function addReservation(req, res, next) {
  const { userId } = req;
  const houseId = parseInt(req.query.houseId);
  const house = await housesRepository.findById(houseId);
  if (!house) {
    return res.status(404).json({
      success: false,
      message: "존재하지 않는 매물입니다.",
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
