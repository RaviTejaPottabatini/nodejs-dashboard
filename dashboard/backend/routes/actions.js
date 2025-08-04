import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await pool.query("SELECT * FROM actions ORDER BY due ASC");
    res.json(actions.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { task, priority, due, project_id } = req.body;
    const newAction = await pool.query(
      "INSERT INTO actions (task, priority, due, project_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [task, priority, due, project_id]
    );
    res.json(newAction.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
