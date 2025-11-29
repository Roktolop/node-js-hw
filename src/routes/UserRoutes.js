import { celebrate } from "celebrate";
import { Router } from "express";
import { requestResetEmailSchema } from "../validations/authValidation.js";
import { requestResetEmail } from "../controllers/authController.js";

const router = Router();

router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail);

export default router;
