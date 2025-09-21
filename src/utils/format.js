export function formatNGN(amount) {
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₦${amount}`;
  }
}
