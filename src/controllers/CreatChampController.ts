import { Request, Response } from "express";
import { CreateChampService } from "../services/CreatChampService";

class CreateChampController {
  async handle(request: Request, response: Response) {
    const { name, is_favorite, style_name, picture_url } = request.body;
    const { user_id } = request;
    const service = new CreateChampService();

    const result = await service.execute(
      name,
      user_id,
      is_favorite,
      style_name,
      picture_url
    );
    return response.json(result);
  }
}

export { CreateChampController };
