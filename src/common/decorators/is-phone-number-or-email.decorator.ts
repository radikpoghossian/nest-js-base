import {
  isEmail,
  isPhoneNumber,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function IsPhoneNumberOrEmail(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isPhoneNumberOrEmail',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isEmail(value) || isPhoneNumber(value);
        },
      },
    });
  };
}
