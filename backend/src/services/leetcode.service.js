const axios = require("axios");

const LEETCODE_API = "https://leetpulse-api.vercel.app/api/leetcode/solved";

async function getLeetCodeStats(username) {
  if (!username) {
    throw new Error("LeetCode username is not configured");
  }

  try {
    const response = await axios.get(
      `${LEETCODE_API}/${encodeURIComponent(username)}`,
      { timeout: 15000 },
    );

    const data = response.data;

    console.log("LeetCode solved stats:", data);

    const stats = data?.data ?? data;

    const total = Number(stats?.solvedProblem ?? stats?.totalSolved);

    if (!Number.isFinite(total)) {
      throw new Error("LeetCode API did not return solved-problem statistics");
    }

    const easy = Number(stats.easySolved ?? stats.easy ?? 0);
    const medium = Number(stats.mediumSolved ?? stats.medium ?? 0);
    const hard = Number(stats.hardSolved ?? stats.hard ?? 0);

    return {
      username,
      total,
      easy,
      medium,
      hard,
      acceptance: "—",
      ranking: "—",
      contests: "—",
    };
  } catch (error) {
    console.error("LeetCode request failed:", {
      status: error.response?.status,
      response: error.response?.data,
      message: error.message,
    });

    throw error;
  }
}

module.exports = { getLeetCodeStats };
