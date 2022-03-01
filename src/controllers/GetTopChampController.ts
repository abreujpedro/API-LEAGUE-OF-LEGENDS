import {Request, Response} from 'express';
import { GetTopChampService } from '../services/GetTopChampService';

class GetTopChampController {
    async handle(request: Request, response: Response) {
        const {user_id} = request;
        const service = new GetTopChampService();

            const result = await service.execute(user_id);
            return response.json(result);
        
    }
}

export {GetTopChampController}