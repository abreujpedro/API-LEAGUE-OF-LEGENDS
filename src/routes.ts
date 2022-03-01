import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateChampController } from "./controllers/CreatChampController";
import { GetChampController } from "./controllers/GetChampController";
import { GetFavoritesChampController } from "./controllers/GetFavoritesChampController";
import { GetStylesController } from "./controllers/GetStylesController";
import { GetTopChampController } from "./controllers/GetTopChampController";
import { GetUserProfileController } from "./controllers/GetUserProfileController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/champs',ensureAuthenticated, new CreateChampController().handle)

router.get('/profile',ensureAuthenticated, new GetUserProfileController().handle)

router.get('/champs',ensureAuthenticated, new GetChampController().handle)

router.get('/champsfavorite',ensureAuthenticated, new GetFavoritesChampController().handle)

router.get('/categories', new GetStylesController().handle)

router.get('/lasttopchamps',ensureAuthenticated, new GetTopChampController().handle)

export{router}