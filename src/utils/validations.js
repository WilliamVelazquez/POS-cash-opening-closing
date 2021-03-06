export const isEmptyObject = (obj) => {
  return Object.getOwnPropertyNames(obj).length === 0;
};

export const openingSubmitValidation = (value) => {
  return (!value) || (value === '$' || value === '$0' || value === '$0.' || value === '$0.00' || value === '0.00' || value === '$0.0' || value === '0.0' || value === '$.00' || value === '.00' || value === '.0' || value === '$.' || value === '.' || value === '.0');
};

export const emailPattern = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,5}$';

export const dateYYYYMMDDPattern = '(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))';

export const time24HPattern = '([01]?[0-9]|2[0-3]):[0-5][0-9]';

export const currencyPattern = '^\$\d{1,3}(,\d{3})*(\.\d+)?$';

export const currencyRegex = /(?=.*\d)^\$?(([1-9]\d{0,8})|0)?(\.\d{1,2})?$/;

export const currencyCommaRegex = /(?=.*\d)^\$?-?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;
