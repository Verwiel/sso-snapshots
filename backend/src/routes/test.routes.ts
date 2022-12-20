import { Router } from 'express';
import { testServer } from '../controllers/test.controller';

// const router = Router();

module.exports = function(app: Router) {
  app.get('/test', testServer);
};
