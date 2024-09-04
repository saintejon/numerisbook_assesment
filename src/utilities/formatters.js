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

function formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
            date
      );

      // Add ordinal suffix to the day
      const day = date.getDate();
      const dayWithSuffix =
            day +
            (day % 10 === 1 && day !== 11
                  ? "st"
                  : day % 10 === 2 && day !== 12
                  ? "nd"
                  : day % 10 === 3 && day !== 13
                  ? "rd"
                  : "th");

      return formattedDate.replace(/\d+/, dayWithSuffix);
}
