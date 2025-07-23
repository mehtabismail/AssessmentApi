## News API Service

### Setup

1. Install dependencies:

   npm install

2. Start the server:
   ```bash
   npm run dev
   ```

### API Endpoints

- `GET /news?limit=N` - Fetch N news articles
- `GET /news/search?title=...&author=...` - Find articles by title or author
- `GET /news/keywords?q=...` - Search articles by keywords
