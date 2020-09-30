import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';

const router = Router();

router.post('/', userRegister); // POST: localhost:5002/user
router.get('/', userGetAll); // GET: localhost:5002/user
router.get('/:userId', userGetById); // GET: localhost:5002/user/989998...
router.get('/:userId', userUpdateById); // PATCH: localhost:5002/user/9899898...


export default router;