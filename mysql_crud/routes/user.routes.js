import express from 'express';
import { addingUser, fetchUsers, fetchUser, updatingUser, deletingUser } from '../controller/user.controller.js'

const router = express.Router();

router.post('/api/users', addingUser)
router.get('/api/users', fetchUsers)
router.get('/api/users/:id', fetchUser)
router.put('/api/users/:id', updatingUser)
router.delete('/api/users/:id', deletingUser)


export default router;