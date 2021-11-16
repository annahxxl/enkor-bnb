import * as housesRepository from "../model/houses.js";

export async function getAllHouse(req, res, next) {
  const houses = await housesRepository.findAllHouse();
  res.status(200).json({
    success: true,
    data: houses,
  });
}

export async function getHouse(req, res, next) {
  const { id } = req.params;
  const house = await housesRepository.findHouseById(id);
  res.status(200).json({
    success: true,
    data: [house],
  });
}
