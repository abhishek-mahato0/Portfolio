export function getFormattedExperience() {
  const startDate = new Date("2022-09-05");
  const now = new Date();
  const diffInMs = Number(now) - Number(startDate);
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;

  const exactYears = diffInMs / msInYear;
  const fullYears = Math.floor(exactYears);
  const decimal = (exactYears - fullYears).toFixed(2).split(".")[1]; // Get only the first 2 digits after decimal

  const firstDecimalDigit = parseInt(decimal[0], 10); // First digit after '.'

  if (firstDecimalDigit < 5) {
    return `${fullYears}+ years`;
  } else {
    return `${fullYears + 1} years`;
  }
}