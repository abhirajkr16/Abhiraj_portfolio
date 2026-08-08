# 🚀 Portfolio Coding Statistics API

Hey there! Welcome to the companion backend service for the developer portfolio. 

This is a lightweight **Node.js** and **Express** microservice designed to fetch, cache, and serve real-time coding statistics from your **LeetCode** and **GeeksforGeeks (GFG)** profiles. Rather than keeping your profile counts manually updated or hardcoding them in the frontend, this API acts as a dynamic source of truth.

---

## 💡 Why This Backend Exists

1. **Real-time Statistics**: Automatically fetches your latest solved counts, accepting difficulty breakdowns dynamically.
2. **Aggressive Cache Control**: Public platforms like LeetCode and GFG can be sensitive to aggressive scraping or frequent requests. We implemented an in-memory caching system with a Time-To-Live (TTL) configuration (default 5 minutes) to ensure fast load times and prevent API rate-limiting or blocking.
3. **Secure CORS Configuration**: Configured with a clean origin whitelist to ensure only your trusted portfolio URLs (local and deployed) can request statistics from the server.

---

## 📂 Project Structure

Here is a breakdown of the directories and files within the `backend` folder:

```text
backend/
├── .env                  # Configuration variables (Port, Usernames, Cache TTL)
├── .gitignore            # Files to ignore (e.g., node_modules, local secrets)
├── package.json          # Node.js manifest with project scripts and dependencies
├── README.md             # This helper documentation
└── src/
    ├── app.js            # Express application bootstrapper (CORS, JSON parser, and routes)
    ├── server.js         # Port listener that starts up the HTTP server
    ├── cache/
    │   └── coding.cache.js # Simple in-memory cache helper with TTL checks
    ├── config/
    │   └── env.js        # Reserved for future environment variable validation
    ├── controllers/
    │   └── coding.controller.js # Route handler functions (logic for getting/refreshing stats)
    ├── middleware/
    │   └── error.middleware.js  # Global Express error handler placeholder
    ├── routes/
    │   └── coding.routes.js     # Route paths mapped to controller functions
    ├── services/
    │   ├── coding.service.js    # Service layer that coordinates caching and fetches
    │   ├── gfg.service.js       # Dynamic API consumer for GeeksforGeeks stats
    │   └── leetcode.service.js  # Dynamic API consumer for LeetCode stats
    └── utils/
        └── response.js          # Reserved for standardized JSON response templates
```

---

## 🛠️ Setup & Local Development

Getting the backend running locally is straightforward.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (tested on Node.js v20+).

### 2. Environment Configuration
Create a `.env` file in the root of the `backend` folder (or update the existing one) with the following structure:

```env
PORT=5000
FRONTEND_URL=http://127.0.0.1:5501
LEETCODE_USERNAME=your_leetcode_username
GFG_USERNAME=your_gfg_username
CODING_CACHE_TTL=300
```
* `PORT`: The local port you want your server to listen on.
* `LEETCODE_USERNAME` / `GFG_USERNAME`: The profile identifiers you want to fetch stats for.
* `CODING_CACHE_TTL`: Cache duration in seconds (e.g. `300` for 5 minutes).

### 3. Installation
Install the project dependencies (Express, Axios, CORS, Dotenv, and nodemon):

```bash
npm install
```

### 4. Running the App
* **Development Mode** (uses `nodemon` to auto-restart the server on file edits):
  ```bash
  npm run dev
  ```
* **Production Mode**:
  ```bash
  npm start
  ```

---

## 📡 API Endpoints

Once your server is running (e.g., at `http://localhost:5000`), you can query the following routes:

### 🟢 `GET /api/coding`
Fetches the consolidated coding statistics. Returns cached data if available; otherwise, makes a fresh call to the profile providers and updates the cache.

* **Response Format:**
```json
{
  "success": true,
  "data": {
    "leetcode": {
      "username": "abhirajkr16",
      "total": 161,
      "easy": 48,
      "medium": 97,
      "hard": 16
    },
    "gfg": {
      "username": "abhirajeawp",
      "total": 94,
      "school": 0,
      "basic": 0,
      "easy": 38,
      "medium": 45,
      "hard": 11
    },
    "summary": {
      "totalSolved": 255,
      "goal": 500
    },
    "lastUpdated": "2026-08-08T13:00:00.000Z"
  }
}
```

### 🟡 `POST /api/coding/refresh`
Manually clears the cached stats and forces the backend to fetch fresh data from the providers.

### 🔵 `GET /api/health`
Simple check-in route to verify the API is up and running.
