const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 }); // 1 minute TTL

module.exports = (req, res, next) => {
  const key = req.originalUrl;
  const cached = cache.get(key);
  if (cached) {
    return res.json(cached);
  } else {
    res.sendResponse = res.json;
    res.json = (body) => {
      cache.set(key, body);
      res.sendResponse(body);
    };
    next();
  }
};
