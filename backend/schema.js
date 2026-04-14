const Joi = require('joi');

module.exports.companySchema = Joi.object({
    company_name: Joi.string().required().trim(),
    company_logo: Joi.string().uri().optional().trim().allow(null)
});

module.exports.ipoSchema = Joi.object({
    ipo_date: Joi.date().required(),
    company_id: Joi.string().required().trim(),
    ipo_price: Joi.number().required(),
    ipo_shares: Joi.number().required(),
    ipo_status: Joi.string().valid('upcoming', 'open', 'closed').required(),
    ipo_description: Joi.string().optional().trim().allow('')
});