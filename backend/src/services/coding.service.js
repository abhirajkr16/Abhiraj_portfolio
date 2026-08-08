const {
    getCodingCache,
    setCodingCache
} = require("../cache/coding.cache");

const {
    getLeetCodeStats
} = require("./leetcode.service");

const {
    getGfgStats
} = require("./gfg.service");

async function getCodingStatistics() {

    const cachedData =
        getCodingCache();

    if (cachedData) {

        console.log(
            "Returning coding statistics from cache"
        );

        return cachedData;

    }


    console.log(
        "Fetching fresh coding statistics"
    );


    const leetcode =
        await getLeetCodeStats(
            process.env.LEETCODE_USERNAME
        );


    const gfg =
        await getGfgStats(
            process.env.GFG_USERNAME
        );


    const data = {

        leetcode,

        gfg,

        summary: {

            totalSolved:
                leetcode.total +
                gfg.total,

            goal: 500

        },

        lastUpdated:
            new Date().toISOString()

    };


    setCodingCache(data);


    return data;

}

module.exports = {
    getCodingStatistics
};