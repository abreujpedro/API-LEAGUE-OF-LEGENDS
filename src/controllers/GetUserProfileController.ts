import {Request, Response} from 'express';
import { GetUserProfileService } from '../services/GetUserProfileService';

class GetUserProfileController {
    async handle(request: Request, response: Response) {
        const {user_id} = request;
        const service = new GetUserProfileService();

            const result = await service.execute(user_id);
            return response.json(result);
        
    }
}

export {GetUserProfileController}