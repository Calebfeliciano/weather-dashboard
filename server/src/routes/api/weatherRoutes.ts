import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

router.post('/', async (req: Request, res: Response) => {
  try {
    const cityName = req.body.cityName;

    const data = await WeatherService.getWeatherForCity(cityName);
    await HistoryService.addCity(cityName);

    res.json(data);
  } catch (error: any) {
    console.error('Error in /api/weather:', error.message || error);
    res.status(404).json({ error: 'City not found' });
  }
});

router.get('/history', async (_req: Request, res: Response) => {
  try {
    const cities = await HistoryService.getCities();
    res.json(cities);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ error: 'City ID is required' });
      return;
    }

    await HistoryService.removeCity(req.params.id);
    res.json({ success: 'Removed city from search history' });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
