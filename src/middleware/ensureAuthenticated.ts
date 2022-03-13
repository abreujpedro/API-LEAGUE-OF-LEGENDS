import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import CustomEror from "../utils/customEror";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new CustomEror("Token inválido", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECREAT) as IPayload;

    req.user_id = sub;
    return next();
  } catch (err) {
    throw new CustomEror("Token inválido", 401);
  }
}
