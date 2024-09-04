export const account_overview = [
      {
            title: "TOTAL PAID",
            count: 1289,
            amount: 4120102.76,
            color: "green",
      },
      {
            title: "TOTAL OVERDUE",
            count: 13,
            amount: 23000.13,
            color: "red",
      },
      {
            title: "TOTAL DRAFT",
            count: 8,
            amount: 12200.0,
            color: "gray",
      },
      {
            title: "TOTAL UNPAID",
            count: 6,
            amount: 87102.0,
            color: "yellow",
      },
];

export const invoices = [
      {
            id: "1023494 - 2304",
            date: new Date("2022-11-27"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "PAID", // Can be "PAID", "OVERDUE", "DRAFT", "PENDING PAYMENT"
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-11-27"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "OVERDUE",
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-12-08"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "DRAFT",
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-12-08"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "PENDING PAYMENT",
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-12-08"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "PAID",
      },
];

export const recentActivities = [
      {
            id: 1,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z", // ISO format for the date and time
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png", // URL of the avatar image
      },
      {
            id: 2,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z",
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
      },
      {
            id: 3,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z",
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653726/awkshunavatars/q85catpupidafbnn6nmc.png",
      },
      {
            id: 4,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z",
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653726/awkshunavatars/q85catpupidafbnn6nmc.png",
      },
];
