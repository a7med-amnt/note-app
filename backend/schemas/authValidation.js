import joi from "joi";
export const signupValidation = joi.object({
    name: joi.string().trim().min(2).max(20).required(),
    email: joi.string().trim().email().required(),
    password: joi.string().trim().min(5).max(20).required()
});

export const signinValidation = joi.object({
    email: joi.string().trim().email().required(),
    password: joi.string().trim().min(5).max(20).required()
});