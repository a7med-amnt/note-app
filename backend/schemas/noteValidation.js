import joi from "joi";
export const addValidation = joi.object({
    title: joi.string().trim().min(2).max(30).required(),
    content: joi.string().trim().required(),
    tags: joi.array().items(joi.string().trim().min(2).max(10))
});

export const editValidation = joi.object({
    title: joi.string().trim().min(2).max(30).required(),
    content: joi.string().trim().min(2).max(200).required(),
    tags: joi.array().items(joi.string().trim().min(2).max(10))
});
