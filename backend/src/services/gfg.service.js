const axios = require("axios");

const GFG_API =
    "https://gfg-stats.tashif.codes";

async function getGfgStats(username) {

    if (!username) {

        throw new Error(
            "GFG username is not configured"
        );

    }

    const response = await axios.get(
        `${GFG_API}/${username}/stats`,
        {
            timeout: 10000
        }
    );

    const data =
        response.data;

    if (
        data.status !== "success" ||
        !data.data
    ) {

        throw new Error(
            "Failed to fetch GFG statistics"
        );

    }

    const difficulty =
        data.data.byDifficulty || {};

    return {

        username,

        total: Number(
            data.data.totalSolved || 0
        ),

        school: Number(
            difficulty.school || 0
        ),

        basic: Number(
            difficulty.basic || 0
        ),

        easy: Number(
            difficulty.easy || 0
        ),

        medium: Number(
            difficulty.medium || 0
        ),

        hard: Number(
            difficulty.hard || 0
        )

    };

}

module.exports = {
    getGfgStats
};