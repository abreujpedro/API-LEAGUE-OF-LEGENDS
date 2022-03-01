import {Request, Response} from 'express';
import { GetChampsService } from '../services/GetChampsService';

class GetChampController {
    async handle(request: Request, response: Response) {
        const {user_id} = request;
        const service = new GetChampsService();

            const result = await service.execute(user_id);
            return response.json(result);
        
    }
}

export {GetChampController}