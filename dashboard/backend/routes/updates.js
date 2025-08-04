import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const updates = await pool.query("SELECT * FROM updates ORDER BY timestamp DESC");
    res.json(updates.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
