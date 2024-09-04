export function formatToCurrency(number, currency = "USD", locale = "en-US") {
      // Format the number to a currency string
      const formatted = new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 2,
      }).format(number);

      // Split the formatted string into main amount and cents
      const [main, cents] = formatted.split(".");

      return { main, cents: cents ? "." + cents : "" };
}
