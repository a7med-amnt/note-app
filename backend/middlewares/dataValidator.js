const eah = require("express-async-handler");

export default function (schema) {
    return eah(async function (rq, rs, nx) {
        const { error, value } = schema.validate(rq.body);
        if (error) throw error(400, error.details[0].message);
    });
}
