import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  PORT: Joi.number().default(5000),
  ENVIRONMENT: Joi.string()
    .valid('development', 'staging', 'production', 'local', 'AWS')
    .default('development'),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USER: Joi.string().default('postgres'),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DB_SYNC: Joi.boolean().default(false),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_ON: Joi.string().required(),
});
