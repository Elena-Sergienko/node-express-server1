import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';

const router = Router();

router.post('/', userRegister); // POST: localhost:5002/user
router.get('/', userGetAll); // POST: localhost:5002/user


export default router;