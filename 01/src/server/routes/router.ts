import { Router } from "express";
import { empresaControllers } from "../controllers/empresas";
// import { err } from "../shared/middlewares";

const router = Router();

router.get("/empresas/:dominioEmpresa", empresaControllers.get);

// router.use(err.errors);

export { router };
