import { Router } from 'express';
import controller from '../controllers/professional';

const router = Router();

//if we hit this route: localhost:8080/professional/, then call a funtion in the controller folder (professional is the url)
router.get('/', controller.getData);

export default router;
