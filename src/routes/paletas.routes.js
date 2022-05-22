import { Router } from "express";
import PaletaControllers from "../controllers/paletas.controller";
import verifyIdPaletaMiddleware from "../middlewares/verifyIdPaletaMiddleware";
import verifyPaletasDataMiddleware from "../middlewares/verifyPaletasDataMiddleware";

const route = Router();
const paletasController = new PaletaControllers();

route.get("/get-all-paletas", paletasController.getAllPaletas);
route.get(
  "/get-paleta/:id",
  verifyIdPaletaMiddleware,
  paletasController.getPaletasById
);
route.post(
  "/createPaleta",
  verifyPaletasDataMiddleware,
  paletasController.createPaleta
);
route.put(
  "/updatePaleta/:id",
  verifyIdPaletaMiddleware,
  verifyPaletasDataMiddleware,
  paletasController.updatePaleta
);
route.delete(
  "/deletePaleta/:id",
  verifyIdPaletaMiddleware,
  paletasController.deletePaleta
);

export default route;
