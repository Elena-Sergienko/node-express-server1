import { Router } from 'express';
import info from './info';
const router = Router();

router.post('/', info);


export default router;