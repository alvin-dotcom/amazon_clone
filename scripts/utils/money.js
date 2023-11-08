export function formatCurrency(priceRs) {
  return (Math.round(priceRs)).toFixed(2);
}

export default formatCurrency;