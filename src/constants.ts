export const YEARS = ((endYear?: number) => {
  let currentYear = endYear || new Date().getFullYear();
  const years = [];
  const finalYear = currentYear - 11;
  while (currentYear != finalYear) {
    years.push(currentYear--);
  }   
  return years;
})();