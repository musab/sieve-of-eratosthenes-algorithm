import express from 'express';
import { eratosthenes } from './calc/eratosthenes';
import { getMedian } from './calc/getMedian';

const router = express.Router();

router.get('/median-prime/:userNumber', (req, res, next) => {
  const { userNumber } = req.params;

  if (Boolean(Number(userNumber))) {
    try {
      let median;
      const primeSet = eratosthenes(userNumber);
      if (primeSet.length) {
        median = getMedian(primeSet);
      }

      res.json({ median });
    } catch (error) {
      err.statusCode = 500;
      next(err);
    }
  } else {
    let err = new Error(`Bad Request`);
    err.statusCode = 400;
    next(err);
  }
});

export default router;
