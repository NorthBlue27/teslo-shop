/* eslint-disable prettier/prettier */
import * as Joi from 'joi';

// CREA LAS VARIABLES Y SI NO SE TIENE VALOR YA ESTABLECIDO, SE ASIGNA UNO
export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
});
