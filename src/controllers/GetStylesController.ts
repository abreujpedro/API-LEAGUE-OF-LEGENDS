import {Request, Response} from 'express';
import { GetStylesService } from '../services/GetStylesService';

class GetStylesController {
    async handle(request: Request, response: Response) {
        const service = new GetStylesService();

            const result = await service.execute();
            return response.json(result);
        
    }
}

export {GetStylesController}