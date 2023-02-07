import { Router } from "express";
import { empresaControllers } from "../controllers";
import { localizacao } from "../controllers/geolocalizador/Get";
// import { err } from "../shared/middlewares";

const router = Router();

router.get("/empresas/:dominioEmpresa", empresaControllers.get);
router.get("/ipLocalizacao/:ip", localizacao)

// router.use(err.errors);

export { router };
