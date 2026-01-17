import { Router } from "express";
import { authenticateJWT } from "../middleware/auth.ts";
import { getDashboardFilters } from "../controllers/metadataController.ts";

const router = Router();

router.get(
  "/filters",
  authenticateJWT,
  getDashboardFilters
);

export default router;
