import { formatDate } from "./formatters";

// Function to group invoices by date
export function groupInvoicesByDate(invoices) {
      return invoices.reduce((acc, invoice) => {
            const dateKey = formatDate(invoice.date);

            if (!acc[dateKey]) {
                  acc[dateKey] = [];
            }

            acc[dateKey].push(invoice);
            return acc;
      }, {});
}

// Helper function to get status badge color
export const getBadgeColor = (status) => {
      switch (status) {
            case "PAID":
                  return "bg-green-100 text-green-700"; // Adjust colors according to your design
            case "OVERDUE":
                  return "bg-red-100 text-red-700";
            case "DRAFT":
                  return "bg-gray-100 text-gray-700";
            case "PENDING PAYMENT":
                  return "bg-yellow-100 text-yellow-700";
            default:
                  return "bg-gray-100 text-gray-700";
      }
};
