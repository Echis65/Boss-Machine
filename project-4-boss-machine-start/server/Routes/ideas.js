import express from 'express';
import { getAllIdeas } from "../Controller/ideaRoutes.js"

const router = express.Router();

router.get('/ideas', getAllIdeas)
export default router;