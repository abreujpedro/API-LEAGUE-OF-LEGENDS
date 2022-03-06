import { Request, Response } from "express";
import { GetChampsService } from "../services/GetChampsService";

class GetChampController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const champ_name = `${request.query.champName}`;
    const service = new GetChampsService();

    const result =
      Object.keys(request.query).length === 0
        ? await service.execute(user_id)
        : await service.execute(user_id, champ_name);
    return response.json(result);
  }
}

export { GetChampController };
