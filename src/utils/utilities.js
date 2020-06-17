export const formatNumber = (number) => {
  return number.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const centsToNormal = (cents) => {
  return cents / 100;
};

export const currencyToCents = (currency) => {
  return currency.split('$')[1] * 100;
};

export const cleanText = (text) => {
  const stringFormat = /[^\w\s ]/gi;
  return text.replace(stringFormat, '');
};

export const getCurrentDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}/${mm}/${dd}`;
};

export const getCurrentTime = () => {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}`;
};
