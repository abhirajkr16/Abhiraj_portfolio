const axios = require("axios");

const GFG_API = "https://gfg-stats.tashif.codes";

async function getGfgStats(username) {
  if (!username) {
    throw new Error("GFG username is not configured");
  }

  try {
    const response = await axios.get(
      `${GFG_API}/${encodeURIComponent(username)}/stats`,
      { timeout: 15000 },
    );

    const data = response.data;

    console.log("GFG API response:", data);

    if (data.status !== "success" || !data.data) {
      throw new Error("Invalid response from GFG statistics API");
    }

    const stats = data.data;
    const difficulty = stats.byDifficulty || {};

    return {
      username,
      total: Number(stats.totalSolved || 0),
      easy: Number(difficulty.easy || 0),
      medium: Number(difficulty.medium || 0),
      hard: Number(difficulty.hard || 0),
    };
  } catch (error) {
    console.error("GFG request failed:", {
      status: error.response?.status,
      response: error.response?.data,
      message: error.message,
    });

    throw error;
  }
}

module.exports = { getGfgStats };
