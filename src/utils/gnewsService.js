const axios = require("axios");
require("dotenv").config();

const GNEWS_API_KEY = "314e3261ae8cac780acc44ea532626fb";
const BASE_URL = "https://gnews.io/api/v4";

async function getArticles(limit = 10) {
  const url = `${BASE_URL}/top-headlines?token=${GNEWS_API_KEY}&max=${limit}&lang=en`;
  const { data } = await axios.get(url);
  return data.articles;
}

async function searchArticles(title, author) {
  let q = "";
  if (title) q += title;
  if (author) q += ` ${author}`;
  const url = `${BASE_URL}/search?token=${GNEWS_API_KEY}&q=${encodeURIComponent(
    q
  )}&lang=en`;
  const { data } = await axios.get(url);
  return data.articles;
}

async function searchByKeywords(q) {
  const url = `${BASE_URL}/search?token=${GNEWS_API_KEY}&q=${encodeURIComponent(
    q
  )}&lang=en`;
  const { data } = await axios.get(url);
  return data.articles;
}

module.exports = { getArticles, searchArticles, searchByKeywords };
