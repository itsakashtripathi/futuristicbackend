const Joi = require('joi');

const createRecepieSchema = Joi.object({
    url: Joi.string().uri().min(20).required(),
})

module.exports = {
    createRecepieSchemaValidate: async (req, res, next) => {
        try {
            await createRecepieSchema.validateAsync(req.body);
            next();
        } catch (error) {
            (Joi.isError(error)) ? res.status(422).send({ success: false, data: null, message: error.details[0].message }) : res.status(500).send({ success: false, data: null, message: error.message }) ;
        }
    },
}