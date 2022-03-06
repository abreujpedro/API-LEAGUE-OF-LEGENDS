import { Request, Response } from "express";
import { GetFavoritesChampService } from "../services/GetFavoritesChampService";

class GetFavoritesChampController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const champ_name = Object.keys(request.query).includes("champName")
      ? `${request.query.champName}`
      : null;
    const champ_category = Object.keys(request.query).includes("category")
      ? `${request.query.category}`
      : null;
    const service = new GetFavoritesChampService();

    const result = await service.execute(user_id, champ_name, champ_category);
    return response.json(result);
  }
}

export { GetFavoritesChampController };
