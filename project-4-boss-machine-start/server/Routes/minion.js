import express from "express"
import { createMinion, deleteMinionById, getAllMinions, getMinionById, updateMinionById } from "../Controller/minionRoutes.js"
import { validateMinion } from "../Middleware/minion.js";

const apiRouter = express.Router();


apiRouter.get('/minions', getAllMinions)
apiRouter.post('/minions', createMinion)
apiRouter.get('/minions/:minionId', validateMinion, getMinionById)
apiRouter.put('/minions/:minionId',validateMinion, updateMinionById)
apiRouter.delete('/minions/:minionId',validateMinion, deleteMinionById)

export default apiRouter;
