import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.send('Server is up and running');
});

export default router;
