export function dateFormat(date) {
  const myDate = new Date(date).toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  return myDate;
}
