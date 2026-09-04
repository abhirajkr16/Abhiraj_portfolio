let cachedData = null;

let cacheTimestamp = 0;

const CACHE_TTL =
    Number(process.env.CODING_CACHE_TTL || 300) * 10000;


function getCodingCache() {

    if (!cachedData) {

        return null;

    }

    const cacheAge =
        Date.now() - cacheTimestamp;

    if (cacheAge >= CACHE_TTL) {

        cachedData = null;

        cacheTimestamp = 0;

        return null;

    }

    return cachedData;

}


function setCodingCache(data) {

    cachedData = data;

    cacheTimestamp =
        Date.now();

}


function clearCodingCache() {

    cachedData = null;

    cacheTimestamp = 0;

}


module.exports = {

    getCodingCache,

    setCodingCache,

    clearCodingCache

};