const axios = require("axios");

const LEETCODE_API =
    "https://alfa-leetcode-api.onrender.com";


async function getLeetCodeStats(username) {

    if (!username) {

        throw new Error(
            "LeetCode username is not configured"
        );

    }


    const response = await axios.get(
        `${LEETCODE_API}/${username}/solved`,
        {
            timeout: 10000
        }
    );


    const data =
        response.data;


    if (
        !data ||
        typeof data.solvedProblem === "undefined"
    ) {

        throw new Error(
            "Invalid response from LeetCode statistics API"
        );

    }


    return {

        username,

        total: Number(
            data.solvedProblem
        ),

        easy: Number(
            data.easySolved || 0
        ),

        medium: Number(
            data.mediumSolved || 0
        ),

        hard: Number(
            data.hardSolved || 0
        )

    };

}


module.exports = {
    getLeetCodeStats
};