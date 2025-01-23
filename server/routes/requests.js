import { Router } from "express";
import { getAllRequests, createRequest } from "../db/queries.js";

const router = Router();

// Получение всех заявок
router.get("/", async (req, res) => {
  try {
    const requests = await getAllRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Создание новой заявки
router.post("/", async (req, res) => {
  try {
    const newRequest = await createRequest(req.body);
    res.json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
