import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { verifyOwner } from "../middleware/profile.js";
import { getConnections } from "../controllers/connections.js";

const router = express.Router();

router.get("/view/:email", verifyToken, verifyOwner, getConnections);

export default router;
