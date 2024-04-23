import eah from "express-async-handler";
import error from "#utils/error.js";
export default function (schema) {
    return eah(async function (rq, rs, nx) {
        const body = rq.body;
        
        console.log(body);
        const { error: validationError, value } = schema.validate(body);
        console.log("Errors", validationError);
        
        if (validationError)
            return nx(error(validationError.details[0].message));
            
        console.log("Value", value);
        rq.validData = value;
        nx();
    });
}
