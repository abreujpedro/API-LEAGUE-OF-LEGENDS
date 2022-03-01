import {Request, Response} from 'express';
import { GetFavoritesChampService } from '../services/GetFavoritesChampService';

class GetFavoritesChampController {
    async handle(request: Request, response: Response) {
        const {user_id} = request;
        const service = new GetFavoritesChampService();

            const result = await service.execute(user_id);
            return response.json(result);
        
    }
}

export {GetFavoritesChampController}