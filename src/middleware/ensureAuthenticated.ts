import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    
    if(!authToken){
        throw {status: 401, message: "Token inválido"};
    }

    const [, token] = authToken.split(" ");

    try{
        const { sub } = verify(token, process.env.JWT_SECREAT) as IPayload;

        req.user_id = sub;
        return next();
    }
    catch(err) {
        throw {status: 401, message: "Token inválido"};
    }

   
}