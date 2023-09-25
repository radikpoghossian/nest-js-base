import { IValidationErrors } from '@common/models';
import { ValidationError } from 'class-validator';
import { snakeCase } from 'lodash';

export function validationHandler(
  errors: ValidationError[],
  prop: string = null,
): IValidationErrors[] {
  const parentProp = prop ? `${snakeCase(prop)}.` : '';
  const errorResponse: IValidationErrors[] = [];

  for (const e of errors) {
    if (e.constraints) {
      const constraintKeys = Object.keys(e.constraints);
      for (const item of constraintKeys) {
        errorResponse.push({
          field: e.property,
          message: `err_${parentProp}${e.property.toLowerCase()}_${snakeCase(
            item,
          )}`,
        });
      }
    }
  }

  return errorResponse;
}
