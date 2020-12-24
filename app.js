const model = require("./models/axis.model.js");
const argv = require("yargs").options(model).argv;
const { getPlace } = require("./place/place");

const app = async() => {
    const placeData = await getPlace(argv.address)
        .then((r) => {
            return r;
        })
        .catch((e) => {
            return e;
        });
    console.log(placeData);
};

app();