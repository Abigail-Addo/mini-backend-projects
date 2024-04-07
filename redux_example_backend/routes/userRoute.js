import { Router } from "express";
import { allTicketsByUser, logOut, login, signup } from "../controller/userController.js";
import { authUser } from "../middleware/auth.js";

const router = Router();

router.post('/', signup);
router.post('/login', login);
router.get('/logout', logOut);
router.get('/:id', authUser, allTicketsByUser);

export default router;