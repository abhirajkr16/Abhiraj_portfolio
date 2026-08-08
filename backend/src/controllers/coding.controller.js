const {
    getCodingStatistics
} = require("../services/coding.service");

const {
    clearCodingCache
} = require("../cache/coding.cache");


async function getCodingStats(req, res, next) {

    try {

        const data =
            await getCodingStatistics();

        res.json({
            success: true,
            data
        });

    } catch (error) {

        next(error);

    }

}


async function refreshCodingStats(req, res, next) {

    try {

        clearCodingCache();

        const data =
            await getCodingStatistics();

        res.json({
            success: true,
            data
        });

    } catch (error) {

        next(error);

    }

}


module.exports = {

    getCodingStats,

    refreshCodingStats

};