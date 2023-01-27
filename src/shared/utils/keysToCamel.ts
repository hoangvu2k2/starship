import { isArray, isObject } from 'lodash';

export function toCamel(value: string) {
  return value.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}

export function keysToCamel(data: any): any {
  if (isArray(data)) {
    return data.map((object) => keysToCamel(object));
  } else if (isObject(data)) {
    const object = {};

    Object.keys(data).forEach((key) => {
      object[toCamel(key)] = keysToCamel(data[key]);
    });

    return object;
  }

  return data;
}
