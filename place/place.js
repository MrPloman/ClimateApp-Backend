const env = require("../config/environment");
const axios = require("axios");

const getPlace = async(address) => {
    const place = encodeURI(address);
    instance = axios.create({
        baseURL: `${env.ENV.API_ENDPOINT}?key=${env.ENV.API_KEY}&q=${place}`,
    });
    const info = await instance
        .get()
        .then((r) => {
            if (r.status === 200) {
                return {
                    place: r.data.location.name,
                    region: r.data.location.region,
                    country: r.data.location.country,
                    coord: { lat: r.data.location.lat, lon: r.data.location.lon },
                    weather: r.data.current,
                };
            }
        })
        .catch((e) => {
            if (e.response.status === 400) {
                return { error: e.response.data.error };
            }
        });
    return await info;
};

module.exports = { getPlace };