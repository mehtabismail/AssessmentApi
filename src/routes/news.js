const express = require("express");
const router = express.Router();
const {
  getArticles,
  searchArticles,
  searchByKeywords,
} = require("../utils/gnewsService");
const cache = require("../utils/cacheService");

// Fetch N news articles
router.get("/", cache, async (req, res) => {
  const limit = req.query.limit || 10;
  try {
    const articles = await getArticles(limit);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search by title or author
router.get("/search", cache, async (req, res) => {
  const { title, author } = req.query;
  try {
    const articles = await searchArticles(title, author);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search by keywords
router.get("/keywords", cache, async (req, res) => {
  const { q } = req.query;
  try {
    const articles = await searchByKeywords(q);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
