// add a simple function to format a date
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

// add a simple function to format a number
const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

// check what is the current environment
const isProduction = process.env.NODE_ENV === "production";

export { formatDate, formatNumber, isProduction };
