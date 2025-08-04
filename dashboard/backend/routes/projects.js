import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await pool.query("SELECT * FROM projects");
    res.json(projects.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
